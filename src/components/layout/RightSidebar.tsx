import type { Community } from '../../types';
import CommunityList from './CommunityList';

interface RightSidebarProps {
  communities: Community[];
  topics: string[];
  onSelectCommunity: (id: string) => void;
  onSelectTopic: (topic: string) => void;
}

export default function RightSidebar({ communities, topics, onSelectCommunity, onSelectTopic }: RightSidebarProps) {
  return (
    <aside className="right-sidebar" aria-label="Informações complementares">
      <section className="side-card">
        <h3>Comunidades populares</h3>
        <CommunityList communities={communities.slice(0, 4)} showMembers onSelect={onSelectCommunity} />
      </section>
      <section className="side-card">
        <h3>Assuntos em destaque</h3>
        <div className="topic-list">
          {topics.map((t) => (
            <button key={t} type="button" className="topic-chip" onClick={() => onSelectTopic(t)}>{t}</button>
          ))}
        </div>
      </section>
      <section className="side-card about">
        <h3>Sobre o Agorá</h3>
        <p>Projeto acadêmico demonstrativo, inspirado em plataformas de comunidades. Os dados são fictícios.</p>
      </section>
    </aside>
  );
}
