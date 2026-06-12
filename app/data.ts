type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  category: string
  secondaryLink?: {
    label: string
    url: string
  }
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  technologies: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'FermiBench',
    description: 'A benchmark for evaluating how good frontier LLMs are at estimating quantities they don\'t know.',
    link: 'https://sentinel-fermi-bench.vercel.app/',
    video: '/videos/fermibench_demo.mp4',
    id: 'project-fermibench',
    category: 'AI & Evaluation',
  },
  {
    name: 'Reddit Threat Intelligence',
    description: 'Threat detection system for Sentinel that ingests, triages, scores and clusters public Reddit signals for global catastrophic risk monitoring.',
    link: 'https://reddit.sentinel-team.org/',
    video: '/videos/sentinel_triage_demo.mp4',
    id: 'project-triage',
    category: 'AI & Evaluation',
  },
  {
    name: 'Trato Hecho PY',
    description: 'Classified ads and marketplace platform intended to be the Paraguayan equivalent of Craigslist. More than 100k users.',
    link: 'https://tratohecho.com.py/',
    video: '/videos/prueba_portfolio_trimmed.mp4',
    id: 'project2',
    category: 'E-commerce & Marketplaces',
  },
  {
    name: 'Tienda Paraguaya',
    description: 'My own attempt at breaking into the e-commerce market in Paraguay.',
    link: 'https://tiendaparaguaya.com/py',
    video: '/videos/tienda_paraguaya_quick_demo.webm',
    id: 'project3',
    category: 'E-commerce & Marketplaces',
  },
  {
    name: 'NBA Hot-Streak Tracker',
    description: 'NBA analytics tool for tracking player hot streaks and performance metrics. Driven by a passion for basketball and its advanced stats community.',
    link: 'https://hotstreak.jcl80.com/',
    video: '/videos/HotStreak_compressed.mp4',
    id: 'project1',
    category: 'Sports Analytics',
    secondaryLink: {
      label: 'r/NBAanalytics discussion',
      url: 'https://www.reddit.com/r/NBAanalytics/comments/1kj678m',
    },
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Sentinel',
    title: 'Software Engineer, Machine Learning',
    start: '2025',        
    end: 'Present',
    link: 'https://sentinel-team.org/',
    id: 'work-sentinel',
    technologies: [
      'Python',
      'Hugging Face Transformers',
      'ModernBERT',
      'DeBERTa',
      'Go',
      'Docker',
    ],
  },
  {
    company: 'Trato Hecho',
    title: 'Full Stack Engineer',
    start: '2023',
    end: '2025',
    link: 'https://tratohecho.com.py',
    id: 'work1',
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'Python',
      'MongoDB',
      'SQL',
      'Prisma',
      'Shadcn',
      'Digital Ocean',
      'Vercel',
      'Docker',
      'Yup',
      'Zod'
    ]
  },
  {
    company: 'Central Shop',
    title: 'Frontend Developer',
    start: '2022',
    end: '2023',
    link: 'https://centralshop.com.py',
    id: 'work2',
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'React',
      'MongoDB',
      'Ant Design',
      'Tailwind CSS',
      'Bootstrap',
      'Digital Ocean',
      'Docker',
      'Yup',
      'Jest'
    ]
  },
  {
    company: 'Contapp Digital',
    title: 'Full Stack Developer',
    start: '2022',
    end: '2022',
    link: 'https://contappdigital.com/',
    id: 'work3',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Express',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
      'Yup',
      'Jest'
    ]
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Custos — Part 1',
    description: 'Teaching a small encoder to mimic an LLM\'s triage decision ',
    link: '/blog/custos-part-1',
    uid: 'blog-custos-part-1',
  },
  {
    title: 'Evaluating LLM Quantitative Estimation Under Uncertainty',
    description: 'A study on LLM quantitative estimation under uncertainty.',
    link: '/blog/estimating-under-uncertainty',
    uid: 'blog-estimating-under-uncertainty',
  },
  {
    title: 'FermiBench: Evaluating LLM Quantitative Reasoning with Distributional Fermi Estimation',
    description: 'A benchmark for how well frontier models decompose quantitative questions into factor-level distributions and compose them into calibrated estimates.',
    link: '/blog/fermibench',
    uid: 'blog-fermibench',
  },
  {
    title: 'Offloading Sentinel\'s Analysis Pipeline to Local Inference — Conclusions',
    description: 'What works for what, what to buy, what to build next.',
    link: '/blog/offloading-sentinel-local-inference-conclusions',
    uid: 'blog-sentinel-local-inference-conclusions',
  },
  {
    title: 'Offloading Sentinel\'s Analysis Pipeline to Local Inference — Part 3',
    description: 'threat-bench, take two: fine-tuning failures, a bag-of-words model that wasn\'t supposed to work, and an ensemble gain that mostly didn\'t survive holdout.',
    link: '/blog/offloading-sentinel-local-inference-part-3',
    uid: 'blog-sentinel-local-inference-3',
  },
  {
    title: 'Offloading Sentinel\'s Analysis Pipeline to Local Inference — Part 2',
    description: 'Ei-bench: benchmarking GPT-5, GPT-5-mini, and open-weight models against clean human labels on existential importance classification.',
    link: '/blog/offloading-sentinel-local-inference-part-2',
    uid: 'blog-sentinel-local-inference-2',
  },
  {
    title: 'Offloading Sentinel\'s Analysis Pipeline to Local Inference — Part 1',
    description: 'Isolating model intelligence: how good are open-weight models at understanding threats?',
    link: '/blog/offloading-sentinel-local-inference-part-1',
    uid: 'blog-sentinel-local-inference-1',
  },
  {
    title: 'Offloading Sentinel\'s Analysis Pipeline to Local Inference — Part 0',
    description: 'Preliminary benchmarks of open-weight models for replacing GPT models in Sentinel\'s threat detection pipeline.',
    link: '/blog/offloading-sentinel-local-inference-part-0',
    uid: 'blog-sentinel-local-inference-0',
  },
  // {
  //   title: 'Songs That Have Me on the Brink of Buying an Electric Guitar',
  //   description: '',
  //   link: '/blog/songs-electric-guitar',
  //   uid: 'blog-songs-electric-guitar',
  // },
  // {
  //   title: 'Thoughts Worth Developing for a Recently Memory-Wiped Human',
  //   description: '',
  //   link: '/blog/thoughts-for-a-memory-wiped-human',
  //   uid: 'blog-memory-wiped-thoughts',
  // },
  {
    title: 'Potential Projects',
    description: 'A strategic evaluation of where Sentinel\'s time and resources are best spent',
    link: '/blog/potential-projects',
    uid: 'blog-potential-projects',
  },
  {
    title: 'Is It Worth Monitoring Reddit?',
    description: 'A strategic assessment of Reddit as an OSINT source for early-warning intelligence and risk detection.',
    link: '/blog/is-it-worth-monitoring-reddit',
    uid: 'blog-reddit-monitoring',
  },
  {
    title: 'Some Thoughts on Déjà Vu',
    description: 'The feeling of having already experienced the present moment.',
    link: '/blog/deja-vu',
    uid: 'blog-deja-vu',
  },
  {
    title: 'Notes on Running a Medusa Backend on DigitalOcean App Platform',
    description: 'Quick notes on deploying a Medusa v2 e-commerce backend to DigitalOcean App Platform with managed Postgres, Valkey, and Spaces.',
    link: '/blog/medusa-digitalocean-app-platform-notes',
    uid: 'blog-medusa-do',
  },
  {
    title: 'How Rare Was Houston’s 27-Miss Three-Point Streak? A Minimal Math Dive',
    description: 'May 28, 2018. Houston Rockets. Game 7. The team missed 27 consecutive three-point shots, a record-setting streak that left fans and analysts in disbelief. But how rare is such a streak?',
    link: '/blog/houston-rockets-27-miss-three-point-streak',
    uid: 'blog-rockets-streak',
  },
  // {
  //   title: 'Why La Masia Favors Shorter Players',
  //   description: 'A deep dive into how FC Barcelona\'s academy has revolutionized youth development by prioritizing technical ability over physical attributes',
  //   link: '/blog/why-la-masia-favors-shorter-players',
  //   uid: 'blog-la-masia',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jcl80',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jorge-cambra-5a4b30234/',
  },
  {
    label: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/20816738/jorge-cambra',
  },
]

export const EMAIL = 'jcambrac@gmail.com'
