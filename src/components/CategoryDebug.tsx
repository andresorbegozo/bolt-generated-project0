import React from 'react';
import { categories } from '../data/categories';

export default function CategoryDebug() {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-md text-sm overflow-auto max-h-[80vh]">
      <h3 className="font-bold mb-2">Category Debug Info:</h3>
      <div>
        <p className="mb-2">Total Categories: {categories.length}</p>
        <div>
          <p className="font-semibold mb-1">Categories:</p>
          <ul className="ml-4 space-y-1">
            {categories.map(cat => (
              <li key={cat.id}>
                {cat.title} ({cat.stores.length} stores)
                <ul className="ml-4 text-xs text-gray-600">
                  {cat.stores.map(store => (
                    <li key={store.id}>{store.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
