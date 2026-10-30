import { useEffect, useRef, useState } from 'react';
import { Menu, Plus, User, Settings, LogOut } from 'lucide-react';
import SearchBar from '../navigation/SearchBar';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Avatar from '../ui/Avatar';

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  onToggleSidebar: () => void;
  onCreatePost: () => void;
  onGoHome: () => void;
}

export default function Header({ query, onQueryChange, onToggleSidebar, onCreatePost, onGoHome }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // fecha o menu ao clicar fora
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <header className="header">
      <IconButton label="Abrir menu" className="only-mobile" onClick={onToggleSidebar}><Menu size={22} /></IconButton>
      <button type="button" className="logo" onClick={onGoHome} aria-label="Ir para a página inicial">
        <span className="logo-mark">A</span>
        <span className="logo-text">agorá</span>
      </button>
      <SearchBar value={query} onChange={onQueryChange} />
      <Button variant="secondary" icon={<Plus size={18} />} onClick={onCreatePost} className="create-btn">Criar</Button>
      <div className="profile" ref={menuRef}>
        <button type="button" className="profile-btn" aria-haspopup="menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          <Avatar name="Você" size={32} />
        </button>
        {menuOpen && (
          <div className="dropdown" role="menu">
            <button type="button" role="menuitem" onClick={() => setMenuOpen(false)}><User size={16} /> Perfil</button>
            <button type="button" role="menuitem" onClick={() => setMenuOpen(false)}><Settings size={16} /> Configurações</button>
            <button type="button" role="menuitem" onClick={() => setMenuOpen(false)}><LogOut size={16} /> Sair</button>
          </div>
        )}
      </div>
    </header>
  );
}
