import { Store } from '../types.js';
import { SearchCollector } from './searchCollector.js';
import { CategoryManager } from './categoryManager.js';

export class SearchProcessor {
  static async processCompany(
    companyName: string,
    category: string
  ): Promise<Store | null> {
    // 1. Search and verify company
    const companyData = await SearchCollector.searchAndVerify(companyName);
    if (!companyData) {
      console.log(`${companyName} failed verification`);
      return null;
    }

    // 2. Process through category manager
    const success = await CategoryManager.processNewCompany(companyData);
    if (!success) {
      console.log(`${companyName} failed category processing`);
      return null;
    }

    return companyData;
  }

  static async batchProcess(
    companies: { name: string; category: string }[]
  ): Promise<Store[]> {
    const results: Store[] = [];

    for (const company of companies) {
      const result = await this.processCompany(company.name, company.category);
      if (result) {
        results.push(result);
      }
    }

    return results;
  }
}
