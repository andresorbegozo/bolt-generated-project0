import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('language');
      return (savedLang === 'en' || savedLang === 'fr') ? savedLang : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  }, [language]);

  const t = (key: keyof typeof translations.en, params?: Record<string, string | number>) => {
    let text = translations[language][key] || translations.en[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
