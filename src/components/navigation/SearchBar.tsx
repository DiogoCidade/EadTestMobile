import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-bar">
      <Search size={18} aria-hidden="true" />
      <input
        type="search"
        placeholder="Pesquisar publicações"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Pesquisar publicações"
      />
    </label>
  );
}
