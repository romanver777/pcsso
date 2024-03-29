import { Link, useLocation } from "react-router-dom";
import type { Post } from "../model/post";
import style from "./post-card.module.css";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  const location = useLocation();
  const { id, title, body } = post;

  return (
    <div className={style["list-item"]}>
      <div className={style["list-item-text"]}>
        <span>#{id}</span>
        <span>
          <b>{title}</b>
        </span>
        <span>{body}</span>
      </div>
      <Link
        className={style["list-item-link"]}
        to={`posts/${id}`}
        state={{ from: location.pathname }}
      >
        Подробнее
      </Link>
    </div>
  );
};
