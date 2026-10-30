import type { Post } from '../../types';

export default function PostContent({ post }: { post: Post }) {
  return (
    <div className="post-content">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-text">{post.content}</p>
      {post.type === 'image' && post.imageUrl && (
        <img className="post-image" src={post.imageUrl} alt={`Imagem da publicação: ${post.title}`} />
      )}
    </div>
  );
}
