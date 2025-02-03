import { Store } from '../../types';

    export const energyStores: Store[] = [];

    const existingEnergyStoreNames = new Set(energyStores.map(store => store.name.toLowerCase()));

    const newEnergyStores: Store[] = [
      {
        id: 'energy-teck',
        name: 'Teck Resources',
        description: 'Vancouver-based diversified resource company.',
        url: 'https://www.teck.com',
        image: 'https://unsplash.com/photos/5QgIuuBxKwM',
        location: 'Vancouver, British Columbia',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Mining'
      },
      {
        id: 'energy-nutrien',
        name: 'Nutrien',
        description: 'Saskatoon-based producer of potash and other fertilizers.',
        url: 'https://www.nutrien.com',
        image: 'https://unsplash.com/photos/1Sjg2Ml3-3M',
        location: 'Saskatoon, Saskatchewan',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Fertilizers'
      },
      {
        id: 'energy-cnrl',
        name: 'Canadian Natural Resources Limited (CNRL)',
        description: 'Calgary-based oil and natural gas producer.',
        url: 'https://www.cnrl.com',
        image: 'https://unsplash.com/photos/1Sjg2Ml3-3M',
        location: 'Calgary, Alberta',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Oil and Gas'
      },
      {
        id: 'energy-suncor',
        name: 'Suncor Energy',
        description: 'Calgary-based integrated energy company.',
        url: 'https://www.suncor.com',
        image: 'https://unsplash.com/photos/1Sjg2Ml3-3M',
        location: 'Calgary, Alberta',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Energy'
      }
    ];

    energyStores.push(...newEnergyStores.filter(store => !existingEnergyStoreNames.has(store.name.toLowerCase())));
