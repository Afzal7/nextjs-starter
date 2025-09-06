# Next.js Starter Project with Redux Toolkit and RTK Query

## Project Overview

This is a Next.js 15 application bootstrapped with `create-next-app`, using the App Router architecture. It has been enhanced with Redux Toolkit and RTK Query for state management and data fetching.

### Core Technologies
- **Next.js 15.5.2** with React 19.1.0
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Biome** for linting and formatting
- **Redux Toolkit** for state management
- **RTK Query** for data fetching and caching

### Folder Structure

```
src/
├── app/                          # Next.js App Router files
│   ├── api/                      # Next.js API routes
│   │   └── example/              # Example API route
│   │       └── route.ts          # Example API endpoint
│   ├── layout.tsx                # Root layout with StoreProvider
│   └── page.tsx                  # Home page with example component
├── components/                   # React components
│   ├── ExampleComponent.tsx      # Example component using RTK Query
│   └── StoreProvider.tsx         # Redux Provider component
├── lib/                          # Utility functions
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

## Redux Implementation

### Store Configuration

The Redux store is configured in `src/redux/store/index.ts` following Next.js App Router best practices:

1. **Per-Request Store Creation**: Uses a factory function to create a new store instance for each request
2. **RTK Query Integration**: Includes RTK Query middleware for caching and other features
3. **Listener Setup**: Configured for refetchOnFocus and refetchOnReconnect behaviors
4. **TypeScript Support**: Proper typing for RootState and AppDispatch

### Pre-typed Hooks

Custom typed hooks in `src/redux/store/hooks.ts` provide better TypeScript experience:
- `useAppDispatch` - Typed dispatch function
- `useAppSelector` - Typed selector function
- `useAppStore` - Typed store access

### RTK Query Implementation

The example feature in `src/redux/features/example/exampleApi.ts` demonstrates:

1. **Feature-Based Organization**: API slices are organized by feature
2. **Tag-Based Cache Invalidation**: Uses tags for proper cache management
3. **Query and Mutation Endpoints**: Examples of both query and mutation endpoints
4. **Environment-Aware Configuration**: Uses different base URLs for client/server

### Store Provider

The `StoreProvider` component in `src/redux/providers/StoreProvider.tsx`:
1. Is a client component as required by Redux
2. Uses `useRef` to ensure only one store instance per component lifecycle
3. Wraps the entire application in `src/app/layout.tsx`

## API Routes

Example API routes are implemented in `src/app/api/example/route.ts`:
- **GET /api/example**: Returns example data
- **POST /api/example**: Creates/updates example data

## Usage Examples

### Using RTK Query Hooks

```typescript
'use client'
import { useGetExampleQuery } from '@/redux/features/example/exampleApi'

export default function ExampleComponent() {
  const { data, error, isLoading, isFetching } = useGetExampleQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error occurred</div>
  
  return (
    <div>
      <h2>Example Data</h2>
      {isFetching && <div>Updating...</div>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

### Feature Expansion

To add new features:
1. Create a new directory in `src/redux/features/`
2. Create an API slice file (e.g., `featureNameApi.ts`)
3. Add the slice reducer to the store configuration
4. Create corresponding API routes in `src/app/api/`

## Best Practices Implemented

1. **Next.js App Router Compatibility**: Follows all recommended patterns for Next.js 13+
2. **Client/Server Separation**: Redux only used in client components
3. **Type Safety**: Comprehensive TypeScript typing throughout
4. **Feature-Based Organization**: Scalable structure for larger applications
5. **RTK Query Best Practices**: Proper caching, invalidation, and error handling
6. **Environment Awareness**: Different configurations for client/server
7. **Minimal Index Files**: Direct imports for clarity and simplicity

This implementation provides a solid foundation for building scalable Next.js applications with Redux Toolkit and RTK Query.