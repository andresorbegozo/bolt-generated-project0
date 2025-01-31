import { Store } from '../../types';

    export const techStores: Store[] = [];

    const existingTechStoreNames = new Set(techStores.map(store => store.name.toLowerCase()));

    const newTechStores: Store[] = [
      {
        id: 'tech-docebo',
        name: 'Docebo',
        description: 'A learning management software company founded in Italy but headquartered in Canada, publicly traded on TSX and Nasdaq.',
        url: 'https://www.docebo.com/',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-workleap',
        name: 'Workleap (formerly GSoft)',
        description: 'A software development firm known for creating employee engagement and productivity tools (e.g., Officevibe).',
        url: 'https://www.workleap.com/',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-cae',
        name: 'CAE',
        description: 'A global leader in flight simulators and training for civil aviation, defence, and healthcare.',
        url: 'https://www.cae.com/',
        image: 'https://images.unsplash.com/photo-1586528116493-ce69d3c10afc?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-memoryexpress',
        name: 'Memory Express',
        description: 'A Canadian computer and electronics retailer with multiple stores across Western Canada.',
        url: 'https://www.memoryexpress.com/',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
        location: 'Calgary, AB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-totem-acoustic',
        name: 'Totem Acoustic',
        description: 'A Montreal-based manufacturer of high-end loudspeakers.',
        url: 'https://totemacoustic.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-psb-speakers',
        name: 'PSB Speakers',
        description: 'A Pickering-based manufacturer of high-fidelity loudspeakers.',
        url: 'https://psbspeakers.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Pickering, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-fluance',
        name: 'Fluance',
        description: 'A Niagara Falls-based manufacturer of high-performance audio equipment.',
        url: 'https://www.fluance.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Niagara Falls, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-401-games',
        name: '401 Games',
        description: 'A Toronto-based retailer of board games, card games, and tabletop games.',
        url: 'https://www.401games.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'tech-imaginaire',
        name: 'Imaginaire',
        description: 'A Quebec City-based retailer of board games, card games, and tabletop games.',
        url: 'https://imaginaire.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8',
        location: 'Quebec City, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    techStores.push(...newTechStores);
