import { Store } from '../../types';

const existingToyStoreNames = new Set(toyStores.map(store => store.name.toLowerCase()));

const newToyStores: Store[] = [
  {
    id: 'toy-toysrus',
    name: 'Toys R Us Canada',
    description: 'A separate legal entity from the US brand, owned by Doug Putman; focuses on toys and games.',
    url: 'https://www.toysrus.ca/',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=800',
    location: 'Concord, ON',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false
  }
];

export const toyStores: Store[] = [
  ...toyStores,
  ...newToyStores.filter(store => !existingToyStoreNames.has(store.name.toLowerCase()))
];
