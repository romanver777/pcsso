import type { Post } from "@/entities/post/model/post";
import { PostCard } from "@/entities/post/ui/post-card";
import { Virtuoso } from "react-virtuoso";
import style from "./posts-list.module.css";

type Props = {
  posts?: Post[];
  loadMoreItems: () => void;
};

export const PostsList = ({ posts, loadMoreItems }: Props) => {
  return (
    <div className="container">
      <Virtuoso
        className={style.list}
        style={{
          height: window.innerHeight,
        }}
        useWindowScroll
        data={posts}
        endReached={loadMoreItems}
        itemContent={(_, post) => {
          return <PostCard key={post.id} post={post} />;
        }}
      />
    </div>
  );
};
