import React from 'react';
import { categories } from '../data/categories';
import type { BusinessFilter } from '../types';

interface FilterDebugOverlayProps {
  selectedFilter: string;
  postalCode: string;
  citySearch: string;
  selectedCategory: string | null;
  businessFilter: BusinessFilter;
}

export default function FilterDebugOverlay({ 
  selectedFilter, 
  postalCode, 
  citySearch, 
  selectedCategory,
  businessFilter
}: FilterDebugOverlayProps) {
  return (
    <div className="fixed top-4 right-4 bg-white/95 p-4 rounded-lg shadow-lg z-50 max-w-md text-xs">
      <h3 className="font-bold mb-2">Filter Debug</h3>
      
      <div className="space-y-2">
        <div>
          <p className="font-medium">Active Filters:</p>
          <ul className="ml-4 mt-1">
            <li>Location Filter: {selectedFilter}</li>
            {selectedFilter === 'postal' && <li>Postal Code: {postalCode || 'none'}</li>}
            {selectedFilter === 'city' && <li>City Search: {citySearch || 'none'}</li>}
            <li>Category: {selectedCategory || 'all'}</li>
            <li>Business Type: {businessFilter}</li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Categories ({categories.length}):</p>
          <div className="ml-4 mt-1 max-h-60 overflow-y-auto">
            {categories.map(category => (
              <div key={category.id} className="mb-2">
                <p className="font-medium">{category.title}</p>
                <ul className="ml-4 text-gray-600">
                  <li>ID: {category.id}</li>
                  <li>Total Stores: {category.stores.length}</li>
                  <li>Corporate: {category.stores.filter(s => s.isCorporate).length}</li>
                  <li>Franchise: {category.stores.filter(s => s.isFranchise).length}</li>
                  <li>Independent: {category.stores.filter(s => !s.isCorporate && !s.isFranchise).length}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
