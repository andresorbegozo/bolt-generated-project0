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
        isForeignMajorityInvested: false,
        type: 'Financial Services'
      },
      {
        id: 'finance-helcim',
        name: 'Helcim',
        description: 'Calgary-based payment processing company with built-in invoicing and no monthly fees.',
        url: 'https://www.helcim.com',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        location: 'Calgary, AB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Payment Processing'
      },
      {
        id: 'finance-wave',
        name: 'Wave',
        description: 'Toronto-based provider of free invoicing and accounting software.',
        url: 'https://www.waveapps.com',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Accounting Software'
      },
      {
        id: 'finance-payfirma',
        name: 'Payfirma',
        description: 'Vancouver-based company providing invoicing and payment processing for businesses.',
        url: 'https://www.payfirma.com',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Payment Processing'
      },
      {
        id: 'finance-moneris',
        name: 'Moneris',
        description: 'Toronto-based payment processing company with customizable invoicing solutions.',
        url: 'https://www.moneris.com',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Payment Processing'
      }
    ];

    financeStores.push(...newFinanceStores.filter(store => !existingFinanceStoreNames.has(store.name.toLowerCase())));
