export interface Store {
      id: string;
      name: string;
      description: string;
      url: string;
      image: string;
      location: string;
      isCorporate: boolean;
      isFranchise: boolean;
      isCanadianOwned: boolean;
      isCanadianMajorityInvested: boolean;
      isForeignMajorityInvested: boolean;
      type?: string;
    }

    export interface Category {
      id: string;
      title: string;
      stores: Store[];
    }

    export type BusinessFilter = 'all' | 'corporate-franchise' | 'independent' | 'groceries';
    export type OwnershipFilter = 'all' | 'canadian-owned' | 'canadian-majority' | 'foreign-majority';

    export interface Product {
      id: string;
      name: string;
      description: string;
      image: string;
      location: string;
      type: string;
    }
