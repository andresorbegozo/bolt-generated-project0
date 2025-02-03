import { Store } from '../../types';

    export const bookStores: Store[] = [];

    const existingBookStoreNames = new Set(bookStores.map(store => store.name.toLowerCase()));

    const newBookStores: Store[] = [
      {
        id: 'book-indigo',
        name: 'Indigo Books & Music',
        description: 'Toronto-based largest book, gift, and specialty toy retailer',
        url: 'https://www.chapters.indigo.ca',
        image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-mcnally',
        name: 'McNally Robinson',
        description: 'Winnipeg-based independent bookstore chain',
        url: 'https://www.mcnallyrobinson.com',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
        location: 'Winnipeg, MB',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-munro',
        name: 'Munro\'s Books',
        description: 'Victoria-based independent bookstore since 1963',
        url: 'https://www.munrobooks.com',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
        location: 'Victoria, BC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-type',
        name: 'Type Books',
        description: 'Toronto-based independent bookstore',
        url: 'https://typebooks.ca',
        image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-librairie-wilson',
        name: 'Librairie Wilson',
        description: 'Montreal-based independent bookstore since 1909',
        url: 'https://www.librairiewilson.ca',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-westminster',
        name: 'Westminster Books',
        description: 'Fredericton-based independent bookstore since 1975',
        url: 'https://www.westminsterbooks.com',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
        location: 'Fredericton, NB',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      },
      {
        id: 'book-bookmark',
        name: 'The Bookmark',
        description: 'Charlottetown-based independent bookstore since 1972',
        url: 'https://www.bookmarkreads.ca',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
        location: 'Charlottetown, PE',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Books'
      }
    ];

    bookStores.push(...newBookStores);
