import React from 'react';
import { beautyStores } from '../data/categories/beauty';
import { luxuryStores } from '../data/categories/luxury';

export default function DebugCategories() {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-md text-sm">
      <h3 className="font-bold mb-2">Category Debug Info:</h3>
      <div>
        <p>Beauty Stores: {beautyStores?.length ?? 'undefined'}</p>
        <ul className="ml-4 list-disc">
          {beautyStores?.map(store => (
            <li key={store.id}>{store.name}</li>
          ))}
        </ul>
        <p className="mt-2">Luxury Stores: {luxuryStores?.length ?? 'undefined'}</p>
        <ul className="ml-4 list-disc">
          {luxuryStores?.map(store => (
            <li key={store.id}>{store.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
