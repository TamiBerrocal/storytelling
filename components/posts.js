import posts from '../data/posts.js';
import { Post } from './post';

export const Posts = () => {
  return (
    <main>
      {posts.map((post) => (
        <Post post={post} />
      ))}
      {/* <article>
        <video
          className="video"
          autoPlay
          muted
          loop
          playsInline
          id="indie-video"
        >
          <source src="indie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article> */}
    </main>
  );
};
