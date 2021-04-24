export const Video = () => {
  return (
    <div className="video-section">
      <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          src="https://player.vimeo.com/video/540948181?title=0&byline=0&portrait=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};
