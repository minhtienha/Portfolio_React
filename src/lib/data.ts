import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'GITHUB',
    href: 'https://github.com/minhtienha',
    icon: FaGithub,
  },
  {
    label: 'LINKEDIN',
    href: 'https://linkedin.com/in/mtienha',
    icon: FaLinkedinIn,
  },
  {
    label: 'EMAIL',
    href: 'mailto:minhtien250704@gmail.com',
    icon: Mail,
  },
];

export const domains = [
  {
    number: '01',
    title: 'FRONTEND DEVELOPMENT',
    desc: 'Building responsive, modern user interfaces with React and Tailwind CSS.',
  },
  {
    number: '02',
    title: 'BACKEND & MICROSERVICES',
    desc: 'Architecting secure, high-performance RESTful APIs and scalable Microservices using Node.js, NestJS, and TypeScript.',
  },
  {
    number: '03',
    title: 'DATABASE & INTEGRATION',
    desc: 'Designing schemas and handling data persistence with PostgreSQL, MongoDB, SQL Server, plus Redis caching and RabbitMQ messaging.',
  },
];

interface EducationItem {
  period: string;
  school: string;
  degree: string;
  major: string;
  highlights: string[];
}

export const education: EducationItem = {
  period: 'OCT 2022 — APR 2026',
  school: 'Ho Chi Minh City University of Industry and Trade',
  degree: 'Bachelor of Information Technology',
  major: 'Major in Software Engineering',
  highlights: ['GPA: 3.35/4.0', 'Merit-based scholarship ×2', 'Distinguished Student of the Year'],
};

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: 'MAY 2026 — AUG 2026',
    role: 'Backend Developer Intern',
    company: 'FPT IS',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Mentored by a Tech Lead on System Design, developing backend services under a Microservices architecture using NestJS and TypeScript.',
      'Implemented authentication and authorization with JWT and Keycloak to strengthen system security.',
      'Contributed to a real-world SaaS recruitment project, updating APIs per functional requirements and writing unit tests.',
      'Built backend APIs to support the mobile team’s application requirements.',
    ],
    technologies: ['NestJS', 'TypeScript', 'JWT', 'Keycloak', 'Microservices'],
  },
  {
    period: 'JUL 2025 — SEP 2025',
    role: 'FullStack Developer Intern',
    company: 'Lazinet Applized Technology Co., Ltd',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Developed a movie ticket booking web application, handling both frontend and backend using React.js and Node.js/Express.js.',
      'Built and maintained RESTful APIs to support core booking features and managed application data with MongoDB.',
      'Integrated the MoMo payment gateway in a UAT environment to enable online ticket payments.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful API'],
  },
];

export const highlights = [
  'GPA: 3.35 / 4.0',
  'Merit-based scholarship recipient (2 times)',
  'Distinguished Student of the Year Award',
];

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

interface TechSection {
  title: string;
  items: TechItem[];
}

export const techStack: TechSection[] = [
  {
    title: 'LANGUAGES',
    items: [
      {
        name: 'TypeScript',
        category: 'LANGUAGES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        category: 'LANGUAGES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'C#',
        category: 'LANGUAGES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'HTML5',
        category: 'LANGUAGES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        category: 'LANGUAGES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    title: 'FRAMEWORKS / LIBRARIES',
    items: [
      {
        name: 'NestJS',
        category: 'FRAMEWORKS/LIBRARIES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
      },
      {
        name: 'Node.js',
        category: 'FRAMEWORKS/LIBRARIES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        category: 'FRAMEWORKS/LIBRARIES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'React',
        category: 'FRAMEWORKS/LIBRARIES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Socket.IO',
        category: 'FRAMEWORKS/LIBRARIES',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      },
    ],
  },
  {
    title: 'DATABASES / TOOLS',
    items: [
      {
        name: 'PostgreSQL',
        category: 'DATABASE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        category: 'DATABASE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'SQL Server',
        category: 'DATABASE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      },
      {
        name: 'Docker',
        category: 'TOOLS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        category: 'TOOLS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        category: 'TOOLS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Postman',
        category: 'TOOLS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
    ],
  },
];

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  teamSize: string;
  rangeDate?: string;
  description: string;
  techStack: string;
  images: string[];
  github?: string;
  githubBe?: string;
  live?: string;
}

export const projects: ProjectItem[] = [
  {
    id: '01',
    title: 'REAL-TIME CHAT & FILE SHARING',
    role: 'FULL-STACK DEVELOPER',
    teamSize: 'PERSONAL PROJECT',
    rangeDate: '08/2026 — Present',
    description:
      'A real-time chat application with file storage capability, built using WebSocket (Socket.IO) for instant messaging and MongoDB GridFS for file storage. Paired with a responsive client interface.',
    techStack: 'NESTJS · SOCKET.IO · MONGODB · REACT · TAILWIND CSS',
    images: ['/cases/chat_share_1.png', '/cases/chat_share_2.png'],
    github: 'https://github.com/minhtienha/chat-file-sharing',
  },
  {
    id: '02',
    title: 'TICKETING BOOKING SYSTEM',
    role: 'BACKEND DEVELOPER',
    teamSize: 'PERSONAL PROJECT',
    rangeDate: '07/2026 — 08/2026',
    description:
      'An online event ticket booking system built with a Microservices architecture. Integrated VNPay payment, Redis caching, and TypeORM, with API documentation standardized via Swagger/OpenAPI and full Docker containerization.',
    techStack: 'NESTJS · POSTGRESQL · RABBITMQ · REDIS · TYPEORM · DOCKER',
    images: ['/cases/ticket_booking_1.png', '/cases/ticket_booking_2.png'],
    githubBe: 'https://github.com/minhtienha/ticketing-booking-backend',
  },
  {
    id: '03',
    title: 'ONLINE MOVIE TICKETING SYSTEM',
    role: 'FULL-STACK DEVELOPER',
    teamSize: 'INTERNSHIP PROJECT',
    rangeDate: '07/2025 — 09/2025',
    description:
      'An online movie ticket booking system with RESTful APIs for managing movies, cinemas, showtimes, seats, and bookings. Integrated JWT-based authentication and MoMo payment with IPN webhook for transaction processing.',
    techStack: 'NODE.JS · EXPRESS.JS · MONGODB · REACT · TAILWIND CSS',
    images: [
      '/cases/movie_booking_1.png',
      '/cases/movie_booking_2.png',
      '/cases/movie_booking_3.png',
      '/cases/movie_booking_4.png',
      '/cases/movie_booking_5.png',
      '/cases/movie_booking_6.png',
      '/cases/movie_booking_7.png',
    ],
    github: 'https://github.com/minhtienha/HK7_ThucTap.git',
  },
];
