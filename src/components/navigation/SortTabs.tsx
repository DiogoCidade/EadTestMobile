import type { ReactNode } from 'react';
import { Flame, Clock } from 'lucide-react';
import type { SortOption } from '../../types';

interface SortTabsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: { id: SortOption; label: string; icon: ReactNode }[] = [
  { id: 'recent', label: 'Recentes', icon: <Clock size={16} /> },
  { id: 'popular', label: 'Populares', icon: <Flame size={16} /> },
];

export default function SortTabs({ value, onChange }: SortTabsProps) {
  return (
    <div className="sort-tabs" role="tablist" aria-label="Ordenar publicações">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="tab"
          aria-selected={value === o.id}
          className={`sort-tab ${value === o.id ? 'is-active' : ''}`}
          onClick={() => onChange(o.id)}
        >
          {o.icon}
          {o.label}
        </button>
      ))}
    </div>
  );
}
