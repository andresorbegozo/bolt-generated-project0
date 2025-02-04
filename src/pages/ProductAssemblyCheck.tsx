import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductAssemblyCheck() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      `${searchQuery} undergoes their last substantial transformation in Canada, with at least 51% of production costs incurred domestically`
    )}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Is My Product Assembled in Canada?</h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter company name and product name here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
