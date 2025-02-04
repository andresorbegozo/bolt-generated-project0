import { Store } from '../../types';

    export const mediaStores: Store[] = [];

    const existingMediaStoreNames = new Set(mediaStores.map(store => store.name.toLowerCase()));

    const newMediaStores: Store[] = [
      {
        id: 'media-bell',
        name: 'Bell Media',
        description: 'Toronto-based multimedia company operating TV, radio, and digital platforms',
        url: 'https://www.bellmedia.ca',
        image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Media'
      },
      {
        id: 'media-rogers',
        name: 'Rogers Communications',
        description: 'Toronto-based communications and media company',
        url: 'https://www.rogers.com',
        image: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Media'
      },
      {
        id: 'media-quebecor',
        name: 'Quebecor',
        description: 'Montreal-based telecommunications and entertainment company',
        url: 'https://www.quebecor.com',
        image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Media'
      },
      {
        id: 'media-corus',
        name: 'Corus Entertainment',
        description: 'Toronto-based media and content company',
        url: 'https://www.corusent.com',
        image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Media'
      },
      {
        id: 'media-cbc',
        name: 'CBC/Radio-Canada',
        description: 'Ottawa-based national public broadcaster',
        url: 'https://www.cbc.ca',
        image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80&w=800',
        location: 'Ottawa, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Broadcasting'
      },
      {
        id: 'media-thunderbird',
        name: 'Thunderbird Entertainment',
        description: 'Vancouver-based production company creating animated and factual content',
        url: 'https://thunderbird.tv',
        image: 'https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Production'
      },
      {
        id: 'media-wildbrain',
        name: 'WildBrain',
        description: 'Halifax-based children\'s content producer and distributor',
        url: 'https://www.wildbrain.com',
        image: 'https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?auto=format&fit=crop&q=80&w=800',
        location: 'Halifax, NS',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Production'
      },
      {
        id: 'media-thomson-reuters',
        name: 'Thomson Reuters Corporation',
        description: 'A Toronto-based media and information company.',
        url: 'https://www.thomsonreuters.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Media'
      },
      {
        id: 'media-bce',
        name: 'BCE Inc. (Bell Canada)',
        description: 'A Montreal-based telecommunications company.',
        url: 'https://www.bce.ca',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, Quebec',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Telecommunications'
      },
      {
        id: 'media-rogers-communications',
        name: 'Rogers Communications',
        description: 'A Toronto-based communications and media company.',
        url: 'https://www.rogers.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Telecommunications'
      },
      {
        id: 'media-telus',
        name: 'Telus Corporation',
        description: 'A Vancouver-based telecommunications company.',
        url: 'https://www.telus.com',
        image: 'https://images.unsplash.com/photo-5QgIuuBxKwM',
        location: 'Vancouver, British Columbia',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Telecommunications'
      }
    ];

    mediaStores.push(...newMediaStores.filter(store => !existingMediaStoreNames.has(store.name.toLowerCase())));
