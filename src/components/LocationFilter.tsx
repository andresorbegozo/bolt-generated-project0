import React, { useMemo, useState } from 'react';
import { MapPin, Globe, Search, ChevronDown } from 'lucide-react';
import { categories } from '../data/categories';

interface LocationFilterProps {
  selectedFilter: string;
  postalCode: string;
  citySearch: string;
  onFilterChange: (filter: string) => void;
  onPostalCodeChange: (code: string) => void;
  onCitySearchChange: (city: string) => void;
}

const provinces = [
  { code: 'AB', name: 'Alberta' },
  { code: 'BC', name: 'British Columbia' },
  { code: 'MB', name: 'Manitoba' },
  { code: 'NB', name: 'New Brunswick' },
  { code: 'NL', name: 'Newfoundland and Labrador' },
  { code: 'NS', name: 'Nova Scotia' },
  { code: 'ON', name: 'Ontario' },
  { code: 'PE', name: 'Prince Edward Island' },
  { code: 'QC', name: 'Quebec' },
  { code: 'SK', name: 'Saskatchewan' },
  { code: 'NT', name: 'Northwest Territories' },
  { code: 'NU', name: 'Nunavut' },
  { code: 'YT', name: 'Yukon' }
];

export default function LocationFilter({
  selectedFilter,
  postalCode,
  citySearch,
  onFilterChange,
  onPostalCodeChange,
  onCitySearchChange,
}: LocationFilterProps) {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showProvinceDropdown, setShowProvinceDropdown] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string>('');

  const cities = useMemo(() => {
    const citySet = new Set<string>();
    categories.forEach(category => {
      category.stores.forEach(store => {
        if (typeof store.location === 'string' && store.location.trim()) {
          const city = store.location.split(',')[0].trim();
          citySet.add(city);
        }
      });
    });
    return Array.from(citySet).sort();
  }, []);

  const filteredCities = useMemo(() => {
    if (!citySearch) return cities;
    return cities.filter(city => 
      city.toLowerCase().includes(citySearch.toLowerCase())
    );
  }, [cities, citySearch]);

  const handleCitySelect = (city: string) => {
    onCitySearchChange(city);
    setShowCityDropdown(false);
    onFilterChange('city');
  };

  const handleProvinceSelect = (provinceCode: string) => {
    setSelectedProvince(provinceCode);
    onPostalCodeChange(provinceCode);
    setShowProvinceDropdown(false);
    onFilterChange('province');
  };

  const provinceStoreCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    provinces.forEach(province => {
      counts[province.code] = 0;
    });

    categories.forEach(category => {
      category.stores.forEach(store => {
        if (typeof store.location === 'string' && store.location.trim()) {
          const parts = store.location.split(',');
          const provinceCode = parts.length > 1 ? parts[1].trim() : '';
          if (counts[provinceCode] !== undefined) {
            counts[provinceCode]++;
          }
        }
      });
    });
    return counts;
  }, []);

  return (
    <div className="mb-8 px-4 md:px-6">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <button
          onClick={() => onFilterChange('national')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            selectedFilter === 'national'
              ? 'bg-red-600 text-white shadow-lg shadow-red-200'
              : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow border border-gray-200/50'
          }`}
          aria-pressed={selectedFilter === 'national'}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          National
        </button>

        <div className="relative">
          <button
            onClick={() => onFilterChange('city')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedFilter === 'city'
                ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow border border-gray-200/50'
            }`}
            aria-pressed={selectedFilter === 'city'}
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            City/Town
          </button>
          
          {selectedFilter === 'city' && (
            <div className="absolute left-0 right-0 mt-2 z-20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search city/town"
                  value={citySearch}
                  onChange={(e) => {
                    onCitySearchChange(e.target.value);
                    setShowCityDropdown(true);
                  }}
                  onFocus={() => setShowCityDropdown(true)}
                  className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                {showCityDropdown && filteredCities.length > 0 && (
                  <div className="absolute z-10 mt-1 w-64 max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                    {filteredCities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-200"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setShowProvinceDropdown(!showProvinceDropdown);
              onFilterChange('province');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedFilter === 'province'
                ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow border border-gray-200/50'
            }`}
            aria-pressed={selectedFilter === 'province'}
            aria-expanded={showProvinceDropdown}
            aria-haspopup="true"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {selectedProvince ? provinces.find(p => p.code === selectedProvince)?.name : 'Province'}
            <ChevronDown className="w-4 h-4 ml-1" aria-hidden="true" />
          </button>

          {selectedFilter === 'province' && showProvinceDropdown && (
            <div className="absolute z-20 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
              {provinces.map((province) => (
                <button
                  key={province.code}
                  onClick={() => handleProvinceSelect(province.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-200 flex items-center justify-between ${
                    selectedProvince === province.code ? 'bg-red-50' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" aria-hidden="true" />
                    {province.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({provinceStoreCounts[province.code] || 0} stores)
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => onFilterChange('postal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            selectedFilter === 'postal'
              ? 'bg-red-600 text-white shadow-lg shadow-red-200'
              : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow border border-gray-200/50'
          }`}
          aria-pressed={selectedFilter === 'postal'}
        >
          <Search className="w-4 h-4" aria-hidden="true" />
          Postal Code
        </button>

        {selectedFilter === 'postal' && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => onPostalCodeChange(e.target.value.toUpperCase())}
              className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              maxLength={7}
            />
          </div>
        )}
      </div>
    </div>
  );
}
