import { isObject } from 'lodash';

const displayContent = (content) =>
  content.map((paragraph) => {
    return isObject(paragraph) ? (
      <p className={`paragraph ${paragraph.style}`}>{paragraph.text}</p>
    ) : (
      <p className="paragraph">{paragraph}</p>
    );
  });

export const Post = ({ id, post }) => {
  const { date, photo, content, author } = post;

  const postType = {
    J: (
      <article key={id} className="pink-background">
        <img className="photo pink-shadow" src={photo} />
        <p className="text">
          <p className="date right-aligned">{date}</p>
          {displayContent(content)}
        </p>
      </article>
    ),
    A: (
      <article key={id} className="green-background">
        <p className="text">
          <p className="date left-aligned">{date}</p>
          {displayContent(content)}
        </p>
        <img className="photo green-shadow" src={photo} />
      </article>
    ),
  };

  return date ? (
    postType[author]
  ) : (
    <article key={id}>
      <p className="wide-text">{displayContent(content)}</p>
    </article>
  );
};
