import { Store } from '../types.js';

export class OwnershipVerifier {
  // Verify Canadian ownership requirements
  static async verifyOwnership(company: Store): Promise<boolean> {
    // Check headquarters location
    if (!this.isCanadianHeadquarters(company.location)) {
      return false;
    }

    // Additional ownership checks would be implemented here
    // using data from SEDAR+, Industry Canada, etc.
    return true;
  }

  private static isCanadianHeadquarters(location: string): boolean {
    const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
    const [, province] = location.split(',').map(s => s.trim());
    return provinces.includes(province);
  }
}

export class DataVerifier {
  static async verifyCompany(company: Store): Promise<boolean> {
    try {
      // 1. Verify Canadian ownership
      const ownershipValid = await OwnershipVerifier.verifyOwnership(company);
      if (!ownershipValid) return false;

      // 2. Verify data completeness
      if (!this.verifyRequiredFields(company)) return false;

      // 3. Verify URLs
      if (!this.verifyUrls(company)) return false;

      return true;
    } catch (error) {
      console.error(`Error verifying company ${company.name}:`, error);
      return false;
    }
  }

  private static verifyRequiredFields(company: Store): boolean {
    const requiredFields: (keyof Store)[] = [
      'id', 'name', 'description', 'url', 'image', 
      'location', 'isCorporate', 'isFranchise'
    ];

    return requiredFields.every(field => {
      const value = company[field];
      return value !== undefined && value !== null && value !== '';
    });
  }

  private static verifyUrls(company: Store): boolean {
    // Verify website URL
    if (!company.url.startsWith('https://')) return false;

    // Verify image URL is from Unsplash
    if (!company.image.startsWith('https://images.unsplash.com/')) return false;

    return true;
  }
}
