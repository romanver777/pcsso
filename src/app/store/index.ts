import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/post/api";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  devTools: false,
});
