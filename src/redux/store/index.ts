import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { exampleApiSlice } from "../features/example/exampleApi"; // Updated path

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [exampleApiSlice.reducerPath]: exampleApiSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(exampleApiSlice.middleware),
  });

  // Configure listeners using the provided defaults
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
