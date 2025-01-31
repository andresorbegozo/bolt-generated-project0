import { Store } from '../../types';

    export const petStores: Store[] = [];

    const existingPetStoreNames = new Set(petStores.map(store => store.name.toLowerCase()));

    const newPetStores: Store[] = [
      {
        id: 'pet-mondou',
        name: 'Mondou',
        description: 'Montreal-based pet supply retailer since 1938',
        url: 'https://www.mondou.com',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'pet-tail-blazers',
        name: 'Tail Blazers',
        description: 'Calgary-based natural pet food and supplies retailer',
        url: 'https://www.tailblazerspets.com',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
        location: 'Calgary, AB',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'pet-global',
        name: 'Global Pet Foods',
        description: 'Brampton-based natural and holistic pet supply retailer',
        url: 'https://www.globalpetfoods.com',
        image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=800',
        location: 'Brampton, ON',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    petStores.push(...newPetStores);
