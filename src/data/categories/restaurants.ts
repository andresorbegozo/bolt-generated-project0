import { Store } from '../../types';

    export const restaurantStores: Store[] = [];

    const existingRestaurantStoreNames = new Set(restaurantStores.map(store => store.name.toLowerCase()));

    const newRestaurantStores: Store[] = [
      {
        id: 'restaurant-recipe',
        name: 'Recipe Unlimited',
        description: 'Vaughan-based restaurant company operating Swiss Chalet, Harvey\'s, and other chains',
        url: 'https://www.recipeunlimited.com',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        location: 'Vaughan, ON',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-mtl-bagel',
        name: 'St-Viateur Bagel',
        description: 'Montreal-based iconic bagel shop since 1957',
        url: 'https://www.stviateurbagel.com',
        image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Food'
      },
      {
        id: 'restaurant-la-belle',
        name: 'La Belle Province',
        description: 'Montreal-based Quebec fast-food restaurant chain',
        url: 'https://labelleprovince.com',
        image: 'https://images.unsplash.com/photo-1561758033-7e924f619b47?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-scores',
        name: 'Scores',
        description: 'Quebec-based rotisserie chicken restaurant chain',
        url: 'https://www.scores.ca',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-coras',
        name: 'Cora',
        description: 'Montreal-based breakfast and lunch restaurant chain',
        url: 'https://www.chezcora.com',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-aw',
        name: 'A&W Canada',
        description: 'A well-known fast-food chain separate from its US counterpart, focusing on burgers, fries, and root beer.',
        url: 'https://www.aw.ca/',
        image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=800',
        location: 'North Vancouver, BC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-boston-pizza',
        name: 'Boston Pizza',
        description: 'A popular casual-dining restaurant and sports bar chain serving pizza, pasta, and more across Canada.',
        url: 'https://www.bostonpizza.com/',
        image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=800',
        location: 'Richmond, BC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-robins-donuts',
        name: 'Robin’s Donuts',
        description: 'A coffee and donut chain under Chairman’s Brands, primarily in smaller Canadian markets.',
        url: 'https://www.robinsdonuts.com/',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      },
      {
        id: 'restaurant-ben-and-florentine',
        name: 'Ben & Florentine',
        description: 'A breakfast and lunch restaurant chain specializing in classic brunch items; owned by MTY Food Group.',
        url: 'https://www.benandflorentine.com/',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
        location: 'Montreal, QC',
        isCorporate: true,
        isFranchise: true,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Restaurants'
      }
    ];

    restaurantStores.push(...newRestaurantStores);
