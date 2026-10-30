import type { Community } from '../../types';
import Avatar from '../ui/Avatar';

interface CommunityListProps {
  communities: Community[];
  activeId?: string | null;
  showMembers?: boolean;
  onSelect: (id: string) => void;
}

export default function CommunityList({ communities, activeId, showMembers = false, onSelect }: CommunityListProps) {
  return (
    <ul className="community-list">
      {communities.map((c) => (
        <li key={c.id}>
          <button type="button" className={`community-item ${activeId === c.id ? 'is-active' : ''}`} onClick={() => onSelect(c.id)}>
            <Avatar name={c.name} size={28} />
            <span className="community-text">
              <strong>r/{c.name}</strong>
              {showMembers && c.memberCount && <small>{c.memberCount.toLocaleString('pt-BR')} membros</small>}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
