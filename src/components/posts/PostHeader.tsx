import type { Post } from '../../types';
import Avatar from '../ui/Avatar';

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="post-header">
      <Avatar name={post.community.name} size={24} />
      <span className="post-community">r/{post.community.name}</span>
      <span className="post-meta">• u/{post.author.name} • {post.createdAt}</span>
    </div>
  );
}
