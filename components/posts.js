import posts from '../data/posts.js';
import { Post } from './post';

export const Posts = () => {
  return (
    <main>
      {posts.map((post, i) => {
        const postId = `post${i}`;
        return <Post key={postId} id={postId} post={post} />;
      })}
    </main>
  );
};
