import type { Post } from '../types';
import { communities } from './mockCommunities';

// Imagem local (SVG em data URI): evita depender de APIs externas.
const placeholderImage = (from: string, to: string): string => {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/>` +
    `</linearGradient></defs><rect width='800' height='400' fill='url(#g)'/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const community = (id: string) => communities.find((c) => c.id === id)!;

export const mockPosts: Post[] = [
  {
    id: '1',
    author: { id: 'u1', name: 'dev_master' },
    community: community('c1'),
    title: 'Por que componentização é o futuro do desenvolvimento web?',
    content:
      'A componentização permite reutilizar código, facilitar a manutenção e escalar aplicações de forma muito mais eficiente...',
    votes: 1540, commentCount: 85, createdAt: 'há 2 horas', ageMinutes: 120, userVote: 0, type: 'text',
  },
  {
    id: '2',
    author: { id: 'u2', name: 'design_ninja' },
    community: community('c2'),
    title: 'Minha nova interface inspirada em comunidades online',
    content: 'Acabei de finalizar o design de uma interface focada em acessibilidade.',
    imageUrl: placeholderImage('#ff7a45', '#7a3cff'),
    votes: 890, commentCount: 42, createdAt: 'há 5 horas', ageMinutes: 300, userVote: 0, type: 'image',
  },
  {
    id: '3',
    author: { id: 'u3', name: 'frontend_explorer' },
    community: community('c3'),
    title: 'Dicas de TypeScript que você precisa saber',
    content:
      'O uso de Generics pode salvar muito tempo em projetos grandes. Aqui estão alguns exemplos práticos...',
    votes: 450, commentCount: 12, createdAt: 'há 12 horas', ageMinutes: 720, userVote: 0, type: 'text',
  },
  {
    id: '4',
    author: { id: 'u4', name: 'web_wizard' },
    community: community('c1'),
    title: 'Vite vs Webpack: qual escolher hoje?',
    content:
      'A velocidade do Vite no desenvolvimento é imbatível. Mas será que o Webpack ainda tem seu lugar em projetos legados?',
    votes: 2100, commentCount: 156, createdAt: 'ontem', ageMinutes: 1440, userVote: 0, type: 'text',
  },
  {
    id: '5',
    author: { id: 'u5', name: 'css_witch' },
    community: community('c4'),
    title: 'Grid + Flexbox: um layout de três colunas em 20 linhas',
    content: 'Mostro como montar a estrutura clássica de feed com barra lateral sem nenhuma biblioteca.',
    imageUrl: placeholderImage('#00b4d8', '#023e8a'),
    votes: 1320, commentCount: 64, createdAt: 'há 1 dia', ageMinutes: 1500, userVote: 0, type: 'image',
  },
  {
    id: '6',
    author: { id: 'u6', name: 'app_builder' },
    community: community('c5'),
    title: 'Reaproveitar componentes entre web e mobile: vale a pena?',
    content:
      'Estou estudando como a mesma estrutura de componentes pode ser adaptada para React Native. Alguém já fez essa migração?',
    votes: 310, commentCount: 27, createdAt: 'há 2 dias', ageMinutes: 2880, userVote: 0, type: 'text',
  },
  {
    id: '7',
    author: { id: 'u7', name: 'a11y_fan' },
    community: community('c2'),
    title: 'Checklist rápido de contraste e foco para seus botões',
    content: 'Estados de hover e foco visíveis fazem toda a diferença para quem navega pelo teclado.',
    votes: 760, commentCount: 33, createdAt: 'há 3 dias', ageMinutes: 4320, userVote: 0, type: 'text',
  },
  {
    id: '8',
    author: { id: 'u8', name: 'ts_learner' },
    community: community('c3'),
    title: 'Como tipar props de componentes sem usar any',
    content: 'Interfaces simples e tipos utilitários resolvem 90% dos casos em projetos React.',
    imageUrl: placeholderImage('#2dc653', '#1b4332'),
    votes: 205, commentCount: 9, createdAt: 'há 4 dias', ageMinutes: 5760, userVote: 0, type: 'image',
  },
];
