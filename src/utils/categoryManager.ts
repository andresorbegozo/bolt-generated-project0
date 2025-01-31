import { Store } from '../types.js';
import { DataVerifier } from './dataVerification.js';

export class CategoryManager {
  static async processNewCompany(company: Store): Promise<boolean> {
    try {
      // 1. Verify company meets all requirements
      const isValid = await DataVerifier.verifyCompany(company);
      if (!isValid) {
        console.log(`Company ${company.name} failed verification`);
        return false;
      }

      // 2. Additional processing would be implemented here
      // - Category assignment
      // - Duplicate checking
      // - Data normalization

      return true;
    } catch (error) {
      console.error(`Error processing company ${company.name}:`, error);
      return false;
    }
  }

  static normalizeLocation(location: string): string {
    const [city, province] = location.split(',').map(s => s.trim());
    return `${city}, ${province}`;
  }

  static generateId(category: string, name: string): string {
    return `${category}-${name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;
  }
}
