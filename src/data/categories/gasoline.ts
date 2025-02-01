import { Store } from '../../types';

    const newGasolineStores: Store[] = [
      {
        id: 'gas-irving',
        name: 'Irving Oil',
        description: 'Saint John-based family-owned energy company operating since 1924',
        url: 'https://www.irvingoil.com',
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=800',
        location: 'Saint John, NB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'gas-parkland',
        name: 'Parkland Corporation',
        description: 'Calgary-based operator of Pioneer, Ultramar, and Fas Gas Plus stations',
        url: 'https://www.parkland.ca',
        image: 'https://images.unsplash.com/photo-1542367906-b3b1b2525646?auto=format&fit=crop&q=80&w=800',
        location: 'Calgary, AB',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'gas-macewen',
        name: 'MacEwen Petroleum',
        description: 'Maxville-based independent fuel and convenience store operator',
        url: 'https://macewen.ca',
        image: 'https://images.unsplash.com/photo-1542367592-8849eb7cbdd6?auto=format&fit=crop&q=80&w=800',
        location: 'Maxville, ON',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'gas-wilson',
        name: 'Wilson Fuel Co',
        description: 'Halifax-based family-owned fuel company operating since 1930',
        url: 'https://wilsonsfuel.ca',
        image: 'https://images.unsplash.com/photo-1542367592-8849eb7cbdd6?auto=format&fit=crop&q=80&w=800',
        location: 'Halifax, NS',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'gas-crevier',
        name: 'Groupe Crevier',
        description: 'Montreal-based independent fuel distributor operating since 1945',
        url: 'https://www.groupecrevier.com',
        image: 'https://images.unsplash.com/photo-1542367592-8849eb7cbdd6?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    const existingGasolineStoreNames = new Set(newGasolineStores.map(store => store.name.toLowerCase()));

    export const gasolineStores = [
      ...newGasolineStores.filter(store => !existingGasolineStoreNames.has(store.name.toLowerCase()))
    ];
