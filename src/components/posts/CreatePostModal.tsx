import { useEffect, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import type { Community } from '../../types';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface CreatePostModalProps {
  communities: Community[];
  onClose: () => void;
  onSubmit: (data: { title: string; content: string; communityId: string }) => void;
}

export default function CreatePostModal({ communities, onClose, onSubmit }: CreatePostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [communityId, setCommunityId] = useState(communities[0].id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), content: content.trim(), communityId });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form className="modal" role="dialog" aria-modal="true" aria-label="Criar publicação" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className="modal-header">
          <h2>Criar publicação</h2>
          <IconButton label="Fechar" onClick={onClose}><X size={18} /></IconButton>
        </div>
        <select value={communityId} onChange={(e) => setCommunityId(e.target.value)} aria-label="Comunidade">
          {communities.map((c) => <option key={c.id} value={c.id}>r/{c.name}</option>)}
        </select>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" maxLength={120} autoFocus />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Texto (opcional)" rows={5} />
        <div className="modal-footer">
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button type="submit" disabled={!title.trim()}>Publicar</Button>
        </div>
      </form>
    </div>
  );
}
