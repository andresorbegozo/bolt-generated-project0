import { Store } from '../../types';

    export const financeStores: Store[] = [];

    const existingFinanceStoreNames = new Set(financeStores.map(store => store.name.toLowerCase()));

    const newFinanceStores: Store[] = [
      {
        id: 'finance-wealthsimple',
        name: 'Wealthsimple',
        description: 'A Canadian financial services platform offering robo-advising, trading, and savings products.',
        url: 'https://www.wealthsimple.com/',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    financeStores.push(...newFinanceStores.filter(store => !existingFinanceStoreNames.has(store.name.toLowerCase())));
