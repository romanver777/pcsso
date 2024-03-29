import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/config";

export const postsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: () => ({}),
});

export const enhancedApi = postsApi.enhanceEndpoints({
  endpoints: () => ({}),
});
