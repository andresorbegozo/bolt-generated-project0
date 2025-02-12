import React, { useState } from 'react';
import { Building2, Home, Store, ShoppingBag, Info } from 'lucide-react';
import type { BusinessFilter, OwnershipFilter } from '../types';
import { Link } from 'react-router-dom';

interface BusinessFiltersProps {
  businessFilter: BusinessFilter;
  onBusinessFilterChange: (filter: BusinessFilter) => void;
  ownershipFilter: OwnershipFilter;
  onOwnershipFilterChange: (filter: OwnershipFilter) => void;
}

export default function BusinessFilters({
  businessFilter,
  onBusinessFilterChange,
  ownershipFilter,
  onOwnershipFilterChange
}: BusinessFiltersProps) {
  const [showInfo, setShowInfo] = useState(false);

  // Calculate the width of each button
  const buttonCount = 5; // Number of buttons
  const buttonWidth = `calc(100% / ${buttonCount})`;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-sm sticky top-0 z-40 pt-2"> {/* Added pt-2 to create space */}
      <div className="max-w-2xl mx-auto py-4 md:py-6 px-3 md:px-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap justify-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 transition-all duration-200"
                checked={ownershipFilter === 'canadian-owned' || ownershipFilter === 'all' || ownershipFilter === 'canadian-majority'}
                onChange={() => {
                  if (ownershipFilter === 'canadian-owned') {
                    onOwnershipFilterChange('all');
                  } else {
                    onOwnershipFilterChange('canadian-owned');
                  }
                }}
              />
              Canadian Owned
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 transition-all duration-200"
                checked={ownershipFilter === 'canadian-majority' || ownershipFilter === 'all' || ownershipFilter === 'canadian-owned'}
                onChange={() => {
                  if (ownershipFilter === 'canadian-majority') {
                    onOwnershipFilterChange('all');
                  } else {
                    onOwnershipFilterChange('canadian-majority');
                  }
                }}
              />
              Canadian Majority Invested
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 transition-all duration-200"
                checked={ownershipFilter === 'foreign-majority'}
                onChange={() => onOwnershipFilterChange(ownershipFilter === 'foreign-majority' ? 'all' : 'foreign-majority')}
              />
              Foreign Majority Invested
            </label>
          </div>
          <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-1.5 flex shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/50">
            {/* Animated background pill */}
            <div
              className="absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-gradient-to-r from-red-500 to-red-600 rounded-xl z-0"
              style={{
                width: buttonWidth,
                height: 'calc(100% - 12px)',
                top: '6px',
                left: 
                  businessFilter === 'all' ? '6px' :
                  businessFilter === 'corporate-franchise' ? `calc(${buttonWidth} * 1 + 6px)` :
                  businessFilter === 'independent' ? `calc(${buttonWidth} * 2 + 6px)` :
                  businessFilter === 'groceries' ? `calc(${buttonWidth} * 3 + 6px)` :
                  businessFilter === 'products' ? `calc(${buttonWidth} * 4 + 6px)` :
                  '6px',
                boxShadow: '0 4px 12px -2px rgba(239, 68, 68, 0.3)'
              }}
            />

            {/* Buttons */}
            <button
              onClick={() => onBusinessFilterChange('all')}
              className={`relative flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 z-10 ${
                businessFilter === 'all'
                  ? 'text-white scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{width: buttonWidth}}
            >
              <Store className={`w-4 h-4 transition-transform duration-300 ${
                businessFilter === 'all' ? 'scale-110' : ''
              }`} />
              <span className="whitespace-nowrap">All</span>
            </button>

            <button
              onClick={() => onBusinessFilterChange('corporate-franchise')}
              className={`relative flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 z-10 ${
                businessFilter === 'corporate-franchise'
                  ? 'text-white scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{width: buttonWidth}}
            >
              <Building2 className={`w-4 h-4 transition-transform duration-300 ${
                businessFilter === 'corporate-franchise' ? 'scale-110' : ''
              }`} />
              <span className="whitespace-nowrap">Corporate</span>
            </button>

            <button
              onClick={() => onBusinessFilterChange('independent')}
              className={`relative flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 z-10 ${
                businessFilter === 'independent'
                  ? 'text-white scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{width: buttonWidth}}
            >
              <Home className={`w-4 h-4 transition-transform duration-300 ${
                businessFilter === 'independent' ? 'scale-110' : ''
              }`} />
              <span className="whitespace-nowrap">Local</span>
            </button>
            <button
              onClick={() => onBusinessFilterChange('groceries')}
              className={`relative flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 z-10 ${
                businessFilter === 'groceries'
                  ? 'text-white scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{width: buttonWidth}}
            >
              <ShoppingBag className={`w-4 h-4 transition-transform duration-300 ${
                businessFilter === 'groceries' ? 'scale-110' : ''
              }`} />
              <span className="whitespace-nowrap">Groceries</span>
            </button>
             <Link
              to="/product-assembly-check"
              className={`relative flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 z-10 ${
                businessFilter === 'products'
                  ? 'text-white scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{width: buttonWidth}}
            >
              <ShoppingBag className={`w-4 h-4 transition-transform duration-300 ${
                businessFilter === 'products' ? 'scale-110' : ''
              }`} />
              <span className="whitespace-nowrap">Products</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowInfo(!showInfo);
                }}
                className="ml-1 focus:outline-none"
                aria-label="Toggle Product Information"
              >
                <Info className="w-3 h-3 text-gray-500 hover:text-gray-700" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
