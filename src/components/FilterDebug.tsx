import React from 'react';
import { categories } from '../data/categories';

export default function FilterDebug() {
  return (
    <div className="fixed top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-md text-sm overflow-auto max-h-[80vh]">
      <h3 className="font-bold mb-2">Filter Debug Info:</h3>
      <div>
        <p className="mb-2">Raw Categories: {categories.length}</p>
        <div>
          <p className="font-semibold mb-1">Category Details:</p>
          <ul className="ml-4 space-y-1">
            {categories.map(cat => (
              <li key={cat.id} className="text-xs">
                {cat.title}: {cat.stores?.length || 0} stores
                {cat.id === 'gasoline' && (
                  <ul className="ml-4 text-gray-600">
                    {cat.stores?.map(store => (
                      <li key={store.id}>
                        {store.name} ({store.location})
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
