import type { Post } from '../../types';
import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
  savedIds: string[];
  emptyMessage: string;
  onVote: (id: string, direction: 1 | -1) => void;
  onToggleSave: (id: string) => void;
}

export default function PostList({ posts, savedIds, emptyMessage, onVote, onToggleSave }: PostListProps) {
  if (posts.length === 0) return <p className="empty-state">{emptyMessage}</p>;
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} saved={savedIds.includes(post.id)} onVote={onVote} onToggleSave={onToggleSave} />
      ))}
    </div>
  );
}
