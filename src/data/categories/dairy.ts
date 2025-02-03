import { Store } from '../../types';

export const dairyStores: Store[] = [
  {
    id: 'food-tre-stelle',
    name: 'Tre Stelle',
    description: 'Toronto-based cheese and dairy products company.',
    url: 'https://www.trestelle.ca',
    image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
    location: 'Toronto, ON',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Dairy'
  },
  {
    id: 'food-gay-lea',
    name: 'Gay Lea',
    description: 'Mississauga-based dairy cooperative.',
    url: 'https://www.gaylea.com',
    image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
    location: 'Mississauga, ON',
    isCorporate: false,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Dairy'
  }
];
