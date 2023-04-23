import { tech } from './tech';
import type { Organization, Project } from './types';

export const timeline: Organization[] = [
  {
    name: 'DUMP Internship',
    web: 'https://dump.hr/internship',
    title: 'Software Development Intern',
    startDate: new Date(2021, 10, 1),
    endDate: new Date(2022, 6, 1),
    projects: [
      {
        name: 'PostsAndComments',
        description: `Forum web aplikacija koja podržava lajkanje, kreiranje postova
				i komentara, filtriranje po tagovima,... Za dohvaćanje podataka i svu
				interakciju korišten JavaScript. Deployment na AWS S3/CloudFront.
				Projekt za DUMP Internship.`,
        about: '',
        tech: [],
        web: 'https://postsandcomments.bdeak.net',
        src: 'https://github.com/bdeak4/Internship-14-PostsAndComments',
      },
      {
        name: 'Ludo',
        description: `Igra napravljena pomoću React web frameworka. Deployment na
				AWS S3/CloudFront. Projekt za DUMP Internship.`,
        about: '',
        tech: [],
        web: 'https://ludo.bdeak.net',
        src: 'https://github.com/bdeak4/Internship-18-Ludo',
      },
    ],
    nonprofit: true,
  },
  {
    name: 'DUMP',
    web: 'https://dump.hr/',
    title: 'System administrator / Software Developer',
    startDate: new Date(2022, 6, 1),
    projects: [
      {
        name: 'rasporedar',
        description: '',
        about: '',
        tech: [tech.vue],
        web: '',
        src: '',
      },
    ],
    nonprofit: true,
  },
  {
    name: 'ExtensionEngine',
    web: 'https://extensionengine.com/',
    title: 'Software Development Intern',
    startDate: new Date(2022, 7, 1),
    endDate: new Date(2022, 10, 1),
    projects: [
      {
        name: 'rasporedar',
        description: '',
        about: '',
        tech: [tech.vue],
        web: '',
        src: '',
      },
    ],
  },
  {
    name: 'Metacodex',
    title: 'DevOps / Software Developer',
    startDate: new Date(2022, 10, 1),
    projects: [
      {
        name: 'The Remnants',
        description: '',
        about: '',
        tech: [],
        web: '',
        src: '',
      },
      {
        name: 'The Heist',
        description: '',
        about: '',
        tech: [],
        web: '',
        src: '',
      },
    ],
  },
];

export const personalProjects: Project[] = [
  {
    name: 'chatter',
    description: `Python Flask web aplikacija koja vrši analizu Reddit komentara
    u svrhu analize korelacije između popularnosti i cijene kriptovalute. Za
    prikupljanje podataka korišteni Praw i TextBlob paketi, dok je za prikaz
    podataka korišten Chartist.js paket. Podaci pohranjeni u PostgreSQL i Redis
    bazama podataka. Deployment pomoću Docker containera na AWS EC2.`,
    about: '',
    tech: [],
    web: 'https://chatter.exposed/',
    src: 'https://github.com/bdeak4/chatter',
  },
  {
    name: 'tree-diff',
    description: '',
    about: '',
    tech: [tech.go],
    web: '',
    src: '',
  },
  {
    name: 'generate-nft-assets',
    description: '',
    about: '',
    tech: [tech.ts],
    web: '',
    src: '',
  },
  {
    name: 'raid5-seed-phrase',
    description: '',
    about: '',
    tech: [tech.js],
    web: '',
    src: '',
  },
  {
    name: 'react-animated-list',
    description: '',
    about: '',
    tech: [],
    web: '',
    src: '',
  },
  {
    name: '5x15',
    description: '',
    about: '',
    tech: [],
    web: '',
    src: '',
  },
  {
    name: 'ex_nabava',
    description: `Elixir paket napravljen u svrhu lakšeg pristupa i analize
    javno dostupnih podataka sa stranice Nabava.net.`,
    about: '',
    tech: [tech.elixir],
    web: 'https://hex.pm/packages/ex_nabava',
    src: 'https://github.com/bdeak4/ex_nabava',
  },
];
