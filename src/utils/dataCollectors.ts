import { Store } from '../types.js';

// Data source interfaces
interface CompanyRegistry {
  fetchCanadianCompanies(): Promise<Store[]>;
  verifyOwnership(companyId: string): Promise<boolean>;
}

// Industry Canada Open Database Collector
class IndustryCanadaCollector implements CompanyRegistry {
  private readonly API_ENDPOINT = 'https://open.canada.ca/data/api/3/action/package_search';
  
  async fetchCanadianCompanies(): Promise<Store[]> {
    try {
      const response = await fetch(`${this.API_ENDPOINT}?q=organization:ic&rows=1000`);
      const contentType = response.headers.get('content-type');
      
      // Verify we received JSON
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Industry Canada API returned non-JSON response');
        return [];
      }

      const data = await response.json();
      if (!data?.result?.results) {
        console.error('Invalid data structure from Industry Canada API');
        return [];
      }

      return this.transformData(data.result.results);
    } catch (error) {
      console.error('Error fetching from Industry Canada:', error);
      return [];
    }
  }

  private transformData(results: any[]): Store[] {
    if (!Array.isArray(results)) return [];

    return results
      .filter(result => this.isValidCompany(result))
      .map(result => ({
        id: this.generateId(result),
        name: result.title || '',
        description: result.notes || 'Canadian-owned business',
        url: result.url || '',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        location: this.extractLocation(result),
        isCorporate: this.isCorporate(result),
        isFranchise: false
      }));
  }

  private isValidCompany(result: any): boolean {
    return (
      result &&
      typeof result === 'object' &&
      result.title &&
      result.organization &&
      result.organization.title?.includes('Canada') &&
      !result.title.includes('Government') &&
      !result.title.includes('Ministry')
    );
  }

  private generateId(result: any): string {
    const id = result.id || Math.random().toString(36).substring(2);
    return `ic-${id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }

  private extractLocation(result: any): string {
    const defaultLocation = 'Toronto, ON';
    if (!result.extras) return defaultLocation;
    
    try {
      const locationExtra = result.extras.find((extra: any) => 
        extra.key?.toLowerCase().includes('location') ||
        extra.key?.toLowerCase().includes('address')
      );
      
      return locationExtra?.value || defaultLocation;
    } catch {
      return defaultLocation;
    }
  }

  private isCorporate(result: any): boolean {
    const corporateKeywords = ['corporation', 'limited', 'ltd', 'inc'];
    return corporateKeywords.some(keyword => 
      result.title?.toLowerCase().includes(keyword)
    );
  }

  async verifyOwnership(companyId: string): Promise<boolean> {
    return true;
  }
}

// Provincial Business Registry Collector
class ProvincialRegistryCollector implements CompanyRegistry {
  private readonly province: string;
  private readonly API_ENDPOINTS: Record<string, string> = {
    'ON': 'https://data.ontario.ca/api/3/action/package_search?q=business+registry',
    'BC': 'https://catalogue.data.gov.bc.ca/api/3/action/package_search?q=business+registry',
    'AB': 'https://open.alberta.ca/api/3/action/package_search?q=business+registry',
    'QC': 'https://www.donneesquebec.ca/api/3/action/package_search?q=business+registry',
    'NS': 'https://data.novascotia.ca/api/3/action/package_search?q=business+registry'
  };

  constructor(province: string) {
    this.province = province;
  }

  async fetchCanadianCompanies(): Promise<Store[]> {
    const endpoint = this.API_ENDPOINTS[this.province];
    if (!endpoint) return [];

    try {
      const response = await fetch(endpoint);
      const contentType = response.headers.get('content-type');
      
      // Verify we received JSON
      if (!contentType || !contentType.includes('application/json')) {
        console.error(`${this.province} registry API returned non-JSON response`);
        return [];
      }

      const data = await response.json();
      if (!data?.result?.results) {
        console.error(`Invalid data structure from ${this.province} registry API`);
        return [];
      }

      return this.transformData(data.result.results);
    } catch (error) {
      console.error(`Error fetching from ${this.province} registry:`, error);
      return [];
    }
  }

  private transformData(results: any[]): Store[] {
    if (!Array.isArray(results)) return [];

    return results
      .filter(result => this.isValidBusiness(result))
      .map(result => ({
        id: `${this.province.toLowerCase()}-${result.id || Math.random().toString(36).substring(2)}`,
        name: result.title || '',
        description: result.notes || `Business registered in ${this.province}`,
        url: result.url || '',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        location: `${result.city || 'Unknown'}, ${this.province}`,
        isCorporate: this.isCorporate(result),
        isFranchise: this.isFranchise(result)
      }));
  }

  private isValidBusiness(result: any): boolean {
    return (
      result &&
      typeof result === 'object' &&
      result.title &&
      !result.title.includes('Government') &&
      !result.title.includes('Ministry') &&
      !result.title.includes('Department')
    );
  }

  private isCorporate(result: any): boolean {
    const corporateTerms = ['corporation', 'limited', 'ltd', 'inc'];
    return corporateTerms.some(term => 
      result.title?.toLowerCase().includes(term)
    );
  }

  private isFranchise(result: any): boolean {
    return result.tags?.includes('franchise') || false;
  }

  async verifyOwnership(companyId: string): Promise<boolean> {
    return true;
  }
}

// Main DataCollector class
export class DataCollector {
  private collectors: CompanyRegistry[] = [];

  constructor() {
    // Initialize collectors
    this.collectors = [
      new IndustryCanadaCollector(),
      // Add provincial collectors
      ...['ON', 'BC', 'AB', 'QC', 'NS'].map(
        province => new ProvincialRegistryCollector(province)
      )
    ];
  }

  async collectData(): Promise<Store[]> {
    const allCompanies: Store[] = [];
    const seen = new Set<string>();

    // Collect from all sources in parallel
    const results = await Promise.allSettled(
      this.collectors.map(collector => collector.fetchCanadianCompanies())
    );

    // Process results and deduplicate
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        result.value.forEach(company => {
          if (!seen.has(company.id)) {
            seen.add(company.id);
            allCompanies.push(company);
          }
        });
      }
    });

    return this.filterAndValidate(allCompanies);
  }

  private async filterAndValidate(companies: Store[]): Promise<Store[]> {
    return companies.filter(company => 
      this.validateRequiredFields(company) &&
      this.validateLocation(company.location)
    );
  }

  private validateRequiredFields(company: Store): boolean {
    const required: (keyof Store)[] = [
      'id', 'name', 'description', 'url', 
      'image', 'location', 'isCorporate', 'isFranchise'
    ];
    
    return required.every(field => {
      const value = company[field];
      return value !== undefined && value !== null && value !== '';
    });
  }

  private validateLocation(location: string): boolean {
    const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
    const [, province] = location.split(',').map(s => s.trim());
    return provinces.includes(province);
  }
}
