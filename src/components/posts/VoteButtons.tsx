import { ArrowBigUp, ArrowBigDown } from 'lucide-react';
import type { VoteState } from '../../types';

interface VoteButtonsProps {
  votes: number;
  userVote: VoteState;
  onVote: (direction: 1 | -1) => void;
}

const format = (n: number) => n.toLocaleString('pt-BR');

export default function VoteButtons({ votes, userVote, onVote }: VoteButtonsProps) {
  return (
    <div className={`vote-buttons ${userVote === 1 ? 'is-up' : ''} ${userVote === -1 ? 'is-down' : ''}`}>
      <button type="button" aria-label="Voto positivo" aria-pressed={userVote === 1} onClick={() => onVote(1)}>
        <ArrowBigUp size={20} />
      </button>
      <span className="vote-count">{format(votes)}</span>
      <button type="button" aria-label="Voto negativo" aria-pressed={userVote === -1} onClick={() => onVote(-1)}>
        <ArrowBigDown size={20} />
      </button>
    </div>
  );
}
