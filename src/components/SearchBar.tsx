import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions: string[];
}

export default function SearchBar({ onSearch, suggestions }: SearchBarProps) {
  const [query, setQuery] = useState("I'm looking for...");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    if (query === "I'm looking for...") {
      setQuery('');
    }
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    if (query === '') {
      setQuery("I'm looking for...");
      onSearch(''); // Trigger search with empty query
    }
    setTimeout(() => setShowSuggestions(false), 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative flex items-center bg-white border border-gray-200 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent transition-all duration-300">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          ref={inputRef}
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className="pl-10 pr-4 py-2 w-full bg-transparent focus:outline-none focus:ring-0 focus:border-transparent transition-all duration-300"
        />
        {showSuggestions && query !== "I'm looking for..." && (
          <div className="flex items-center overflow-x-auto scrollbar-hide pr-2">
            {suggestions
              .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
              .map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1 mx-1 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none transition-colors duration-200 whitespace-nowrap"
                >
                  {suggestion}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
