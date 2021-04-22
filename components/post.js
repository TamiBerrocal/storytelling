export const Post = ({ post }) => {
  const { date, photo, content, author } = post;

  return date ? (
    author === 'Julia' ? (
      <article>
        <img className="photo" src={photo} />
        <p className="text">
          <p>{date}</p>
          {content}
        </p>
      </article>
    ) : (
      <article>
        <p className="text">
          <p>{date}</p>
          {content}
        </p>
        <img className="photo" src={photo} />
      </article>
    )
  ) : (
    <article>
      <p className="wide-text">{content}</p>
    </article>
  );
};
