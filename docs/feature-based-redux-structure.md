# Feature-Based Redux Structure with Example API

## Overview
This document describes the updated folder structure for Redux Toolkit and RTK Query implementation with feature-based organization and example Next.js API routes.

## Updated Folder Structure

```
src/
├── app/                          # Next.js App Router files
│   ├── api/                      # Next.js API routes
│   │   └── example/              # Example API route
│   │       └── route.ts          # Example API endpoint
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── ExampleComponent.tsx      # Example component using RTK Query
│   └── StoreProvider.tsx         # Moved to redux/providers
├── lib/                          # Utility functions (preserved)
│   └── utils.ts                  # Utility functions (cn helper)
└── redux/                        # Redux Toolkit and RTK Query files
    ├── store/                    # Store configuration and hooks
    │   ├── index.ts              # Store configuration
    │   └── hooks.ts              # Pre-typed hooks
    ├── api/                      # Global API configuration
    │   └── apiConfig.ts          # API configuration
    ├── features/                 # Feature-specific slices
    │   └── example/              # Example feature
    │       └── exampleApi.ts     # Example RTK Query API slice
    └── providers/                # Redux Provider components
        └── StoreProvider.tsx     # Redux Provider
```

## Key Changes

1. **Moved API slice** to feature directory:
   - `src/redux/api/apiSlice.ts` → `src/redux/features/example/exampleApi.ts`

2. **Renamed slice** for clarity:
   - `apiSlice` → `exampleApiSlice`

3. **Created example Next.js API route**:
   - `src/app/api/example/route.ts` with GET and POST endpoints

4. **Updated imports** throughout the application:
   - Store now imports from feature directory
   - ExampleComponent now imports from feature directory

5. **Simplified structure** by removing unnecessary index files

6. **Feature-based organization**:
   - Each feature has its own directory with API slices
   - Easy to scale for additional features

## API Endpoints

### GET /api/example
Returns example data:
```json
{
  "id": 1,
  "name": "Example Item",
  "description": "This is an example item from the API",
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

### POST /api/example
Creates/updates example data:
```json
// Request body
{
  "name": "New Item",
  "description": "Updated description"
}

// Response
{
  "id": 2,
  "name": "New Item",
  "description": "Updated description",
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

## Benefits

1. **Feature-based organization** makes it easy to locate and manage related code
2. **Scalable structure** that can accommodate more features
3. **Clear separation** between global configuration and feature-specific code
4. **Working example** with actual API endpoints
5. **RTK Query best practices** with tag-based cache invalidation
6. **Proper TypeScript typing** throughout
7. **Simplified structure** without unnecessary index files

This structure follows best practices for organizing Redux code in larger applications with feature-based slices and actual API endpoints.