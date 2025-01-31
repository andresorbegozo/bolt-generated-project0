import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/50 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-300"
      aria-label={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
