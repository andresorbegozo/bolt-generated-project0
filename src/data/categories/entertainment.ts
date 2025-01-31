import { Store } from '../../types';

    const existingEntertainmentStoreNames = new Set(entertainmentStores.map(store => store.name.toLowerCase()));

    const newEntertainmentStores: Store[] = [
      {
        id: 'entertainment-sunrise',
        name: 'Sunrise Records',
        description: 'Ancaster-based music and entertainment retailer',
        url: 'https://www.sunriserecords.com',
        image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80&w=800',
        location: 'Ancaster, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'entertainment-archambault',
        name: 'Archambault',
        description: 'Montreal-based music and book retailer since 1896',
        url: 'https://www.archambault.ca',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
        {
        id: 'entertainment-sunrise-updated',
        name: 'Sunrise Records',
        description: 'A Canadian music retailer that expanded by acquiring former HMV locations, focusing on vinyl, CDs, and pop-culture merchandise.',
        url: 'https://www.sunriserecords.com',
        image: 'https://images.unsplash.com/photos/FZ1gqh4jDw4?auto=format&fit=crop&q=80&w=800',
        location: 'Ancaster, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    export const entertainmentStores: Store[] = [
      ...entertainmentStores,
      ...newEntertainmentStores.filter(store => !existingEntertainmentStoreNames.has(store.name.toLowerCase()))
    ];
