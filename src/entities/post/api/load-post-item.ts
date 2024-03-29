import { postsApi } from "./index";

export const loadPostItemApi = postsApi.injectEndpoints({
  endpoints: (builder) => ({
    loadPostItem: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useLoadPostItemQuery } = loadPostItemApi;
export const {
  endpoints: { loadPostItem },
} = loadPostItemApi;
