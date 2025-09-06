import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../api/apiConfig"; // Updated path

// Define a service using a base URL and expected endpoints
export const exampleApiSlice = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.baseURL,
    // Prepare headers for requests
    prepareHeaders: (headers) => {
      // Add authentication headers if needed
      // headers.set('Authorization', `Bearer ${token}`)
      return headers;
    },
  }),
  tagTypes: ["Example"], // Define tag types for cache invalidation
  endpoints: (builder) => ({
    // Example endpoint - replace with your actual endpoints
    getExample: builder.query<unknown, void>({
      query: () => `/example`, // This will call /api/example
      providesTags: ["Example"], // Tag for cache invalidation
    }),
    // Example mutation
    createExample: builder.mutation({
      query: (newItem) => ({
        url: `/example`, // This will call /api/example
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Example"], // Invalidate cache after mutation
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetExampleQuery, useCreateExampleMutation } = exampleApiSlice;
