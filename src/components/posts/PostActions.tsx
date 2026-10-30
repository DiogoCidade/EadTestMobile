import { MessageSquare, Share2, Bookmark } from 'lucide-react';
import type { Post, VoteState } from '../../types';
import VoteButtons from './VoteButtons';

interface PostActionsProps {
  post: Post;
  userVote: VoteState;
  saved: boolean;
  onVote: (direction: 1 | -1) => void;
  onToggleSave: () => void;
}

export default function PostActions({ post, userVote, saved, onVote, onToggleSave }: PostActionsProps) {
  return (
    <div className="post-actions">
      <VoteButtons votes={post.votes} userVote={userVote} onVote={onVote} />
      <button type="button" className="action-btn">
        <MessageSquare size={16} /> {post.commentCount}
      </button>
      <button
        type="button"
        className="action-btn"
        onClick={() => {
          navigator.clipboard?.writeText(`${window.location.origin}/post/${post.id}`).catch(() => {});
          alert('Link copiado (demonstrativo).');
        }}
      >
        <Share2 size={16} /> Compartilhar
      </button>
      <button type="button" className={`action-btn ${saved ? 'is-saved' : ''}`} onClick={onToggleSave} aria-pressed={saved}>
        <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Salvo' : 'Salvar'}
      </button>
    </div>
  );
}
