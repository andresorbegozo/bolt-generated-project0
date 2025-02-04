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
        isForeignMajorityInvested: false,
        type: 'Software'
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
        isForeignMajorityInvested: false,
        type: 'Software'
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
        isForeignMajorityInvested: false,
        type: 'Simulators'
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
        isForeignMajorityInvested: false,
        type: 'Electronics'
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
        isForeignMajorityInvested: false,
        type: 'Audio Equipment'
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
        isForeignMajorityInvested: false,
        type: 'Audio Equipment'
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
        isForeignMajorityInvested: false,
        type: 'Audio Equipment'
      },
      {
        id: 'tech-401-games',
        name: '401 Games',
        description: 'A Toronto-based retailer of board games, card games, and tabletop games.',
        url: 'https://www.401games.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Games'
      },
      {
        id: 'tech-imaginaire',
        name: 'Imaginaire',
        description: 'A Quebec City-based retailer of board games, card games, and tabletop games.',
        url: 'https://imaginaire.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Quebec City, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Games'
      },
      {
        id: 'tech-opentext',
        name: 'OpenText Corporation',
        description: 'A Waterloo-based software company specializing in information management.',
        url: 'https://www.opentext.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Waterloo, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Software'
      },
      {
        id: 'tech-shopify',
        name: 'Shopify',
        description: 'An Ottawa-based e-commerce platform.',
        url: 'https://www.shopify.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Ottawa, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Software'
      },
      {
        id: 'tech-blackberry',
        name: 'BlackBerry Limited',
        description: 'A Waterloo-based software and cybersecurity company.',
        url: 'https://www.blackberry.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Waterloo, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Software'
      }
    ];

    techStores.push(...newTechStores.filter(store => !existingTechStoreNames.has(store.name.toLowerCase())));
