type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
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
    name: 'NBA Hot-Streak Tracker',
    description: 'Live NBA analytics tool for tracking player hot streaks and performance metrics.',
    link: 'https://hotstreak.jcl80.com/',
    video: '/videos/HotStreak_compressed.mp4',
    id: 'project1',
  },
  {
    name: 'Trato Hecho PY',
    description: 'Production-grade classified ads  and marketplace platform with multi-store support, secure checkout, and comprehensive analytics.',
    link: 'https://tratohecho.com.py/',
    video: '/videos/prueba_portfolio_trimmed.mp4',
    id: 'project2',
  },
  {
    name: 'Tienda Paraguaya',
    description: 'A fast, localized e-commerce brand for Paraguay, built on top of MedusaJS, integrated with Bancard checkout and PostHog analytics.',
    link: 'https://tiendaparaguaya.com/py',
    video: '/videos/tienda_paraguaya_quick_demo.webm',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Trato Hecho',
    title: 'Full Stack Engineer',
    start: '2023',
    end: 'Present',
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
    title: 'Why La Masia Favors Shorter Players',
    description: 'A deep dive into how FC Barcelona\'s academy has revolutionized youth development by prioritizing technical ability over physical attributes',
    link: '/blog/why-la-masia-favors-shorter-players',
    uid: 'blog-la-masia',
  },
  {
    title: 'How Rare Was Houston’s 27-Miss Three-Point Streak? A Minimal Math Dive',
    description: 'May 28, 2018. Houston Rockets. Game 7. The team missed 27 consecutive three-point shots, a record-setting streak that left fans and analysts in disbelief. But how rare is such a streak?',
    link: '/blog/houston-rockets-27-miss-three-point-streak',
    uid: 'blog-rockets-streak',
  },
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
