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
      },
      {
        id: 'finance-rbc',
        name: 'Royal Bank of Canada (RBC)',
        description: 'A major Canadian bank providing a wide range of financial services.',
        url: 'https://www.rbc.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Banking'
      },
      {
        id: 'finance-td',
        name: 'Toronto-Dominion Bank (TD Bank)',
        description: 'A major Canadian bank providing a wide range of financial services.',
        url: 'https://www.td.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Banking'
      },
      {
        id: 'finance-scotiabank',
        name: 'Bank of Nova Scotia (Scotiabank)',
        description: 'A major Canadian bank providing a wide range of financial services.',
        url: 'https://www.scotiabank.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Banking'
      },
      {
        id: 'finance-bmo',
        name: 'Bank of Montreal (BMO)',
        description: 'A major Canadian bank providing a wide range of financial services.',
        url: 'https://www.bmo.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, Quebec',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Banking'
      },
      {
        id: 'finance-cibc',
        name: 'Canadian Imperial Bank of Commerce (CIBC)',
        description: 'A major Canadian bank providing a wide range of financial services.',
        url: 'https://www.cibc.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Banking'
      },
      {
        id: 'finance-manulife',
        name: 'Manulife Financial Corporation',
        description: 'A Canadian insurance company providing financial services.',
        url: 'https://www.manulife.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Insurance'
      },
      {
        id: 'finance-sunlife',
        name: 'Sun Life Financial',
        description: 'A Canadian insurance company providing financial services.',
        url: 'https://www.sunlife.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Insurance'
      },
      {
        id: 'finance-greatwest',
        name: 'Great-West Lifeco',
        description: 'A Canadian insurance company providing financial services.',
        url: 'https://www.greatwestlifeco.com',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Winnipeg, Manitoba',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Insurance'
      },
      {
        id: 'finance-brookfield',
        name: 'Brookfield Asset Management',
        description: 'A Canadian asset management company.',
        url: 'https://www.brookfield.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Asset Management'
      }
    ];

    financeStores.push(...newFinanceStores.filter(store => !existingFinanceStoreNames.has(store.name.toLowerCase())));
