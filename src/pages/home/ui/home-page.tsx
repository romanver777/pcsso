import { useState, useEffect, useRef } from "react";
import { useParams, Outlet } from "react-router-dom";
import type { Post } from "@/entities/post/model/post";
import { PostsList } from "@/widgets/posts-list";
import { useLoadPostsQuery } from "@/entities/post/api/load-posts";

export const HomePage = () => {
  const limit = 20;
  const { postId } = useParams();

  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const total = useRef<null | number>(null);

  const { data, isLoading } = useLoadPostsQuery(
    { page, limit },
    { skip: posts.length === total.current }
  );

  useEffect(() => {
    document.body.style.overflow = postId ? "hidden" : "unset";
    if (!postId) document.title = "Virtual list";
  }, [postId]);

  useEffect(() => {
    if (data?.posts.length) {
      setPosts((prev) => [...prev, ...data.posts]);
      total.current = +data.totalLength;
    }
  }, [data]);

  const loadMore = () => {
    if (total.current && posts.length < total.current) {
      setPage((prev) => prev + 1);
    }
  };

  if (isLoading) return <div style={{ textAlign: "center" }}>Загружаем..</div>;

  return (
    <>
      <main>
        <h2 style={{ textAlign: "center" }}>Virtual list</h2>
        <PostsList posts={posts} loadMoreItems={loadMore} />
      </main>
      <Outlet />
    </>
  );
};
