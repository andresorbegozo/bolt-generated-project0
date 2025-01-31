import { Store } from '../../types';

    export const rideshareStores: Store[] = [];

    const existingRideShareStoreNames = new Set(rideshareStores.map(store => store.name.toLowerCase()));

    const newRideShareStores: Store[] = [
      {
        id: 'rideshare-facedrive',
        name: 'Facedrive',
        description: 'Toronto-based eco-friendly ridesharing platform',
        url: 'https://www.facedrive.com',
        image: 'https://images.unsplash.com/photo-1549369925-95f3b4b89b09?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'rideshare-local-taxi',
        name: 'Co-op Taxi',
        description: 'Canadian cooperative of local taxi companies with modern ride-hailing apps',
        url: 'https://cooptaxi.ca',
        image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: false,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    rideshareStores.push(...newRideShareStores.filter(store => !existingRideShareStoreNames.has(store.name.toLowerCase())));
