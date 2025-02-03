import { Store } from '../../types';

    export const pharmacyStores: Store[] = [];

    const existingPharmacyStoreNames = new Set(pharmacyStores.map(store => store.name.toLowerCase()));

    const newPharmacyStores: Store[] = [
      {
        id: 'pharmacy-jean-coutu',
        name: 'Jean Coutu',
        description: 'Quebec-based pharmacy chain founded in 1969',
        url: 'https://www.jeancoutu.com',
        image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
        location: 'Varennes, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Pharmacy'
      },
      {
        id: 'pharmacy-familiprix',
        name: 'Familiprix',
        description: 'Quebec-based cooperative of independent pharmacists',
        url: 'https://www.familiprix.com',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800',
        location: 'Quebec City, QC',
        isCorporate: false,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Pharmacy'
      },
      {
        id: 'pharmacy-pharmasave',
        name: 'Pharmasave',
        description: 'Canadian-owned cooperative of independent pharmacies since 1981',
        url: 'https://www.pharmasave.com',
        image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: false,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Pharmacy'
      },
      {
        id: 'pharmacy-uniprix',
        name: 'Uniprix',
        description: 'Quebec-based pharmacy chain owned by independent pharmacists',
        url: 'https://www.uniprix.com',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: false,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Pharmacy'
      }
    ];

    pharmacyStores.push(...newPharmacyStores.filter(store => !existingPharmacyStoreNames.has(store.name.toLowerCase())));
