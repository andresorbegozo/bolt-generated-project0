import { Store } from '../../types';

    export const fashionStores: Store[] = [];

    const existingFashionStoreNames = new Set(fashionStores.map(store => store.name.toLowerCase()));

    const newFashionStores: Store[] = [
      {
        id: 'fashion-roots',
        name: 'Roots',
        description: 'Toronto-based leather goods, apparel, and accessories retailer',
        url: 'https://www.roots.com',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-aritzia',
        name: 'Aritzia',
        description: 'Vancouver-based women\'s fashion brand',
        url: 'https://www.aritzia.com',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-lululemon',
        name: 'Lululemon',
        description: 'Vancouver-based athletic apparel retailer',
        url: 'https://shop.lululemon.com',
        image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-canada-goose',
        name: 'Canada Goose',
        description: 'Toronto-based luxury outerwear manufacturer',
        url: 'https://www.canadagoose.com',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-stanfields',
        name: 'Stanfield\'s',
        description: 'Truro-based heritage underwear and clothing manufacturer since 1856',
        url: 'https://stanfields.com',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800',
        location: 'Truro, NS',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-samuelsohn',
        name: 'Samuelsohn',
        description: 'Montreal-based luxury menswear manufacturer since 1923',
        url: 'https://samuelsohn.com',
        image: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-frank-oak',
        name: 'Frank And Oak',
        description: 'Montreal-based sustainable fashion brand',
        url: 'https://www.frankandoak.com',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-tentree',
        name: 'tentree',
        description: 'Vancouver-based sustainable clothing brand',
        url: 'https://www.tentree.ca',
        image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-kotn',
        name: 'Kotn',
        description: 'An apparel brand focusing on ethically made basics using Egyptian cotton, with a transparent supply chain.',
        url: 'https://www.kotn.com',
        image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-duer',
        name: 'DUER',
        description: 'A clothing company specializing in performance denim and pants designed for active lifestyles.',
        url: 'https://shopduer.com',
        image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-anian',
        name: 'Anian',
        description: 'A sustainable clothing brand known for using recycled natural fibers in casual, outdoor-inspired apparel.',
        url: 'https://anianmfg.com',
        image: 'https://unsplash.com/photos/5QgIuuBxKwM',
        location: 'Victoria, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-populess',
        name: 'Populess',
        description: 'A clothing brand based in Lethbridge, Alberta.',
        url: 'https://populess.com',
        image: 'https://unsplash.com/photos/8mj-o2H5PKE',
        location: 'Lethbridge, AB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-encircled',
        name: 'Encircled',
        description: 'A Toronto-based sustainable clothing brand.',
        url: 'https://encircled.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-province-of-canada',
        name: 'Province of Canada',
        description: 'A Toronto-based clothing brand.',
        url: 'https://provinceofcanada.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-reigning-champ',
        name: 'Reigning Champ',
        description: 'A Vancouver-based athletic wear brand.',
        url: 'https://reigningchamp.com',
        image: 'https://images.unsplash.com/photos/nyL-rzwP-Mk',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-hemlock-and-oak',
        name: 'Hemlock and Oak',
        description: 'A Vancouver-based clothing brand.',
        url: 'https://hemlockandoak.com',
        image: 'https://images.unsplash.com/photos/nyL-rzwP-Mk',
        location: 'Vancouver, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-nab-leather',
        name: 'NAB Leather',
        description: 'A Toronto-based leather goods company.',
        url: 'https://nabsleather.com',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-garneau-slippers',
        name: 'Garneau Slippers',
        description: 'A Quebec-based manufacturer of slippers and footwear.',
        url: 'https://garneauslippers.com',
        image: 'https://images.unsplash.com/photos/1ddol8rgUH8',
        location: 'East Hereford, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-martino-boots',
        name: 'Martino Boots',
        description: 'A Quebec-based manufacturer of boots and footwear.',
        url: 'https://martinobots.com',
        image: 'https://images.unsplash.com/photos/1ddol8rgUH8',
        location: 'Quebec City, QC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-canada-west-boots',
        name: 'Canada West Boots',
        description: 'A Winnipeg-based manufacturer of boots and footwear.',
        url: 'https://canadawestboots.com',
        image: 'https://images.unsplash.com/photos/1ddol8rgUH8',
        location: 'Winnipeg, MB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-tatra-safety-boots',
        name: 'Tatra Safety Boots',
        description: 'A Mississauga-based manufacturer of safety boots.',
        url: 'https://tatrasafetyboots.com',
        image: 'https://images.unsplash.com/photo-1Sjg2Ml3-3M',
        location: 'Mississauga, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'fashion-100-ways',
        name: '100 Ways',
        description: 'A Toronto-based clothing brand.',
        url: 'https://100ways.ca',
        image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      }
    ];

    fashionStores.push(...newFashionStores);
