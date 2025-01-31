# Category Addition Process

This document outlines the mandatory process for adding new categories and listings to the Buy Canadian project.

## 1. Create Category File

Create a new TypeScript file in `src/data/categories/` following these rules:

- File name should be kebab-case (e.g., `home-goods.ts`)
- Export a constant array named `[category]Stores` (e.g., `homeGoodsStores`)
- Each store must implement the `Store` interface with ALL required fields:
  ```typescript
  interface Store {
    id: string;          // Unique ID with category prefix
    name: string;        // Official business name
    description: string; // Brief, clear description
    url: string;         // Official website URL
    image: string;       // Unsplash image URL
    location: string;    // "City, Province" format
    isCorporate: boolean;// Is it a corporate-owned business?
    isFranchise: boolean;// Is it a franchise business?
  }
  ```

Example:
```typescript
export const newCategoryStores = [
  {
    id: 'category-business-name',
    name: 'Business Name',
    description: 'Clear description',
    url: 'https://business.com',
    image: 'https://images.unsplash.com/...',
    location: 'City, PR',
    isCorporate: true,
    isFranchise: false
  }
];
```

## 2. Update Main Categories File

Add the new category to `src/data/categories.ts`:

1. Import the new stores array at the top:
   ```typescript
   import { newCategoryStores } from './categories/new-category';
   ```

2. Add category configuration to the `categories` array:
   ```typescript
   {
     id: 'new-category',
     title: 'Display Title',
     stores: newCategoryStores
   }
   ```

3. Add to the named exports at the bottom:
   ```typescript
   export {
     // ... existing exports
     newCategoryStores
   };
   ```

## 3. Validation Checklist

Before committing new categories/listings, verify:

- [ ] Store implements ALL required interface fields
- [ ] Business is Canadian-owned and headquartered
- [ ] Business has not been acquired by foreign companies
- [ ] Image URLs are valid and from Unsplash
- [ ] Corporate/Franchise flags are accurate
- [ ] Category is imported in categories.ts
- [ ] Category is added to categories array
- [ ] Category is included in exports
- [ ] ID follows category-name format
- [ ] Location uses City, PR format

## 4. Business Type Guidelines

Accurately mark businesses using these rules:

- `isCorporate: true` if:
  - Publicly traded company
  - Large private corporation
  - Government-owned corporation

- `isFranchise: true` if:
  - Business operates through franchise model
  - Individual locations independently owned
  - Part of a franchise network

- Both `false` if:
  - Independently owned business
  - Small private company
  - Not part of franchise system

## 5. Testing

After adding new categories:

1. Verify category appears in navigation
2. Confirm filtering works:
   - Location filters
   - Business type filters (Corporate/Franchise vs Independent)
   - Category selection
3. Check store cards display correctly
4. Verify all links work
5. Test responsive layout

## Common Issues

- **Category Not Showing**: Verify it's properly added to both the import list and categories array in `categories.ts`
- **Filtering Issues**: Check corporate/franchise flags are properly set
- **Image Problems**: Verify Unsplash URL format and image existence
- **Type Errors**: Ensure all required interface fields are implemented

## Notes

- Keep descriptions concise but informative
- Use high-quality, relevant Unsplash images
- Maintain alphabetical order in category lists
- Follow existing naming conventions
- Update documentation when process changes
