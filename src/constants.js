// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from "./assets/tech_logo/angular.png";
// import reduxLogo from "./assets/tech_logo/redux.png";
// import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
// import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postgreLogo from "./assets/tech_logo/postgre.png";
// import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/Rangamati-high-school.png";
import bsaLogo from "./assets/education_logo/Rangamati-high-school.png";
import vpsLogo from "./assets/education_logo/Image 2025-06-13 at 19.33.16_3a56fe64.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/Screenshot 2025-06-16 134242.png";
import csprepLogo from "./assets/work_logo/building-management-system.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import removebgLogo from "./assets/work_logo/resturant-mangement-web.png";
import removebgLogotwo from "./assets/work_logo/stay-vista-project.png";
import bistroBossProject from "./assets/work_logo/Bistro-boss.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      // { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      // { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
        { name: "Compass", logo: mcLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Full stack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
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
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Rangamati High School",
    date: "Sept 2017 - July 2018",
    grade: "4.86 CGPA",
    desc: "My name is Alok. I studied at Rangamati High School and participated in the Junior School Certificate (JSC) Examination under the Dinajpur Education Board in 2018. I passed the exam with a GPA of 4.86 out of 5.00. This was a proud moment in my academic life and laid a strong foundation for my future education.",
    degree: "JSC - Junior School Certificate",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Rangamati High School",
    date: "Sept 2018 - Aug 2021",
    grade: "5.00 CGPA",
    desc: "My name is Alok. I studied at Rangamati High School and participated in the Secondary School Certificate (SSC) Examination under the Dinajpur Education Board in 2021. I passed the exam with a GPA of 5.00 out of 5.00. This was a proud moment in my academic life and laid a strong foundation for my future education.",
    degree: "SSC (Science) - Secondary School Certificate",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Dinajpur Polytechnic Institute",
    date: "Apr 2022 - March 2026",
    grade: "Ongoing (Seven Semester)",
    desc: "My name is Alok. I am currently studying in the 7th semester at Dinajpur Polytechnic Institute, in the Department of Computer Science and Technology. Through my diploma program, I am developing hands-on skills in programming, database management, web development, and other core areas of computer science.",
    degree: "Diploma in CST - Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/Alok4D/search-github-profile",
    webapp: "https://github-profile-center.vercel.app/",
  },
  {
    id: 1,
    title: "Building Management System",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Alok4D/PH-Assignment-12-public-client-",
    webapp: "https://building-management-auth.web.app/",
  },
  {
    id: 2,
    title: "Movie House App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Alok4D/moves-house-app",
    webapp: "https://movie-house-self.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Management Website",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Alok4D/PH-Assignment-11-Client-public",
    webapp: "https://restaurant-management-website.vercel.app/",
  },
  {
    id: 4,
    title: "StayVista",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogotwo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "Bistro Boss",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: bistroBossProject,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Alok4D/bistro-boss-client",
    webapp: "https://bistro-boss-2a23b.web.app/",
  },
];
