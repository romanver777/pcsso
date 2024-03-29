import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useLoadPostItemQuery } from "@/entities/post/api/load-post-item";
import { PostPageLayout } from "@/widgets/page-item-layout/ui/post-page-layout";
import { PostItem } from "@/widgets/post-item";

export const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data, isLoading } = useLoadPostItemQuery(postId);

  useEffect(() => {
    document.title = `Post #${postId}`;
  }, [postId]);

  const onBack = () => (location.state?.from ? navigate(-1) : navigate("/"));

  return (
    <PostPageLayout>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>Загружаем..</div>
      ) : (
        <PostItem
          id={data.id}
          title={data.title}
          body={data.body}
          onBackLink={onBack}
        />
      )}
    </PostPageLayout>
  );
};
