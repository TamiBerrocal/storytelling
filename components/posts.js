import posts from '../data/posts.js';
import { Post } from './post';
import { Video } from './video';

export const Posts = () => {
  return (
    <main>
      {posts.map((post, i) => {
        const postId = `post${i}`;
        return <Post key={postId} id={postId} post={post} />;
      })}

      <Video />
    </main>
  );
};
