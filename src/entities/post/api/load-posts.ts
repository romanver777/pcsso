import { postsApi } from "./index";
import type { Post } from "../model/post";

export const loadPostsApi = postsApi.injectEndpoints({
  endpoints: (builder) => ({
    loadPosts: builder.query({
      query: ({ page, limit }) => ({
        url: `/posts?_start=${(page - 1) * limit}&_limit=${limit}`,
      }),
      transformResponse: (posts: Post[], meta) => {
        return {
          posts,
          totalLength: meta?.response?.headers.get("X-Total-Count") as string,
        };
      },
    }),
  }),
});

export const { useLoadPostsQuery } = loadPostsApi;
export const {
  endpoints: { loadPosts },
} = loadPostsApi;
