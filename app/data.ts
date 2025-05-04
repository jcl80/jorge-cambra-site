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
    link: '#',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Multi-Store Ecommerce Platform',
    description: 'Production-grade classified ads platform with multi-store support, secure checkout, and comprehensive admin dashboard.',
    link: '#',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
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
  },
  {
    company: 'Central Shop',
    title: 'Frontend Developer',
    start: '2022',
    end: '2023',
    link: 'https://centralshop.com.py',
    id: 'work2',
  },
  {
    company: 'Contapp Digital',
    title: 'Full Stack Developer',
    start: '2022',
    end: '2022',
    link: 'https://contappdigital.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building Real-time Applications with Web3',
    description: 'A deep dive into creating performant real-time applications using Web3 technologies',
    link: '/blog/building-realtime-web3',
    uid: 'blog-1',
  },
  {
    title: 'TypeScript Best Practices for Production',
    description: 'Lessons learned from shipping production-grade TypeScript applications',
    link: '/blog/typescript-production',
    uid: 'blog-2',
  },
  {
    title: 'Automating Trading with Solana',
    description: 'How to build and deploy automated trading bots on Solana blockchain',
    link: '/blog/solana-trading-bots',
    uid: 'blog-3',
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
]

export const EMAIL = 'jcambrac@gmail.com'
