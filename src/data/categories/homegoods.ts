import { Store } from '../../types';

    export const homegoodsStores: Store[] = [];

    const existingHomeGoodsStoreNames = new Set(homegoodsStores.map(store => store.name.toLowerCase()));

    const newHomeGoodsStores: Store[] = [
      {
        id: 'homegoods-stokes',
        name: 'Stokes',
        description: 'Montreal-based kitchenware and home decor retailer since 1935',
        url: 'https://www.stokesstores.com',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Kitchenware'
      },
      {
        id: 'homegoods-quilts',
        name: 'Quilts Etc',
        description: 'Vancouver-based bedding and home textile retailer',
        url: 'https://www.quiltsetc.com',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Textiles'
      },
      {
        id: 'homegoods-linen-chest',
        name: 'Linen Chest',
        description: 'Montreal-based home goods and decor retailer since 1961',
        url: 'https://www.linenchest.com',
        image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Goods'
      },
      {
        id: 'homegoods-benix',
        name: 'Benix & Co.',
        description: 'Toronto-based kitchenware and home accessories retailer',
        url: 'https://www.benix.ca',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Kitchenware'
      },
      {
        id: 'homegoods-lampe-berger',
        name: 'Lampe Berger Canada',
        description: 'Montreal-based home fragrance and air purification company',
        url: 'https://lampeberger.ca',
        image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Fragrance'
      },
      {
        id: 'homegoods-umbra',
        name: 'Umbra',
        description: 'Toronto-based modern home accessories and furniture designer since 1979',
        url: 'https://www.umbra.com',
        image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Decor'
      },
      {
        id: 'homegoods-henson-shaving',
        name: 'Henson Shaving',
        description: 'Almonte-based manufacturer of precision-engineered shaving tools.',
        url: 'https://hensonshaving.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk?auto=format&fit=crop&q=80&w=800',
        location: 'Almonte, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Shaving Tools'
      },
      {
        id: 'homegoods-macausland',
        name: 'MacAusland Woolen Mills',
        description: 'Bloomfield-based manufacturer of woolen blankets and textiles since 1902.',
        url: 'https://www.macausland.ca',
        image: 'https://images.unsplash.com/photo-1ddol8rgUH8?auto=format&fit=crop&q=80&w=800',
        location: 'Bloomfield, PE',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Textiles'
      },
      {
        id: 'homegoods-crow-leather',
        name: 'Crow Leather',
        description: 'A Toronto-based leather goods company.',
        url: 'https://crowleather.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Leather Goods'
      },
      {
        id: 'homegoods-organiclifestyle',
        name: 'Organiclifestyle.ca',
        description: 'A Vancouver-based retailer of organic and sustainable home goods.',
        url: 'https://organiclifestyle.ca',
        image: 'https://images.unsplash.com/photo-NH1d0xX6Ldk',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Goods'
      },
      {
        id: 'homegoods-purdy-natural',
        name: 'Purdy Natural',
        description: 'A London-based retailer of natural and organic home and personal care products.',
        url: 'https://purdynatural.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'London, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Goods'
      },
      {
        id: 'homegoods-stolen-riches',
        name: 'Stolen Riches',
        description: 'A Toronto-based manufacturer of unique and high-quality socks.',
        url: 'https://stolenriches.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Clothing'
      },
      {
        id: 'homegoods-pikes-awnings',
        name: 'Pike’s Awnings',
        description: 'A Toronto-based manufacturer of custom awnings and canopies.',
        url: 'https://www.pikesawnings.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Home Improvement'
      }
    ];

    homegoodsStores.push(...newHomeGoodsStores.filter(store => !existingHomeGoodsStoreNames.has(store.name.toLowerCase())));
