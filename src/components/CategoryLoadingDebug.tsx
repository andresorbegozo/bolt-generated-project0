import React from 'react';
import { categories } from '../data/categories';

export default function CategoryLoadingDebug() {
  const allCategories = categories.map(cat => ({
    id: cat.id,
    title: cat.title,
    storeCount: cat.stores.length
  }));

  const totalStores = allCategories.reduce((sum, cat) => sum + cat.storeCount, 0);
  const totalCategories = allCategories.length;

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-md text-sm overflow-auto max-h-[80vh]">
      <h3 className="font-bold mb-2">Category Loading Debug</h3>
      <div className="mb-4">
        <p>Total Categories: {totalCategories}</p>
        <p>Total Stores: {totalStores}</p>
      </div>
      <div className="space-y-2">
        {allCategories.map((cat, index) => (
          <div key={cat.id} className="flex justify-between items-center">
            <span>{index + 1}. {cat.title}</span>
            <span className="text-gray-500">{cat.storeCount} stores</span>
          </div>
        ))}
      </div>
    </div>
  );
}
