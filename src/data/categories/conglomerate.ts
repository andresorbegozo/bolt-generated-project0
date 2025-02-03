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
        isForeignMajorityInvested: false,
        type: 'Conglomerate'
      },
      {
        id: 'conglomerate-george-weston',
        name: 'George Weston Limited',
        description: 'A Canadian holding company with interests in food processing and retail.',
        url: 'https://www.georgeweston.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Conglomerate'
      },
      {
        id: 'conglomerate-loblaw',
        name: 'Loblaw Companies Limited',
        description: 'A Canadian retail company with grocery and pharmacy chains.',
        url: 'https://www.loblaw.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Brampton, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Conglomerate'
      }
    ];

    conglomerateStores.push(...newConglomerateStores.filter(store => !existingConglomerateStoreNames.has(store.name.toLowerCase())));
