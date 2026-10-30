import type { Post } from '../../types';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';

interface PostCardProps {
  post: Post;
  saved: boolean;
  onVote: (id: string, direction: 1 | -1) => void;
  onToggleSave: (id: string) => void;
}

export default function PostCard({ post, saved, onVote, onToggleSave }: PostCardProps) {
  return (
    <article className="post-card">
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostActions
        post={post}
        userVote={post.userVote}
        saved={saved}
        onVote={(d) => onVote(post.id, d)}
        onToggleSave={() => onToggleSave(post.id)}
      />
    </article>
  );
}
