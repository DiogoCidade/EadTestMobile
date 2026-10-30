import type { Community } from '../types';

export const communities: Community[] = [
  { id: 'c1', name: 'reactjs', description: 'Tudo sobre React e seu ecossistema.', memberCount: 18200 },
  { id: 'c2', name: 'uiux', description: 'Design de interfaces e experiência do usuário.', memberCount: 9400 },
  { id: 'c3', name: 'typescript', description: 'Tipagem estática para JavaScript.', memberCount: 12700 },
  { id: 'c4', name: 'css', description: 'Layouts, animações e boas práticas de estilo.', memberCount: 7300 },
  { id: 'c5', name: 'mobile', description: 'Desenvolvimento de aplicativos móveis.', memberCount: 5100 },
];

export const trendingTopics: string[] = [
  'Componentização',
  'Design systems',
  'React 19',
  'Acessibilidade',
  'Modo escuro',
];
