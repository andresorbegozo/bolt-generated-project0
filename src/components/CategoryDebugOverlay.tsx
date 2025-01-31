import React from 'react';
import { categories } from '../data/categories';

export default function CategoryDebugOverlay() {
  return (
    <div className="fixed bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg z-50 max-w-md text-xs">
      <h3 className="font-bold mb-2">Category Debug</h3>
      <div className="space-y-1">
        <p>Total Categories: {categories.length}</p>
        <div className="max-h-[300px] overflow-auto">
          {categories.map(cat => (
            <div key={cat.id} className="border-t pt-1">
              <p className="font-medium">{cat.title}</p>
              <p>ID: {cat.id}</p>
              <p>Stores: {cat.stores?.length || 0}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
