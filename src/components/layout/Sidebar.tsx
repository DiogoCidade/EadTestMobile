import type { ReactNode } from 'react';
import { House, Flame, Users, Bookmark, Clock } from 'lucide-react';
import type { Community, Section } from '../../types';
import NavigationItem from '../navigation/NavigationItem';
import CommunityList from './CommunityList';

interface SidebarProps {
  section: Section;
  communities: Community[];
  activeCommunity: string | null;
  onNavigate: (section: Section) => void;
  onSelectCommunity: (id: string) => void;
}

const items: { id: Section; label: string; icon: ReactNode }[] = [
  { id: 'home', label: 'Página inicial', icon: <House size={20} /> },
  { id: 'popular', label: 'Popular', icon: <Flame size={20} /> },
  { id: 'communities', label: 'Comunidades', icon: <Users size={20} /> },
  { id: 'saved', label: 'Publicações salvas', icon: <Bookmark size={20} /> },
  { id: 'history', label: 'Histórico', icon: <Clock size={20} /> },
];

export default function Sidebar({ section, communities, activeCommunity, onNavigate, onSelectCommunity }: SidebarProps) {
  return (
    <nav className="sidebar" aria-label="Navegação principal">
      {items.map((i) => (
        <NavigationItem key={i.id} label={i.label} icon={i.icon} active={section === i.id && !activeCommunity} onClick={() => onNavigate(i.id)} />
      ))}
      <h4 className="sidebar-title">Comunidades seguidas</h4>
      <CommunityList communities={communities} activeId={activeCommunity} onSelect={onSelectCommunity} />
    </nav>
  );
}
