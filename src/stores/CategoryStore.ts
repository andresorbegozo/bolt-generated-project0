import { categories } from '../data/categories';

class CategoryStore {
  private static instance: CategoryStore;
  private _categories = categories;
  private _loadedCategories = new Set<string>();

  private constructor() {
    // Initialize store
    this._categories.forEach(cat => {
      if (cat.stores && cat.stores.length > 0) {
        this._loadedCategories.add(cat.id);
      }
    });
  }

  static getInstance(): CategoryStore {
    if (!CategoryStore.instance) {
      CategoryStore.instance = new CategoryStore();
    }
    return CategoryStore.instance;
  }

  get allCategories() {
    return this._categories;
  }

  get loadedCategories() {
    return Array.from(this._loadedCategories);
  }

  get categoryCount() {
    return this._categories.length;
  }

  get totalStores() {
    return this._categories.reduce((sum, cat) => sum + cat.stores.length, 0);
  }

  isCategoryLoaded(categoryId: string): boolean {
    return this._loadedCategories.has(categoryId);
  }
}

export const categoryStore = CategoryStore.getInstance();
