import { Store } from '../../types';

    export const conglomerateStores: Store[] = [];

    const existingConglomerateStoreNames = new Set(conglomerateStores.map(store => store.name.toLowerCase()));

    const newConglomerateStores: Store[] = [
      {
        id: 'conglomerate-jim-pattison',
        name: 'Jim Pattison Group',
        description: 'One of Canada’s largest private conglomerates, active in grocery, media, automotive, and more.',
        url: 'https://www.jimpattison.com',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    conglomerateStores.push(...newConglomerateStores);
