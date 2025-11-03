// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import web_dev_logo from './assets/company_logo/web_dev_logo.png';


// Education Section Logo's
import fitlogo from './assets/education_logo/fit.png';
import bangalogo from './assets/education_logo/banga.jpeg';
import saltoralogo from './assets/education_logo/saltora.jpg';

// Project Section Logo's
import spotifylogo from './assets/work_logo/spotify.png';
import passwordmanagerlogo from './assets/work_logo/passwordmanager.png';
import getmeapizzalogo from './assets/work_logo/getmeapizza.png';
import bitlinkslogo from './assets/work_logo/bitlinks.png';
import bittreelogo from './assets/work_logo/bittree.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: web_dev_logo,
      role: "Fullstack Developer",
      company: "Self-Employed",
      date: "January 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: fitlogo,
      school: "Future Institute of Technology, Kolkata",
      date: "July 2016 - July 2020",
      grade: "6.8 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science & Enginnering (B.Tech.) from FIT College, Kolkata. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at FIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor's of Technology - B.Tech",
    },
    {
      id: 1,
      img: bangalogo,
      school: "Bankura Banga Vidyalay, Bankura",
      date: "April 2014 - March 2015",
      grade: "82%",
      desc: "I completed my class 12 education from Bankura Banga Vidyalay, Bankura, under the West Bengal board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "WBCHSE(XII) - PCM with Biology",
    },
    {
      id: 2,
      img: saltoralogo,
      school: "Saltora Dr. B. C. Vidyapith, Saltora",
      date: "Apr 2012 - March 2013",
      grade: "84%",
      desc: "I completed my class 10 education from Saltora Dr. B. C. Vidyapith, Saltora, under the West Bengal board, where I studied Science with Arts Subjects.",
      degree: "WBBSE(X), Science with Arts Subjects",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Spotify Clone",
      description:
        "A dynamic, front-end web application replicating core Spotify features using HTML5, CSS3, and JavaScript. It showcases seamless audio playback, interactive playlists, and real-time UI updates powered by JavaScript event handling and DOM manipulation — all wrapped in a modern, responsive design inspired by Spotify’s intuitive user experience.",
      image: spotifylogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Soumitramaji/Spotify-Clone.git",
    },
    {
      id: 1,
      title: "Password-Manager",
      description:
        "A responsive password manager built with React, Tailwind, MongoDB, and Express. Users can add, edit, delete, and copy credentials, and save them securely to a MongoDB database. Features include password visibility toggle, toast alerts, and mobile-friendly design.",
      image: passwordmanagerlogo,
      tags: ["React JS", "MongoDB", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Soumitramaji/Password-Manager.git",
    },
    {
      id: 2,
      title: "Get Me A Pizza",
      description:
        "A full-stack crowd funding app built with Next.js , NextAuth, and MongoDB. Users can sign in using GitHub, Google, Twitter, Facebook, LinkedIn, or Apple. Features secure authentication, user management, and a responsive UI for desktop and mobile. Tech Stack: Next.js, NextAuth.js, MongoDB, Mongoose, OAuth",
      image: getmeapizzalogo,
      tags: ["React JS", "Next JS", "MongoDB", "API", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Soumitramaji/GetMeAPizza.git",
    },
    {
      id: 3,
      title: "BitLinks-URL-Shortener",
      description:
        "Bitlinks – A private URL shortener built with Next.js, React, Tailwind CSS & MongoDB. Shorten, share, and manage links easily without tracking.",
      image: bitlinkslogo,
      tags: ["React JS", "Next JS", "MongoDB", "Tailwind CSS",],
      github: "https://github.com/Soumitramaji/BitLinks-URL-Shortener.git",
    },
    {
      id: 4,
      title: "BitTree-Store-Link",
      description:
        "Bittree is a sleek web app that lets you create a personalized profile page with your unique handle, multiple social links, a profile picture, and a short bio. Built with Next.js, React, Tailwind CSS, and MongoDB, Bittree makes sharing your online presence simple, elegant and fully responsive.",
      image: bittreelogo,
      tags: ["React JS", "Next JS", "MongoDB", "Tailwind CSS",],
      github: "https://github.com/Soumitramaji/BitTree-Store-Link.git",
    },
  ];  