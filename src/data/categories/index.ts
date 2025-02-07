import { gasolineStores } from './gasoline.ts';
import { beautyStores } from './beauty.ts';
import { luxuryStores } from './luxury.ts';
import { fashionStores } from './fashion.ts';
import { techStores } from './tech.ts';
import { financeStores } from './finance.ts';
import { mediaStores } from './media.ts';
import { retailStores } from './retail.ts';
import { transportationStores } from './transportation.ts';
import { homeStores } from './home.ts';
import { cannabisStores } from './cannabis.ts';
import { alcoholStores } from './alcohol.ts';
import { restaurantStores } from './restaurants.ts';
import { bookStores } from './bookstores.ts';
import { toyStores } from './toyStores.ts';
import { petStores } from './petstores.ts';
import { superStores } from './superstores.ts';
import { sportsStores } from './sports.ts';
import { entertainmentStores } from './entertainment.ts';
import { pharmacyStores } from './pharmacies.ts';
import { rideshareStores } from './rideshare.ts';
import { homegoodsStores } from './homegoods.ts';
import { groceryStores } from './groceryStores.ts';
import { snackStores } from './snacks.ts';
import { meatStores } from './meats.ts';
import { dairyStores } from './dairy.ts';
import { pantryStores } from './pantry.ts';
import { beverageStores } from './beverages.ts';
import { supermarketStores } from './supermarketStores.ts';
import { foodAndBeverageStores } from './food.ts';

// Export individual categories for direct access
export {
  gasolineStores,
  luxuryStores,
  fashionStores,
  beautyStores,
  sportsStores,
  foodAndBeverageStores,
  restaurantStores,
  techStores,
  financeStores,
  mediaStores,
  entertainmentStores,
  retailStores,
  bookStores,
  toyStores,
  petStores,
  superStores,
  transportationStores,
  homeStores,
  homegoodsStores,
  alcoholStores,
  cannabisStores,
  pharmacyStores,
  rideshareStores,
  groceryStores,
  snackStores,
  meatStores,
  dairyStores,
  pantryStores,
  beverageStores,
  supermarketStores
};

// Create the categories array with all stores
export const categories = [
  {
    id: 'gasoline',
    title: 'Gas Stations',
    stores: gasolineStores
  },
  {
    id: 'luxury',
    title: 'Luxury & Fine Jewelry',
    stores: luxuryStores
  },
  {
    id: 'fashion',
    title: 'Fashion & Apparel',
    stores: fashionStores
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    stores: beautyStores
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    stores: sportsStores
  },
  {
    id: 'foodAndBeverage',
    title: 'Food & Beverage',
    stores: [
      ...snackStores,
      ...meatStores,
      ...dairyStores,
      ...pantryStores,
      ...beverageStores.filter(store => store.type !== 'Alcohol')
    ]
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    stores: restaurantStores
  },
  {
    id: 'tech',
    title: 'Technology & Software',
    stores: techStores
  },
  {
    id: 'finance',
    title: 'Financial Services',
    stores: financeStores
  },
  {
    id: 'media',
    title: 'Media & Entertainment',
    stores: mediaStores
  },
  {
    id: 'entertainment',
    title: 'Books, Music & Movies',
    stores: entertainmentStores
  },
  {
    id: 'retail',
    title: 'Retail & Department Stores',
    stores: retailStores
  },
  {
    id: 'books',
    title: 'Bookstores',
    stores: bookStores
  },
  {
    id: 'toys',
    title: 'Toy Stores',
    stores: toyStores
  },
  {
    id: 'pets',
    title: 'Pet Stores',
    stores: petStores
  },
  {
    id: 'superstores',
    title: 'Superstores',
    stores: superStores
  },
  {
    id: 'transportation',
    title: 'Transportation & Logistics',
    stores: transportationStores
  },
  {
    id: 'home',
    title: 'Home & Living',
    stores: homeStores
  },
  {
    id: 'homegoods',
    title: 'Home Goods & Decor',
    stores: homegoodsStores
  },
  {
    id: 'alcohol',
    title: 'Alcohol & Beverages',
    stores: alcoholStores
  },
  {
    id: 'cannabis',
    title: 'Cannabis',
    stores: cannabisStores
  },
  {
    id: 'pharmacy',
    title: 'Pharmacies & Drug Stores',
    stores: pharmacyStores
  },
  {
    id: 'rideshare',
    title: 'Ride Share & Transportation',
    stores: rideshareStores
  },
  {
    id: 'groceryProducts',
    title: 'Grocery Products',
    stores: groceryStores
  },
  {
    id: 'supermarketStores',
    title: 'Grocery Stores',
    stores: supermarketStores
  }
].sort((a, b) => b.stores.length - a.stores.length);
