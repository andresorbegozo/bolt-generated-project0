import React, { useEffect, useState } from 'react';
import CategoryGrid from './CategoryGrid';
import { categoryStore } from '../stores/CategoryStore';

export default function CategoryList() {
  const [categories, setCategories] = useState(categoryStore.allCategories);
  const [loadedCategories, setLoadedCategories] = useState(new Set(categoryStore.loadedCategories));

  useEffect(() => {
    // Verify all categories are loaded
    const allCats = categoryStore.allCategories;
    setCategories(allCats);
    setLoadedCategories(new Set(categoryStore.loadedCategories));
  }, []);

  return (
    <div className="space-y-16">
      {categories.map((category) => (
        <CategoryGrid
          key={category.id}
          title={category.title}
          stores={category.stores}
          isLoaded={loadedCategories.has(category.id)}
        />
      ))}
    </div>
  );
}
