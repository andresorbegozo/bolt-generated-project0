import { Store } from '../../types';

    export const superStores: Store[] = [];

    const existingSuperStoreNames = new Set(superStores.map(store => store.name.toLowerCase()));

    const newSuperStores: Store[] = [
      {
        id: 'super-simons',
        name: 'La Maison Simons',
        description: 'Quebec City-based fashion and home decor retailer since 1840',
        url: 'https://www.simons.ca',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
        location: 'Quebec City, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    superStores.push(...newSuperStores);
