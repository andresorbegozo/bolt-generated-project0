import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';

interface BusinessSubmissionFormProps {
  onClose: () => void;
}

export default function BusinessSubmissionForm({ onClose }: BusinessSubmissionFormProps) {
  const { t } = useLanguage();
  const [companyName, setCompanyName] = useState('');
  const [isCorporate, setIsCorporate] = useState(false);
  const [isIndependent, setIsIndependent] = useState(false);
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('http://');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cities = useMemo(() => {
    const citySet = new Set<string>();
    categories.forEach(category => {
      category.stores.forEach(store => {
        if (store.location) {
          const city = store.location.split(',')[0].trim();
          citySet.add(city);
        }
      });
    });
    return Array.from(citySet).sort();
  }, []);

  const filteredCities = useMemo(() => {
    if (!location) return cities;
    return cities.filter(city => 
      city.toLowerCase().includes(location.toLowerCase())
    );
  }, [cities, location]);

  const handleCitySelect = (city: string) => {
    setLocation(city);
    setShowCityDropdown(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{t('submitYourBusiness')}</h2>
        <form name="business-submission" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="business-submission" />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('companyName')}
            </label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('businessType')}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isCorporate"
                checked={isCorporate}
                onChange={() => setIsCorporate(!isCorporate)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 transition-all duration-200"
              />
              <span className="text-sm text-gray-700">Corporate</span>
              <input
                type="checkbox"
                name="isIndependent"
                checked={isIndependent}
                onChange={() => setIsIndependent(!isIndependent)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 transition-all duration-200 ml-4"
              />
              <span className="text-sm text-gray-700">Independent</span>
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              {t('location')}
            </label>
            <input
              type="text"
              name="location"
              placeholder="Search city/town"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowCityDropdown(true);
              }}
              onFocus={() => setShowCityDropdown(true)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
            {showCityDropdown && filteredCities.length > 0 && (
              <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg">
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('website')}
            </label>
            <input
              type="url"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('keywords')}
            </label>
            <input
              type="text"
              name="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('shortDescription')}
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('joinNewsletter')} - Enter Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
            >
              {t('close')}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
            >
              {t('submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
