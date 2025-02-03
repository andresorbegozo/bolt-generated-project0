import { Store } from '../../types';

export const beverageStores: Store[] = [
  {
    id: 'beverage-pc-cola',
    name: 'President’s Choice (PC) Cola',
    description: 'Brampton-based private label cola brand.',
    url: 'https://www.presidentschoice.ca',
    image: 'https://images.unsplash.com/photo-1Sjg2Ml3-3M?auto=format&fit=crop&q=80&w=800',
    location: 'Brampton, ON',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Beverages'
  },
  {
    id: 'beverage-oasis',
    name: 'Oasis (by Lassonde Industries)',
    description: 'Rougemont-based juice and beverage brand.',
    url: 'https://www.lassonde.com',
    image: 'https://images.unsplash.com/photo-1Sjg2Ml3-3M?auto=format&fit=crop&q=80&w=800',
    location: 'Rougemont, QC',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Beverages'
  },
  {
    id: 'beverage-sunrype',
    name: 'SunRype',
    description: 'Kelowna-based juice and beverage company.',
    url: 'https://www.sunrype.com',
    image: 'https://images.unsplash.com/photo-1Sjg2Ml3-3M?auto=format&fit=crop&q=80&w=800',
    location: 'Kelowna, BC',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Beverages'
  },
  {
    id: 'beverage-biosteel',
    name: 'BioSteel',
    description: 'Toronto-based sports nutrition and hydration company.',
    url: 'https://www.biosteel.com',
    image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
    location: 'Toronto, ON',
    isCorporate: true,
    isFranchise: false,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Beverages'
  },
  {
    id: 'beverage-second-cup',
    name: 'Second Cup',
    description: 'Mississauga-based coffee chain.',
    url: 'https://www.secondcup.com',
    image: 'https://images.unsplash.com/photo-1Sjg2Ml3-3M?auto=format&fit=crop&q=80&w=800',
    location: 'Mississauga, ON',
    isCorporate: false,
    isFranchise: true,
    isCanadianOwned: true,
    isCanadianMajorityInvested: true,
    isForeignMajorityInvested: false,
    type: 'Beverages'
  }
];
