export type VoteState = -1 | 0 | 1;
export type SortOption = 'recent' | 'popular';
export type Section = 'home' | 'popular' | 'communities' | 'saved' | 'history';

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Community {
  id: string;
  name: string;
  avatar?: string;
  description?: string;
  memberCount?: number;
}

export interface Post {
  id: string;
  author: User;
  community: Community;
  title: string;
  content: string;
  imageUrl?: string;
  votes: number;
  commentCount: number;
  createdAt: string; // texto exibido ("há 2 horas")
  ageMinutes: number; // usado para ordenar por "recentes"
  userVote: VoteState; // voto do usuário atual neste post
  type: 'text' | 'image';
}
