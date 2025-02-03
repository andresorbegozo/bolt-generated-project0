import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MapPin, ExternalLink, X, Construction, ChevronLeft, ChevronRight, ShoppingBag, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import LocationFilter from '../components/LocationFilter';
import BusinessFilters from '../components/BusinessFilters';
import LanguageSwitch from '../components/LanguageSwitch';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';
import type { BusinessFilter, OwnershipFilter, Store } from '../types';
import BusinessSubmissionForm from '../components/BusinessSubmissionForm';
import AnimatedCanadianFlag from '../components/AnimatedCanadianFlag';
import SupportModal from '../components/SupportModal';
import { groceryStores } from '../data/categories/groceryStores';
import { snackStores } from '../data/categories/snacks';
import { meatStores } from '../data/categories/meats';
import { dairyStores } from '../data/categories/dairy';
import { pantryStores } from '../data/categories/pantry';
import { beverageStores } from '../data/categories/beverages';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { supermarketStores } from '../data/categories/supermarketStores';
import { foodAndBeverageStores } from '../data/categories/food';
import BarcodeScannerModal from '../components/BarcodeScannerModal';

export default function Home() {
  const { t } = useLanguage();
  const [cookieConsent, setCookieConsent] = useState(() => {
    try {
      return localStorage.getItem('cookieConsent') === 'true';
    } catch {
      return false;
    }
  });
  const [showCookieBanner, setShowCookieBanner] = useState(!cookieConsent);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('national');
  const [postalCode, setPostalCode] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [businessFilter, setBusinessFilter] = useState<BusinessFilter>('all');
  const [ownershipFilter, setOwnershipFilter] = useState<OwnershipFilter>('canadian-owned');
  const [showConstructionBanner, setShowConstructionBanner] = useState(true);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportModalClosed, setSupportModalClosed] = useState(() => {
    try {
      return localStorage.getItem('supportModalClosed') === 'true';
    } catch {
      return false;
    }
  });
  const bannerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    setShowCookieBanner(false);
    try {
      localStorage.setItem('cookieConsent', language);
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  };

  const handleDismissConstructionBanner = () => {
    setShowConstructionBanner(false);
  };

  const handleOpenSubmissionForm = () => {
    setShowSubmissionForm(true);
  };

  const handleCloseSubmissionForm = () => {
    setShowSubmissionForm(false);
  };

  const handleCloseSupportModal = () => {
    setShowSupportModal(false);
    setSupportModalClosed(true);
    try {
      localStorage.setItem('supportModalClosed', 'true');
    } catch (e) {
      console.warn('Failed to save support modal preference:', e);
    }
  };

  const handleOpenBarcodeScanner = () => {
    setShowBarcodeScanner(true);
  };

  const handleCloseBarcodeScanner = () => {
    setShowBarcodeScanner(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setShowConstructionBanner(false);
      }
    };

    if (showConstructionBanner) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showConstructionBanner]);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current && !supportModalClosed) {
        const scrollPosition = window.scrollY;
        const mainHeight = mainRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > (mainHeight - windowHeight) / 2) {
          setShowSupportModal(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [supportModalClosed]);

  const filteredCategories = useMemo(() => {
    let filtered = categories.filter(cat => cat.id !== 'groceryProducts' && cat.id !== 'supermarketStores');

    if (selectedCategory) {
      filtered = filtered.filter(cat => cat.id === selectedCategory);
    }

    if (selectedFilter === 'postal' && postalCode) {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store =>
          store.location.toUpperCase().includes(postalCode)
        )
      }));
    }

    if (selectedFilter === 'city' && citySearch) {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store =>
          store.location.toLowerCase().startsWith(citySearch.toLowerCase())
        )
      }));
    }

    if (selectedFilter === 'province' && postalCode) {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store =>
          store.location.toUpperCase().includes(postalCode)
        )
      }));
    }

    if (businessFilter !== 'all' && businessFilter !== 'groceries') {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store => {
          if (businessFilter === 'corporate-franchise') {
            return store.isCorporate || store.isFranchise;
          }
          return !store.isCorporate && !store.isFranchise;
        })
      }));
    }

    if (ownershipFilter === 'foreign-majority') {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store => store.isForeignMajorityInvested)
      }));
    } else if (ownershipFilter !== 'all') {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store => {
          if (ownershipFilter === 'canadian-owned') {
            return store.isCanadianOwned;
          }
          if (ownershipFilter === 'canadian-majority') {
            return store.isCanadianMajorityInvested;
          }
          return true;
        })
      }));
    } else {
      filtered = filtered.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store => {
          return store.isCanadianOwned || store.isCanadianMajorityInvested;
        })
      }));
    }

    return filtered.map(cat => ({
      ...cat,
      stores: cat.stores.filter(store => store)
    }));
  }, [selectedCategory, selectedFilter, postalCode, citySearch, businessFilter, ownershipFilter, supportModalClosed]);

  const displayStores = useMemo(() => {
    if (businessFilter === 'groceries') {
      const groceryCategories = {};
      groceryStores.forEach(store => {
        if (!groceryCategories[store.type]) {
          groceryCategories[store.type] = [];
        }
        groceryCategories[store.type].push(store);
      });
      return Object.entries(groceryCategories).map(([type, stores]) => ({
        id: type,
        title: type,
        stores: stores.filter(store => !store.url.includes('wikipedia.org'))
      }));
    }
    return filteredCategories.concat(
    {
      id: 'supermarketStores',
      title: 'Grocery Stores',
      stores: supermarketStores
    },
    {
      id: 'foodAndBeverage',
      title: 'Food & Beverage',
      stores: foodAndBeverageStores
    });
  }, [filteredCategories, businessFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const searchSuggestions = useMemo(() => {
    const allSuggestions = new Set<string>();
    categories.forEach(cat => {
      cat.stores.forEach(store => {
        allSuggestions.add(store.name);
        allSuggestions.add(store.description);
        allSuggestions.add(store.location);
        allSuggestions.add(store.type || '');
      });
    });
    if (businessFilter === 'groceries') {
      [...snackStores, ...meatStores, ...dairyStores, ...pantryStores, ...beverageStores].forEach(store => {
        allSuggestions.add(store.type || '');
      });
    }
    return Array.from(allSuggestions);
  }, [businessFilter]);

  const filteredStores = useMemo(() => {
    if (!searchQuery) return displayStores;
    if (businessFilter === 'groceries') {
      return displayStores.map(cat => ({
        ...cat,
        stores: cat.stores.filter(store =>
          store.type?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }));
    }
    return displayStores.map(cat => ({
      ...cat,
      stores: cat.stores.filter(store =>
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.type?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }));
  }, [searchQuery, displayStores, businessFilter]);

  const displayMainListings = useMemo(() => {
    if (businessFilter === 'groceries') return [];
    return filteredStores.filter(cat => cat.id !== 'groceryProducts');
  }, [filteredStores, businessFilter]);

  return (
    <>
      {showConstructionBanner && (
        <div ref={bannerRef} className="fixed top-0 left-0 w-full bg-yellow-100 border-b border-yellow-300 z-50">
          <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            <p className="text-sm text-yellow-800 font-medium flex items-center gap-2">
              <Construction className="w-4 h-4" />
              {t('underConstruction')}
            </p>
            <button
              onClick={handleDismissConstructionBanner}
              className="text-yellow-800 hover:text-yellow-900 focus:outline-none"
              aria-label={t('dismiss')}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 z-50">
          <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">{t('cookieNotice')}</p>
            <button
              onClick={handleAcceptCookies}
              className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      )}

      <div className="relative bg-white">
        <header className="bg-gradient-to-b from-red-50 via-white to-gray-50/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 relative overflow-hidden flex items-center justify-center flex-col">
            <div className="relative z-10 text-center flex items-center gap-2">
              <MapPinIcon className="w-8 h-8 text-red-600" aria-hidden="true" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 ml-1">
                {t('siteTitle')}
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-2">
              {t('siteDescription', { totalStores: categories.reduce((sum, cat) => sum + cat.stores.length, 0) })}
            </p>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 justify-center">
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
              &nbsp;{t('externalLinkNote')}
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 mt-4 flex justify-center">
          <button
            onClick={handleOpenSubmissionForm}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 mx-1 font-cursive"
          >
            {t('submitYourBusiness')}
          </button>
          <button
            onClick={handleOpenBarcodeScanner}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 mx-1 font-cursive"
          >
            Barcode Scanner
          </button>
        </div>

        <BusinessFilters
          businessFilter={businessFilter}
          onBusinessFilterChange={setBusinessFilter}
          ownershipFilter={ownershipFilter}
          onOwnershipFilterChange={setOwnershipFilter}
        />

        <LocationFilter
          selectedFilter={selectedFilter}
          postalCode={postalCode}
          citySearch={citySearch}
          onFilterChange={setSelectedFilter}
          onPostalCodeChange={setPostalCode}
          onCitySearchChange={setCitySearch}
        />

        <div className="max-w-7xl mx-auto px-4 mt-4">
          <SearchBar onSearch={handleSearch} suggestions={searchSuggestions} />
        </div>

        <main ref={mainRef} className="max-w-7xl mx-auto pb-16 relative z-10 mt-4">
          {businessFilter === 'groceries' ? (
            filteredStores.map(category => (
              <ProductGrid
                key={category.id}
                title={category.title}
                stores={category.stores}
              />
            ))
          ) : (
            displayMainListings.map(category => (
              <CategoryGrid
                key={category.id}
                title={category.title === 'supermarketStores' ? 'Grocery Stores' : category.title}
                stores={category.stores}
              />
            ))
          )}
        </main>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-4 flex justify-center flex-col items-center">
        <div id="paypal-button-container-P-7J40549651300342EM6OMQVI" className="mb-1"></div>
        <script src="https://www.paypal.com/sdk/js?client-id=AVHy4nMgWnhKv0Csh5Gf6T20CAZRfwR-FaMlhdq7reeysGkldRbBkYyTo3pVyDD1WGjxj3IFvocIMdo7&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
        <script dangerouslySetInnerHTML={{__html: `
          paypal.Buttons({
              style: {
                  shape: 'rect',
                  color: 'gold',
                  layout: 'vertical',
                  label: 'subscribe'
              },
              createSubscription: function(data, actions) {
                return actions.subscription.create({
                  /* Creates the subscription */
                  plan_id: 'P-7J40549651300342EM6OMQVI'
                });
              },
              onApprove: function(data, actions) {
                alert(data.subscriptionID); // You can add optional success message for the subscriber here
              }
          }).render('#paypal-button-container-P-7J40549651300342EM6OMQVI'); // Renders the PayPal button
        `}} />
        <p className="text-center text-sm font-cursive text-gray-700 mt-2">
          Keep us Online, Support for $1 CAD per month
        </p>
      </div>
      <footer className="bg-gray-100 border-t border-gray-200 py-8 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm mb-2">{t('footerTagline')}</p>
          <p className="text-xs mb-4">{t('footerInfo')}</p>
          <div className="flex justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gray-800">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-use" className="hover:text-gray-800">{t('termsOfUse')}</Link>
            <Link to="/accessibility" className="hover:text-gray-800">{t('accessibility')}</Link>
          </div>
        </div>
      </footer>

        <LanguageSwitch />
      
      {showSubmissionForm && <BusinessSubmissionForm onClose={handleCloseSubmissionForm} />}
      {showSupportModal && showSupportModal && <SupportModal onClose={handleCloseSupportModal} />}
      {showBarcodeScanner && <BarcodeScannerModal onClose={handleCloseBarcodeScanner} />}
    </>
  );
}
