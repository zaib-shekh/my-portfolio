import coforgeLogo from "../assets/coforge.png";
import dextLogo from "../assets/dext.png";
import starAgile from "../assets/staragile.jpg";

const ExperienceData = [
  {
    role: "Frontend Developer",
    company: "Dext IT Solutions Pvt Ltd",
    description: [
      "Created the UI for MyWMS365 using ReactJS for enhanced rendering efficiency.",
      "Designed a drag-and-drop interface for monitoring and assigning warehouse tasks.",
      "Integrated backend APIs with Axios and tested endpoints using Insomnia.",
      "Implemented real-time updates for task status and user assignment.",
      "Optimized performance using server-side rendering, debouncing, and lazy loading.",
      "Collaborated with backend team for seamless API data flow.",
      "Implemented persistent login with state management for seamless user sessions.",
    ],
    dateRange: "Mar 2025 – Sept 2025",
    logo: dextLogo,
  },
  {
    role: "Data Scientist Intern",
    company: "High Catch Pvt Ltd By StarAgile",
    description: [
      "Appling project-based learning to master Machine/Deep learning concepts (ANN, NLP, RNN, CNN).",
      "Studied convex functions to enhance DL model generalization, boosting team proficiency by 25%.",
      `Participated in a rigorous 8 months data science training program designed to equip individuals for
      real-world data science roles. Acquired in-depth knowledge and practical skills in data analysis, statistical modeling, machine learning, and data visualization.`,
      
    ],
    dateRange: "Nov 2023 – Jun 2024",
    logo: starAgile,
  },
  {
    role: "Software Engineer",
    company: "Coforge",
    description: [
      "Revamped and maintained responsive UIs for airline applications.",
      "Integrated RESTful API endpoints for dynamic data retrieval and display.",
      "Used Git for collaborative development, branching strategy, and version control to maintain clean, production-ready code.",
      "Collaborated with QA teams to troubleshoot, debug, and resolve UI and integration issues in production and staging environments.",
      "Optimized performance using server-side rendering, debouncing, and lazy loading.",
      "Optimized browser performance by implementing lazy loading, minimizing re-renders, and reducing bundle size.",
    ],
    dateRange: "Sep 2022 – May 2023",
    logo: coforgeLogo,
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Coforge",
    description: [
      "Developing and maintaining applications using TPF and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    dateRange: "Jan 2022 – Aug 2022",
    logo: coforgeLogo,
  },
];

export default ExperienceData;
