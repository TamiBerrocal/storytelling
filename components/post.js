import { isObject } from 'lodash';

const displayElement = (element, i) => {
  return element.text ? (
    <p key={`paragraph${i}`} className={`paragraph ${element.style}`}>
      {element.text}
    </p>
  ) : (
    <div className="audio-container">
      <audio key={`audio${i}`} controls controlsList="nodownload">
        <source key={`audio${i}`} src={element.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

const displayContent = (content) =>
  content.map((element, i) => {
    return isObject(element) ? (
      displayElement(element, i)
    ) : (
      <p key={`paragraph${i}`} className="paragraph">
        {element}
      </p>
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
          <div className="column-container">
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
          <div className="column-container">
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
