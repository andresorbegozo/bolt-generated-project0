import { gasolineStores } from './gasoline';
    import { beautyStores } from './beauty';
    import { luxuryStores } from './luxury';
    import { fashionStores } from './fashion';
    import { foodStores } from './food';
    import { techStores } from './tech';
    import { financeStores } from './finance';
    import { mediaStores } from './media';
    import { retailStores } from './retail';
    import { transportationStores } from './transportation';
    import { homeStores } from './home';
    import { cannabisStores } from './cannabis';
    import { alcoholStores } from './alcohol';
    import { restaurantStores } from './restaurants';
    import { bookStores } from './bookstores';
    import { toyStores } from './toystores';
    import { petStores } from './petstores';
    import { superStores } from './superstores';
    import { sportsStores } from './sports';
    import { entertainmentStores } from './entertainment';
    import { pharmacyStores } from './pharmacies';
    import { rideshareStores } from './rideshare';
    import { homegoodsStores } from './homegoods';

    // Export individual categories for direct access
    export {
      gasolineStores,
      luxuryStores,
      fashionStores,
      beautyStores,
      sportsStores,
      foodStores,
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
      rideshareStores
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
      }
    ];
