import { Store } from '../../types';

    export const alcoholStores: Store[] = [];

    const existingAlcoholStoreNames = new Set(alcoholStores.map(store => store.name.toLowerCase()));

    const newAlcoholStores: Store[] = [
      {
        id: 'alcohol-molson',
        name: 'Molson Coors Canada',
        description: 'Toronto-based brewery and beverage company founded in 1786',
        url: 'https://www.molsoncoors.com',
        image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-moosehead',
        name: 'Moosehead Breweries',
        description: 'Saint John-based oldest independent brewery in Canada',
        url: 'https://moosehead.ca',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800',
        location: 'Saint John, NB',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-sleeman',
        name: 'Sleeman Breweries',
        description: 'A historic Canadian brewery known for craft and mainstream beers; owned by the Japanese brewer Sapporo',
        url: 'https://www.sleeman.ca',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800',
        location: 'Guelph, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: false,
        isCanadianMajorityInvested: false,
        isForeignMajorityInvested: true
      },
      {
        id: 'alcohol-corby',
        name: 'Corby Spirit and Wine',
        description: 'Toronto-based producer and marketer of spirits and wines',
        url: 'https://www.corby.ca',
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: false,
        isCanadianMajorityInvested: false,
        isForeignMajorityInvested: true
      },
      {
        id: 'alcohol-diamond',
        name: 'Diamond Estates Wines',
        description: 'Niagara-on-the-Lake-based wine producer',
        url: 'https://www.diamondestates.ca',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800',
        location: 'Niagara-on-the-Lake, ON',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-andrew-peller',
        name: 'Andrew Peller Limited',
        description: 'Grimsby-based wine producer and distributor',
        url: 'https://www.andrewpeller.com',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800',
        location: 'Grimsby, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-gretzky',
        name: 'Wayne Gretzky Estates',
        description: 'Part of the Andrew Peller family of wineries, featuring wines, whiskies, and spirits developed in collaboration with Wayne Gretzky',
        url: 'https://www.gretzkyestateswines.com',
        image: 'https://images.unsplash.com/photo-GlsT5lfzG38?auto=format&fit=crop&q=80&w=800',
        location: 'Niagara, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-big-rock',
        name: 'Big Rock Brewery',
        description: 'Calgary-based craft brewery',
        url: 'https://bigrockbeer.com',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800',
        location: 'Calgary, AB',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-waterloo',
        name: 'Waterloo Brewing',
        description: 'Kitchener-based Ontario\'s first craft brewery',
        url: 'https://www.waterloobrewing.com',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800',
        location: 'Kitchener, ON',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-brick',
        name: 'Brick Brewing',
        description: 'Kitchener-based brewery and beverage company',
        url: 'https://www.brickbeer.ca',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=800',
        location: 'Kitchener, ON',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-arterra',
        name: 'Arterra Wines Canada',
        description: 'Mississauga-based wine producer and distributor',
        url: 'https://www.arterracanada.com',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800',
        location: 'Mississauga, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: false,
        isCanadianMajorityInvested: false,
        isForeignMajorityInvested: true
      },
      {
        id: 'alcohol-mission-hill',
        name: 'Mission Hill Family Estate',
        description: 'West Kelowna-based winery and vineyard',
        url: 'https://www.missionhillwinery.com',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800',
        location: 'West Kelowna, BC',
        isCorporate: false,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-inniskillin',
        name: 'Inniskillin Wines',
        description: 'Niagara-on-the-Lake-based winery specializing in icewine',
        url: 'https://www.inniskillin.com',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800',
        location: 'Niagara-on-the-Lake, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: true,
        isCanadianMajorityInvested: true,
        isForeignMajorityInvested: false
      },
      {
        id: 'alcohol-okanagan-springs',
        name: 'Okanagan Springs',
        description: 'A brewery specializing in craft-style beers, part of Sleeman (and ultimately owned by Sapporo)',
        url: 'https://www.sleeman.ca',
        image: 'https://images.unsplash.com/photo-EmmqKI2lDq8?auto=format&fit=crop&q=80&w=800',
        location: 'Vernon, BC',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: false,
        isCanadianMajorityInvested: false,
        isForeignMajorityInvested: true
      },
      {
        id: 'alcohol-diageo-canada',
        name: 'Diageo Canada',
        description: 'Toronto-based subsidiary of Diageo producing Canadian spirits',
        url: 'https://www.diageo.com',
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=800',
        location: 'Toronto, ON',
        isCorporate: true,
        isFranchise: false,
        isCanadianOwned: false,
        isCanadianMajorityInvested: false,
        isForeignMajorityInvested: true
      }
    ];

    alcoholStores.push(...newAlcoholStores);
