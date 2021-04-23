import { isObject } from 'lodash';

const displayContent = (content) =>
  content.map((paragraph, i) => {
    return isObject(paragraph) ? (
      <p key={`paragraph${i}`} className={`paragraph ${paragraph.style}`}>{paragraph.text}</p>
    ) : (
      <p key={`paragraph${i}`} className="paragraph">{paragraph}</p>
    );
  });

export const Post = ({ id, post }) => {
  const { date, photos, content, author } = post;

  const postType = {
    J: (
      <article
        key={id}
        className={`pink-background ${!photos ? 'flex-right' : ''}`}
      >
        {photos && (
          <div className="photo-container">
            {photos.map((photo, i) => (
              <img key={`img${i}`} className="photo pink-shadow" src={photo} />
            ))}
          </div>
        )}
        <p className="text">
          <p className="date right-aligned">{date}</p>
          {displayContent(content)}
        </p>
      </article>
    ),
    A: (
      <article
        key={id}
        className={`green-background ${!photos ? 'flex-left' : ''}`}
      >
        <p className="text">
          <p className="date left-aligned">{date}</p>
          {displayContent(content)}
        </p>
        {photos && (
          <div className="photo-container">
            {photos.map((photo, i) => (
              <img key={`img${i}`} className="photo green-shadow" src={photo} />
            ))}
          </div>
        )}
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
