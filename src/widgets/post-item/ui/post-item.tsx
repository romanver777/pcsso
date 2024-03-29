type Props = {
  id: number;
  title: string;
  body: string;
  onBackLink: () => void;
};

export const PostItem = ({ id, title, body, onBackLink }: Props) => {
  return (
    <div className="container">
      <h2>Post #{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={onBackLink}>Назад</button>
    </div>
  );
};
