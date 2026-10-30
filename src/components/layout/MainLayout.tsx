import type { ReactNode } from 'react';

interface MainLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  rightSidebar: ReactNode;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  children: ReactNode;
}

export default function MainLayout({ header, sidebar, rightSidebar, sidebarOpen, onCloseSidebar, children }: MainLayoutProps) {
  return (
    <div className="app">
      {header}
      <div className="layout">
        <div className={`sidebar-wrap ${sidebarOpen ? 'is-open' : ''}`}>{sidebar}</div>
        {sidebarOpen && <div className="drawer-overlay" onClick={onCloseSidebar} />}
        <main className="feed">{children}</main>
        {rightSidebar}
      </div>
    </div>
  );
}
