import { fashionStores } from './categories/fashion';
import { foodStores } from './categories/food';
import { techStores } from './categories/tech';
import { financeStores } from './categories/finance';
import { mediaStores } from './categories/media';
import { retailStores } from './categories/retail';
import { transportationStores } from './categories/transportation';
import { homeStores } from './categories/home';
import { cannabisStores } from './categories/cannabis';
import { alcoholStores } from './categories/alcohol';
import { restaurantStores } from './categories/restaurants';
import { bookStores } from './categories/bookstores';
import { toyStores } from './categories/toystores';
import { petStores } from './categories/petstores';
import { superStores } from './categories/superstores';
import { beautyStores } from './categories/beauty';
import { luxuryStores } from './categories/luxury';
import { sportsStores } from './categories/sports';
import { gasolineStores } from './categories/gasoline';
import { pharmacyStores } from './categories/pharmacies';
import { rideshareStores } from './categories/rideshare';
import { homegoodsStores } from './categories/homegoods';

// Create the categories array with all stores
export const categories = [
  {
    id: 'fashion',
    title: 'Fashion & Apparel',
    stores: fashionStores
  },
  {
    id: 'food',
    title: 'Food & Beverage',
    stores: foodStores
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
    id: 'beauty',
    title: 'Beauty & Personal Care',
    stores: beautyStores
  },
  {
    id: 'luxury',
    title: 'Luxury & Fine Jewelry',
    stores: luxuryStores
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    stores: sportsStores
  },
  {
    id: 'gasoline',
    title: 'Gas Stations',
    stores: gasolineStores
  }
];

// Export individual categories for direct access
export {
  fashionStores,
  foodStores,
  techStores,
  financeStores,
  mediaStores,
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
  beautyStores,
  luxuryStores,
  sportsStores,
  gasolineStores,
  restaurantStores
};
