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
        isForeignMajorityInvested: false,
        type: 'Retail'
      },
      {
        id: 'supermarket-empire',
        name: 'Empire Company Limited (Sobeys)',
        description: 'Stellarton-based parent company of Sobeys grocery chain.',
        url: 'https://www.empireco.ca',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Stellarton, Nova Scotia',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Grocery'
      },
      {
        id: 'supermarket-metro',
        name: 'Metro Inc.',
        description: 'Montreal-based grocery and pharmacy chain.',
        url: 'https://www.metro.ca',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, Quebec',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Grocery'
      },
      {
        id: 'supermarket-dollarama',
        name: 'Dollarama',
        description: 'Montreal-based discount retail chain.',
        url: 'https://www.dollarama.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, Quebec',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Retail'
      }
    ];

    superStores.push(...newSuperStores);
