import { Store } from '../../types';
import { groceryStoresPart2 } from './groceryStoresPart2';
import { groceryStoresPart3 } from './groceryStoresPart3';
import { groceryStoresPart4 } from './groceryStoresPart4';

    export const groceryStores: Store[] = [
      {
        id: 'grocery-maple-syrup-agropur',
        name: 'Maple Syrup (Agropur Cooperative)',
        description: 'Authentic Canadian maple syrup, harvested from local maple trees.',
        url: 'https://www.agropur.com',
        image: 'https://images.unsplash.com/photo-1587223847492-a1a90a94188e?auto=format&fit=crop&q=80&w=800',
        location: 'Saint-Hubert, Quebec',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Pantry'
      },
      {
        id: 'grocery-biosteel-hydration',
        name: 'Sports Hydration Drinks (BioSteel)',
        description: 'Canadian sports nutrition products, including their popular sports hydration drinks.',
        url: 'https://www.biosteel.com',
        image: 'https://images.unsplash.com/photo-1549369925-95f3b4b89b09?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, Ontario',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Beverages'
      },
      {
        id: 'grocery-covered-bridge-chips',
        name: 'Kettle Cooked Potato Chips (Covered Bridge)',
        description: 'Kettle-cooked potato chips in various flavors.',
        url: 'https://www.coveredbridgechips.com',
        image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
        location: 'New Brunswick, Canada',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Snacks'
      },
      {
        id: 'grocery-hardbite-chips',
        name: 'Handcrafted-Style Chips (Hardbite Chips)',
        description: 'A range of handcrafted-style chips.',
        url: 'https://www.hardbitechips.com',
        image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
        location: 'British Columbia, Canada',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Snacks'
      },
      {
        id: 'grocery-neal-brothers-snacks',
        name: 'Snack Foods (Neal Brothers Foods)',
        description: 'A variety of snack foods, including tortilla chips and salsas.',
        url: 'https://www.nealbrothers.com',
        image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
        location: 'Richmond Hill, Ontario',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false,
        type: 'Snacks'
      },
        {
          id: 'grocery-natures-path-cereals',
          name: 'Organic Cereals and Granola (Nature’s Path Foods)',
          description: 'Organic cereals and granola products.',
          url: 'https://www.naturespath.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Richmond, British Columbia',
          isCorporate: false,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-dare-cookies',
          name: 'Cookies, Crackers, and Candies (Dare Foods)',
          description: 'A wide range of cookies, crackers, and candies, including Breton Crackers, Bear Paws, and RealFruit Gummies.',
          url: 'https://www.darefoods.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Kitchener, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Snacks'
        },
        {
          id: 'grocery-leclerc-cookies',
          name: 'Cookies, Snack Bars, and Crackers (Leclerc Foods)',
          description: 'A variety of cookies, snack bars, and crackers.',
          url: 'https://www.leclerc.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Quebec, Canada',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Snacks'
        },
        {
          id: 'grocery-voortman-cookies',
          name: 'Cookies and Wafers (Voortman Bakery)',
          description: 'A variety of cookies and wafers, including their signature windmill cookies.',
          url: 'https://www.voortman.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Ontario, Canada',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Snacks'
        },
        {
          id: 'grocery-maple-leaf-meats',
          name: 'Meat Products (Maple Leaf Foods)',
          description: 'A range of meat products, including deli meats, bacon, and sausages.',
          url: 'https://www.mapleleaffoods.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Mississauga, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-schneiders-meats',
          name: 'Meat Products (Schneiders)',
          description: 'A range of meat products, including deli meats, bacon, and sausages.',
          url: 'https://www.mapleleaffoods.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Mississauga, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-pillers-meats',
          name: 'Meat Products (Pillers)',
          description: 'A range of meat products, including deli meats, bacon, and sausages.',
          url: 'https://www.pillers.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Waterloo, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-olymel-meats',
          name: 'Meat Products (Olymel)',
          description: 'A range of meat products, including deli meats, bacon, and sausages.',
          url: 'https://www.olymel.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Saint-Hyacinthe, Quebec',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-grimms-meats',
          name: 'Meat Products (Grimm’s Fine Foods)',
          description: 'A range of meat products, including deli meats, bacon, and sausages.',
          url: 'https://www.grimmsfoods.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Richmond, British Columbia',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-tre-stelle-dairy',
          name: 'Dairy Products (Tre Stelle)',
          description: 'A range of dairy products, including cheese and yogurt.',
          url: 'https://www.trestelle.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Toronto, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Dairy'
        },
        {
          id: 'grocery-gay-lea-dairy',
          name: 'Dairy Products (Gay Lea)',
          description: 'A range of dairy products, including cheese and butter.',
          url: 'https://www.gaylea.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Mississauga, Ontario',
          isCorporate: false,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Dairy'
        },
        {
          id: 'grocery-lilydale-poultry',
          name: 'Poultry Products (Lilydale)',
          description: 'A range of poultry products, including chicken and turkey.',
          url: 'https://www.lilydale.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Edmonton, Alberta',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-maple-lodge-poultry',
          name: 'Poultry Products (Maple Lodge Farms)',
          description: 'A range of poultry products, including chicken and turkey.',
          url: 'https://www.maplelodgefarms.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Brampton, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Meat'
        },
        {
          id: 'grocery-yves-veggie',
          name: 'Plant-Based Foods (Yves Veggie Cuisine)',
          description: 'A variety of plant-based foods, including burgers and sausages.',
          url: 'https://www.yvesveggie.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'British Columbia',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Plant-Based'
        },
        {
          id: 'grocery-gardein-plant-based',
          name: 'Plant-Based Foods (Gardein)',
          description: 'A variety of plant-based foods, including burgers and sausages.',
          url: 'https://www.gardein.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Richmond, British Columbia',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Plant-Based'
        },
        {
          id: 'grocery-presidents-choice-condiments',
          name: 'Condiments and Sauces (President’s Choice)',
          description: 'A variety of condiments and sauces.',
          url: 'https://www.presidentschoice.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Brampton, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-compliments-condiments',
          name: 'Condiments and Sauces (Compliments)',
          description: 'A variety of condiments and sauces.',
          url: 'https://www.sobeys.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Stellarton, Nova Scotia',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-kozliks-mustard',
          name: 'Mustard (Kozlik’s Mustard)',
          description: 'A variety of mustards.',
          url: 'https://www.kozliks.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Toronto, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-renees-dressings',
          name: 'Salad Dressings and Condiments (Renee’s Gourmet)',
          description: 'A variety of salad dressings and condiments.',
          url: 'https://www.renees.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-dawsons-hot-sauce',
          name: 'Hot Sauce (Dawson’s Hot Sauce)',
          description: 'A variety of hot sauces.',
          url: 'https://www.dawsonshotsauce.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Hamilton, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-no-name-condiments',
          name: 'Condiments and Sauces (No Name)',
          description: 'A variety of condiments and sauces.',
          url: 'https://www.presidentschoice.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Brampton, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-robin-hood-baking',
          name: 'Baking Products (Robin Hood)',
          description: 'A variety of baking products, including flour and mixes.',
          url: 'https://www.robinhood.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Canada',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-five-roses-baking',
          name: 'Baking Products (Five Roses)',
          description: 'A variety of baking products, including flour and mixes.',
          url: 'https://www.fiveroses.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Canada',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-camino-baking',
          name: 'Fair Trade Baking Products (Camino)',
          description: 'A variety of fair trade baking products, including chocolate and sugar.',
          url: 'https://www.camino.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Ottawa, Ontario',
          isCorporate: false,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-laura-secord-chocolate',
          name: 'Chocolate and Confectionary (Laura Secord)',
          description: 'A variety of chocolate and confectionary products.',
          url: 'https://www.laurasecord.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Canada',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Snacks'
        },
        {
          id: 'grocery-arctic-gardens-frozen',
          name: 'Frozen Vegetables and Fruits (Arctic Gardens)',
          description: 'A variety of frozen vegetables and fruits.',
          url: 'https://www.arcticgardens.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Quebec',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Frozen'
        },
        {
          id: 'grocery-mm-food-market-frozen',
          name: 'Frozen Foods (M&M Food Market)',
          description: 'A variety of frozen foods, including meals and appetizers.',
          url: 'https://www.mmfoodmarket.com',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Ontario',
          isCorporate: true,
          isFranchise: true,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Frozen'
        },
        {
          id: 'grocery-no-frills',
          name: 'No Frills',
          description: 'A Canadian discount supermarket chain.',
          url: 'https://www.nofrills.ca',
          image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
          location: 'Brampton, Ontario',
          isCorporate: true,
          isFranchise: true,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Grocery'
        },
        {
          id: 'grocery-old-dutch',
          name: 'Old Dutch Foods',
          description: 'A Canadian snack food company known for its potato chips and other snacks.',
          url: 'https://www.olddutchfoods.ca',
          image: 'https://images.unsplash.com/photo-1ddol8rgUH8',
          location: 'Winnipeg, Manitoba',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Snacks'
        },
        {
          id: 'grocery-buckleys',
          name: 'Buckley’s',
          description: 'A Canadian brand of cough and cold remedies.',
          url: 'https://www.buckleys.ca',
          image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
          location: 'Mississauga, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-habitant',
          name: 'Habitant',
          description: 'A Canadian brand of soups and other canned goods.',
          url: 'https://www.presidentschoice.ca',
          image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
          location: 'Brampton, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        {
          id: 'grocery-frenchs-ketchup',
          name: 'French’s (Canadian-made ketchup)',
          description: 'A Canadian-made ketchup brand.',
          url: 'https://www.frenchs.ca',
          image: 'https://images.unsplash.com/photo-3OZrQ6g4zVk',
          location: 'London, Ontario',
          isCorporate: true,
          isFranchise: false,
          isCanadianOwned: true,
          isCanadianMajorityInvested: true,
          isForeignMajorityInvested: false,
          type: 'Pantry'
        },
        ...groceryStoresPart2,
        ...groceryStoresPart3,
        ...groceryStoresPart4
    ];
