import { Store } from '../../types';

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
    type: 'Baking Products'
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
    type: 'Soft Drinks & Beverages'
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
    type: 'Packaged & Snack Foods'
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
    type: 'Packaged & Snack Foods'
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
    type: 'Packaged & Snack Foods'
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
      type: 'Packaged & Snack Foods'
    },
    {
      id: 'grocery-dare-cookies',
      name: 'Cookies, Crackers, and Candies (Dare Foods)',
      description: 'A Canadian company producing a wide range of cookies, crackers, and candies, including Breton Crackers, Bear Paws, and RealFruit Gummies.',
      url: 'https://www.darefoods.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Kitchener, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Packaged & Snack Foods'
    },
    {
      id: 'grocery-leclerc-cookies',
      name: 'Cookies, Snack Bars, and Crackers (Leclerc Foods)',
      description: 'A Canadian company based in Quebec, known for its cookies, snack bars, and crackers.',
      url: 'https://www.leclerc.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Quebec, Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Packaged & Snack Foods'
    },
    {
      id: 'grocery-voortman-cookies',
      name: 'Cookies and Wafers (Voortman Bakery)',
      description: 'Founded in Ontario, Voortman produces a variety of cookies and wafers, including their signature windmill cookies.',
      url: 'https://www.voortman.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Ontario, Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Packaged & Snack Foods'
    },
    {
      id: 'grocery-maple-leaf-meats',
      name: 'Meat Products (Maple Leaf Foods)',
      description: 'A major Canadian food processing company headquartered in Mississauga, Ontario, offering a range of meat products, including deli meats, bacon, and sausages.',
      url: 'https://www.mapleleaffoods.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Mississauga, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-schneiders-meats',
      name: 'Premium Meats (Schneiders)',
      description: 'A brand under Maple Leaf Foods, known for its premium meats, including deli selections and sausages.',
      url: 'https://www.mapleleaffoods.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Mississauga, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-pillers-meats',
      name: 'European-Style Deli Meats and Sausages (Piller’s Fine Foods)',
      description: 'Based in Waterloo, Ontario, Piller’s offers a variety of European-style deli meats and sausages.',
      url: 'https://www.pillers.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Waterloo, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-olymel-meats',
      name: 'Pork and Poultry Products (Olymel)',
      description: 'A Canadian company headquartered in Saint-Hyacinthe, Quebec, specializing in pork and poultry products, including bacon and ham.',
      url: 'https://www.olymel.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Saint-Hyacinthe, Quebec',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-grimms-meats',
      name: 'Meat Products (Grimm’s Fine Foods)',
      description: 'A Canadian company offering a range of meat products, including sausages, hams, and deli meats.',
      url: 'https://www.grimmsfoods.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Richmond, British Columbia',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-lilydale-poultry',
      name: 'Chicken and Turkey Products (Lilydale)',
      description: 'A Canadian poultry company providing various chicken and turkey products.',
      url: 'https://www.lilydale.ca',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Edmonton, Alberta',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-maple-lodge-chicken',
      name: 'Chicken Products (Maple Lodge Farms)',
      description: 'Based in Brampton, Ontario, this Canadian company specializes in chicken products, including fresh and processed items.',
      url: 'https://www.maplelodgefarms.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Brampton, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-yves-veggie-alternatives',
      name: 'Plant-Based Meat Alternatives (Yves Veggie Cuisine)',
      description: 'A Canadian company offering a variety of plant-based meat alternatives, such as veggie burgers and deli slices.',
      url: 'https://www.yvesveggie.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'British Columbia, Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Meat & Processed Foods'
    },
    {
      id: 'grocery-kozliks-mustard',
      name: 'Gourmet Mustards (Kozlik’s Canadian Mustard)',
      description: 'A Toronto-based company producing a variety of gourmet mustards using Canadian mustard seeds.',
      url: 'https://www.kozliks.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Toronto, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Condiments & Sauces'
    },
    {
      id: 'grocery-dawsons-hot-sauce',
      name: 'Handcrafted Hot Sauces (Dawson’s Hot Sauce)',
      description: 'A Canadian company from Hamilton, Ontario, known for its handcrafted hot sauces.',
      url: 'https://www.dawsonshotsauce.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Hamilton, Ontario',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Condiments & Sauces'
    },
    {
      id: 'grocery-robin-hood-flour',
      name: 'Flours and Baking Mixes (Robin Hood Flour)',
      description: 'A Canadian brand offering a range of flours and baking mixes.',
      url: 'https://www.robinhood.ca',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Baking Products'
    },
    {
      id: 'grocery-five-roses-flour',
      name: 'Flour for Baking (Five Roses Flour)',
      description: 'A Canadian brand providing various types of flour for baking needs.',
      url: 'https://www.fiveroses.ca',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Baking Products'
    },
    {
      id: 'grocery-camino-baking',
      name: 'Fair Trade Baking Products (Camino)',
      description: 'A Canadian brand offering fair trade and organic baking products, including chocolate chips and cocoa powder.',
      url: 'https://www.camino.ca',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Ottawa, Ontario',
      isCorporate: false,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Baking Products'
    },
    {
      id: 'grocery-laura-secord-chocolate',
      name: 'Chocolates and Baking Products (Laura Secord)',
      description: 'A Canadian chocolatier known for its chocolates and baking products, including chocolate chips.',
      url: 'https://www.laurasecord.ca',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Baking Products'
    },
    {
      id: 'grocery-redpath-sugar',
      name: 'Sugars for Baking and Cooking (Redpath Sugar)',
      description: 'A Canadian company producing granulated, brown, and specialty sugars for baking and cooking.',
      url: 'https://www.redpathsugar.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Baking Products'
    },
    {
      id: 'grocery-arctic-gardens-frozen',
      name: 'Frozen Vegetables and Blends (Arctic Gardens)',
      description: 'A Canadian brand offering a variety of frozen vegetables and vegetable blends.',
      url: 'https://www.arcticgardens.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Quebec, Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Frozen Foods'
    },
    {
      id: 'grocery-mm-food-market-frozen',
      name: 'Frozen Foods (M&M Food Market)',
      description: 'A Canadian company specializing in frozen foods, including prepared meals, meats, and desserts.',
      url: 'https://www.mmfoodmarket.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Ontario, Canada',
      isCorporate: true,
      isFranchise: true,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Frozen Foods'
    },
    {
      id: 'grocery-kicking-horse-coffee',
      name: 'Organic and Fair-Trade Coffees (Kicking Horse Coffee)',
      description: 'A Canadian company offering a range of organic and fair-trade coffees.',
      url: 'https://www.kickinghorsecoffee.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Invermere, British Columbia',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Coffee & Tea'
    },
    {
      id: 'grocery-green-beaver-personal-care',
      name: 'Natural Personal Care Products (The Green Beaver Company)',
      description: 'A Canadian company producing natural personal care products, including toothpaste, shampoos, and soaps.',
      url: 'https://www.greenbeaver.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Ontario, Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Personal Care Products'
    },
    {
      id: 'grocery-live-clean-personal-care',
      name: 'Eco-Friendly Personal Care Products (Live Clean)',
      description: 'A Canadian brand offering eco-friendly personal care products, such as shampoos, conditioners, and body washes.',
      url: 'https://www.live-clean.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Personal Care Products'
    },
    {
      id: 'grocery-attitude-personal-care',
      name: 'Natural Personal Care and Household Products (Attitude)',
      description: 'A Canadian company providing a range of personal care and household products made with natural ingredients.',
      url: 'https://www.attitudeliving.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Personal Care Products'
    },
    {
      id: 'grocery-unscented-company-personal-care',
      name: 'Unscented Personal Care and Cleaning Products (The Unscented Company)',
      description: 'A Canadian brand specializing in unscented personal care and cleaning products.',
      url: 'https://www.unscentedco.com',
      image: 'https://images.unsplash.com/photo-1563379091-7a7ee9228a63?auto=format&fit=crop&q=80&w=800',
      location: 'Canada',
      isCorporate: true,
      isFranchise: false,
      isCanadianOwned: true,
      isCanadianMajorityInvested: true,
      isForeignMajorityInvested: false,
      type: 'Personal Care Products'
    }
];
