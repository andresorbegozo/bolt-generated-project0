import { Store } from '../types.js';
import { DataCollector } from './dataCollectors.js';
import { DataVerifier } from './dataVerification.js';
import fs from 'fs/promises';
import path from 'path';

export class DataUpdater {
  private collector: DataCollector;
  private readonly CATEGORIES_DIR: string;
  
  constructor() {
    this.collector = new DataCollector();
    this.CATEGORIES_DIR = path.join(process.cwd(), 'src', 'data', 'categories');
  }

  async updateData(): Promise<void> {
    try {
      // Ensure categories directory exists
      await this.ensureCategoriesDir();

      // Collect and process data
      const companies = await this.collector.collectData();
      const categorizedCompanies = await this.processCategorization(companies);
      
      // Update files with error handling
      await this.updateCategoryFiles(categorizedCompanies);
      
      console.log('Data update completed successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; // Re-throw for retry logic
    }
  }

  private async ensureCategoriesDir(): Promise<void> {
    try {
      await fs.access(this.CATEGORIES_DIR);
    } catch {
      await fs.mkdir(this.CATEGORIES_DIR, { recursive: true });
    }
  }

  private async processCategorization(companies: Store[]): Promise<Record<string, Store[]>> {
    const categories: Record<string, Store[]> = {};
    
    for (const company of companies) {
      try {
        const isValid = await DataVerifier.verifyCompany(company);
        if (!isValid) continue;

        const category = this.determineCategory(company);
        if (!category) continue;

        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(company);
      } catch (error) {
        console.error(`Error processing company ${company.name}:`, error);
      }
    }

    return categories;
  }

  private determineCategory(company: Store): string | null {
    const name = company.name.toLowerCase();
    const desc = company.description.toLowerCase();

    // Retail & Department Stores
    if (
      name.includes('retail') || 
      name.includes('store') || 
      name.includes('shop') ||
      desc.includes('retail store') || 
      desc.includes('department store')
    ) {
      // Exclude specific types of stores that have their own categories
      if (
        !name.includes('book') &&
        !name.includes('toy') &&
        !name.includes('pet') &&
        !name.includes('food') &&
        !name.includes('restaurant') &&
        !name.includes('pharmacy')
      ) {
        return 'retail';
      }
    }

    // More specific categorization for other types
    if (name.includes('food') || desc.includes('food')) return 'food';
    if (name.includes('tech') || desc.includes('tech')) return 'tech';
    if (name.includes('book') || desc.includes('book')) return 'books';
    if (name.includes('toy') || desc.includes('toy')) return 'toys';
    if (name.includes('pet') || desc.includes('pet')) return 'pets';
    if (name.includes('pharmacy') || desc.includes('pharmacy')) return 'pharmacy';
    
    // If no specific category is found, return null instead of defaulting to retail
    return null;
  }

  private async updateCategoryFiles(categorizedCompanies: Record<string, Store[]>): Promise<void> {
    for (const [category, companies] of Object.entries(categorizedCompanies)) {
      try {
        const filePath = path.join(this.CATEGORIES_DIR, `${category}.ts`);
        
        // Read existing content with error handling
        let existingContent = '';
        try {
          existingContent = await fs.readFile(filePath, 'utf-8');
        } catch (error) {
          // Type guard for NodeJS.ErrnoException
          if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') {
            throw error;
          }
        }

        // Merge companies
        const mergedCompanies = this.mergeCompanies(
          this.parseExistingCompanies(existingContent),
          companies
        );

        // Generate and write new content
        const fileContent = this.generateCategoryFile(category, mergedCompanies);
        await this.writeFileSafely(filePath, fileContent);
        
        console.log(`Updated category file: ${category}`);
      } catch (error) {
        console.error(`Error updating category file ${category}:`, error);
      }
    }
  }

  private async writeFileSafely(filePath: string, content: string): Promise<void> {
    const tempPath = `${filePath}.tmp`;
    
    try {
      // Write to temporary file first
      await fs.writeFile(tempPath, content, 'utf-8');
      
      // Rename temporary file to target file
      await fs.rename(tempPath, filePath);
    } catch (error) {
      // Clean up temp file if it exists
      try {
        await fs.unlink(tempPath);
      } catch {
        // Ignore cleanup errors
      }
      throw error;
    }
  }

  private parseExistingCompanies(content: string): Store[] {
    try {
      const match = content.match(/export const \w+Stores = (\[[\s\S]*\]);/);
      return match ? JSON.parse(match[1]) : [];
    } catch (error) {
      console.error('Error parsing existing companies:', error);
      return [];
    }
  }

  private mergeCompanies(existing: Store[], newCompanies: Store[]): Store[] {
    const merged = [...existing];
    const existingIds = new Set(existing.map(c => c.id));

    for (const company of newCompanies) {
      if (!existingIds.has(company.id)) {
        merged.push(company);
        existingIds.add(company.id);
      }
    }

    return merged;
  }

  private generateCategoryFile(category: string, companies: Store[]): string {
    return `// Auto-generated file - do not edit directly
export const ${category}Stores = ${JSON.stringify(companies, null, 2)};
`;
  }
}
