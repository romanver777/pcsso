import style from "./post-page-layout.module.css";

type Props = {
  children: React.ReactNode;
};

export const PostPageLayout = ({ children }: Props) => {
  return <div className={style["post-page"]}>{children}</div>;
};
