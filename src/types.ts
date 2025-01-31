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
}

export interface Category {
  id: string;
  title: string;
  stores: Store[];
}

export type BusinessFilter = 'all' | 'corporate-franchise' | 'independent';
export type OwnershipFilter = 'all' | 'canadian-owned' | 'canadian-majority' | 'foreign-majority';
