export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'DDPROMPT — AI-Powered Prompt-Based Website Code Generator',
    desc: 'ddprompt is a full-stack web application that generates complete website code based on user prompts using Google Gemini API.',
    subdesc:
      'Created a prompt-to-code web app that generates website code using the Google Gemini API, featuring dual preview with Sandpack, support for .txt file uploads, a prompt history sidebar, and regeneration for modified prompts, secured with Google/GitHub authentication via NextAuth.',
    href: 'https://ddprompt.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 5,
        name: 'Next Auth',
        path: '/assets/nextauth.png',
      },
      {
        id: 6,
        name: 'Google Gemini AI',
        path: '/assets/gemini.png',
      },
    ],
  },
  {
    title: 'DDFRAME – Wireframes to Code Generation with AI',
    desc: 'Convert wireframes into clean, responsive React + Tailwind CSS components effortlessly.Powered by TypeScript, Firebase, OpenRouter AI, Cloudinary, Neon DB, and Sandpack',
    subdesc:
      'Built a platform with Google Auth (Firebase), Cloudinary uploads, and AI-powered code generation (React + Tailwind via OpenRouter). Added prompt customization, history tracking (Postgres), dual preview with Sandpack, and analytics dashboards using Firebase.',
    href: 'https://dd-frame.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      {
        id: 5,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 6,
        name: 'PostgresSQL',
        path: '/assets/postgres.jpeg',
      },
    ],
  },
  {
    title: 'DDLabs - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, DDLabs integrates complex forms and SMS notifications, by using Next.js, Appwrite and Twillio that enhance operational workflows. The application works seamlessly on all device types and screen sizes.',
    href: 'https://dd-lab.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/logo-full.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'CHHATTISGARH STATE POWER TRANSMISSION CO. LTD.',
    pos: 'Vocational Trainee',
    duration: 'May 2025 - June 2025',
    title: "Gained knowledge of Power Line Carrier Communication (PLCC) used for data and voice transmission over high-voltage power lines.Understood relay protection mechanisms and their role in power transmission systems.Worked with PLCC equipment such as coupling capacitors, line traps, and hybrid circuits.",
    icon: '/assets/csptcl.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CHHATTISGARH STATE POWER TRANSMISSION CO. LTD.',
    pos: 'Vocational Trainee',
    duration: 'May 2024 - June 2024',
    title: "Analyzed real-time communication in power transmission systems using PLCC, focusing on analog/digital signal transmission,protocol design, and fault-tolerant system behavior.Drew parallels with distributed software systems, applying concepts of low-latency communication, synchronization, and reliability.",
    icon: '/assets/csptcl.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'College Literature Committee and Finance and Consulting Club',
    pos: 'Head-Coordinator',
    duration: '2023 - Present',
    title: "Worked in the Public Relations domain to promote literary events, engaging participants through debates, extempore, and spell-bee competitions. Served as the Chief Editor of the college magazine. Created content and managed Instagram posts related to finance topics, news and club events. Organized speaker sessions, case-based quizzes and guesstimate competitions.",
    icon: '/assets/nitrr.png',
    animation: 'salute',
  },
];
