import { useMemo, useState } from 'react';
import type { Post, Section, SortOption } from './types';
import { mockPosts } from './data/mockPosts';
import { communities, trendingTopics } from './data/mockCommunities';
import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import RightSidebar from './components/layout/RightSidebar';
import CommunityList from './components/layout/CommunityList';
import SortTabs from './components/navigation/SortTabs';
import PostList from './components/posts/PostList';
import CreatePostModal from './components/posts/CreatePostModal';

const sectionTitles: Record<Section, string> = {
  home: 'Página inicial',
  popular: 'Popular',
  communities: 'Comunidades',
  saved: 'Publicações salvas',
  history: 'Histórico (posts em que você votou)',
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('recent');
  const [section, setSection] = useState<Section>('home');
  const [activeCommunity, setActiveCommunity] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleVote = (id: string, direction: 1 | -1) =>
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const newVote = p.userVote === direction ? 0 : direction;
        return { ...p, userVote: newVote, votes: p.votes + newVote - p.userVote };
      }),
    );

  const handleToggleSave = (id: string) =>
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const navigate = (s: Section) => {
    setSection(s);
    setActiveCommunity(null);
    setSidebarOpen(false);
    if (s === 'popular') setSort('popular');
  };

  const selectCommunity = (id: string) => {
    setSection('home');
    setActiveCommunity(id);
    setSidebarOpen(false);
  };

  const handleCreate = ({ title, content, communityId }: { title: string; content: string; communityId: string }) => {
    const newPost: Post = {
      id: `new-${Date.now()}`,
      author: { id: 'me', name: 'voce' },
      community: communities.find((c) => c.id === communityId)!,
      title,
      content,
      votes: 1,
      commentCount: 0,
      createdAt: 'agora',
      ageMinutes: 0,
      userVote: 1,
      type: 'text',
    };
    setPosts((prev) => [newPost, ...prev]);
    setSection('home');
    setActiveCommunity(null);
    setSort('recent');
    setModalOpen(false);
  };

  const visiblePosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => !activeCommunity || p.community.id === activeCommunity)
      .filter((p) => section !== 'saved' || savedIds.includes(p.id))
      .filter((p) => section !== 'history' || p.userVote !== 0)
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q))
      .sort((a, b) => (sort === 'popular' ? b.votes - a.votes : a.ageMinutes - b.ageMinutes));
  }, [posts, query, sort, section, activeCommunity, savedIds]);

  const activeCommunityName = communities.find((c) => c.id === activeCommunity)?.name;
  const title = activeCommunityName ? `r/${activeCommunityName}` : sectionTitles[section];

  return (
    <>
      <MainLayout
        sidebarOpen={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
        header={
          <Header
            query={query}
            onQueryChange={setQuery}
            onToggleSidebar={() => setSidebarOpen((o) => !o)}
            onCreatePost={() => setModalOpen(true)}
            onGoHome={() => navigate('home')}
          />
        }
        sidebar={
          <Sidebar
            section={section}
            communities={communities}
            activeCommunity={activeCommunity}
            onNavigate={navigate}
            onSelectCommunity={selectCommunity}
          />
        }
        rightSidebar={
          <RightSidebar
            communities={communities}
            topics={trendingTopics}
            onSelectCommunity={selectCommunity}
            onSelectTopic={setQuery}
          />
        }
      >
        <div className="feed-header">
          <h1>{title}</h1>
          {section !== 'communities' && <SortTabs value={sort} onChange={setSort} />}
        </div>

        {section === 'communities' ? (
          <div className="side-card">
            <CommunityList communities={communities} showMembers onSelect={selectCommunity} />
          </div>
        ) : (
          <PostList
            posts={visiblePosts}
            savedIds={savedIds}
            onVote={handleVote}
            onToggleSave={handleToggleSave}
            emptyMessage="Nenhuma publicação encontrada."
          />
        )}
      </MainLayout>

      {modalOpen && (
        <CreatePostModal communities={communities} onClose={() => setModalOpen(false)} onSubmit={handleCreate} />
      )}
    </>
  );
}
