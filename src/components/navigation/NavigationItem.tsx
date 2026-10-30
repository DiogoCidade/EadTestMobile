import type { ReactNode } from 'react';

interface NavigationItemProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
  onClick: () => void;
}

export default function NavigationItem({ label, icon, active = false, onClick }: NavigationItemProps) {
  return (
    <button
      type="button"
      className={`nav-item ${active ? 'is-active' : ''}`}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
