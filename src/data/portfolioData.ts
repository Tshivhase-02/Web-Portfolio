import { UserProfile, SkillGroup, ProjectItem, EducationItem, CertificationItem } from '../types/portfolio';

export const USER_PROFILE: UserProfile = {
  fullName: "Zwavhudi Travor Tshivhase",
  professionalTitle: "Aspiring Software Developer",
  headline: "Computer Science Graduate | Java & Spring Boot Developer | RPA & Automation Enthusiast",
  shortIntro: "Computer Science graduate passionate about software engineering, backend systems, and process automation. Eager to contribute strong problem-solving skills, developing Java & Spring Boot capabilities, and practical RPA experience to collaborative engineering teams.",
  biography: [
    "I am a Computer Science graduate from the University of Venda with a solid foundation in computational theory, software design, and database systems. My primary professional goal is to build reliable, maintainable, and user-centric software solutions as a professional software developer.",
    "My technical focus centres on backend engineering with Java and Spring Boot, developing clean RESTful APIs, and working with relational databases such as MySQL. In addition to core software development, I have hands-on experience in Robotic Process Automation (RPA) utilizing Blue Prism and Microsoft Power Automate to optimize manual workflows.",
    "I am currently advancing my practical expertise through a Software Engineering Level 5 programme, strengthening my full-stack capabilities, agile team collaboration, and modern development best practices. I actively integrate AI-assisted development tools to augment my coding workflows, test coverage, and continuous learning."
  ],
  email: "zwavhudigeneral02@gmail.com",
  phone: "+27 60 816 4224",
  location: "Randburg, Johannesburg, Gauteng, South Africa",
  linkedinUrl: "https://www.linkedin.com/in/zwavhudi-tshivhase-8b989a297/",
  githubUrl: "https://github.com/Tshivhase-02",
  coreInterests: [
    "Java & Spring Boot Development",
    "Backend & RESTful API Engineering",
    "Robotic Process Automation (RPA)",
    "Relational Database Design & MySQL",
    "AI-Assisted Software Engineering",
    "Agile Development & Continuous Learning"
  ],
  availability: "Actively seeking Graduate Developer, Junior Software Engineer & Junior Backend / RPA roles",
  avatarUrl: "/assets/aistudio/Polished_Tech_Office_Portrait_c672b07f.png"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages utilized for software development, algorithmic problem solving, and automation scripts.",
    skills: [
      {
        name: "Java",
        description: "Object-oriented design, Collections, Exception handling, Streams, and standard libraries.",
        level: "Core Language"
      },
      {
        name: "Python",
        description: "Automation scripting, data extraction, file processing, and utility scripts.",
        level: "Proficient"
      },
      {
        name: "JavaScript",
        description: "Modern ES6+ syntax, asynchronous operations, and interactive DOM manipulation.",
        level: "Proficient"
      }
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side frameworks and protocols for building structured, testable APIs.",
    skills: [
      {
        name: "Spring Boot",
        description: "Application configuration, MVC patterns, dependency injection, and service layers.",
        level: "Primary Framework"
      },
      {
        name: "REST APIs",
        description: "Endpoint architecture, JSON request/response formats, HTTP methods, and status codes.",
        level: "Applied"
      }
    ]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, clean, and accessible user interfaces for web applications.",
    skills: [
      {
        name: "React",
        description: "Component-based architecture, functional components, hooks, and state management.",
        level: "Applied"
      },
      {
        name: "HTML5 & CSS3",
        description: "Semantic document structure, accessible markup, Flexbox, and CSS Grid layouts.",
        level: "Proficient"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first responsive design, consistent design tokens, and modular UI development.",
        level: "Applied"
      }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational database modeling, query optimization, and structured persistence.",
    skills: [
      {
        name: "MySQL",
        description: "Relational schema design, foreign key constraints, table normalization, and administration.",
        level: "Primary Database"
      },
      {
        name: "SQL",
        description: "Writing complex queries, joins, aggregates, data filtering, and transactional updates.",
        level: "Proficient"
      }
    ]
  },
  {
    category: "Automation & RPA",
    description: "Robotic Process Automation tools to eliminate manual bottlenecks and automate business workflows.",
    skills: [
      {
        name: "Blue Prism",
        description: "Process Studio, Object Studio, application modelling, work queues, and exception handling.",
        level: "RPA Certified / Trained"
      },
      {
        name: "Microsoft Power Automate",
        description: "Building automated cloud & desktop flows, document parsing, and Microsoft 365 triggers.",
        level: "Applied"
      }
    ]
  },
  {
    category: "Development Tools & Practices",
    description: "Tools and modern workflows used for collaboration, version control, and productivity.",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control, branching strategies, commit hygiene, and pull request reviews.",
        level: "Daily Use"
      },
      {
        name: "AI-Assisted Development Tools",
        description: "Utilizing AI coding assistants for code optimization, debugging, documentation, and testing.",
        level: "Applied"
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "smart-register",
    name: "SmartRegister",
    tagline: "Digital Attendance Tracking & Record Verification System",
    category: "Full-Stack & Backend",
    description: "A centralized digital attendance management system designed to eliminate paper-based registers, prevent record discrepancies, and provide administrators with instant visibility over attendance data.",
    roleAndContributions: [
      "Designed and implemented the relational MySQL database schema for members, sessions, and attendance records.",
      "Developed backend REST API endpoints using Java and Spring Boot for user authentication, record capture, and date-range queries.",
      "Integrated frontend input forms with validation to prevent duplicate or invalid attendance submissions.",
      "Created reporting views enabling administrators to quickly filter records and export attendance summaries."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "React", "Tailwind CSS"],
    keyFeatures: [
      "Real-time attendance logging with automated timestamps and user verification",
      "Comprehensive search and filtering across sessions, cohorts, and dates",
      "Data validation logic preventing accidental duplicate attendance entries",
      "Role-based administrative view for record auditing and reconciliation"
    ],
    githubUrl: "https://github.com/Tshivhase-02/SmartRegister",
    status: "Completed & Documented"
  },
  {
    id: "home-affairs-citizen-services",
    name: "Home Affairs Citizen Services System",
    tagline: "Modernized Civic Services & Identity Records Management Solution",
    category: "Full-Stack & Backend",
    description: "A software application developed to modernize citizen civic services, facilitating application submissions for identification documents, certificates, and status tracking to streamline service delivery.",
    roleAndContributions: [
      "Architected backend service layers and database entities to handle citizen identification and application records.",
      "Implemented structured validation rules for South African ID numbers and application reference codes.",
      "Engineered secure CRUD operations using Spring Boot and Hibernate/JPA connected to a normalized MySQL database.",
      "Structured clean API responses to ensure predictable frontend consumption and clear client feedback."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Citizen application workflow for identity documents and certificates",
      "Automated application reference number generation and status tracking",
      "Database schema designed according to 3rd normal form (3NF) principles",
      "Validation routines ensuring data cleanliness prior to persistence"
    ],
    githubUrl: "https://github.com/Tshivhase-02/home-affairs-citizen-services",
    status: "Completed"
  },
  {
    id: "email-processing-rpa",
    name: "Email Processing Automation Solution",
    tagline: "Automated RPA Workflow for Inbound Inquiries & Document Extraction",
    category: "Automation & RPA",
    description: "An automated Robotic Process Automation workflow engineered to monitor enterprise mailboxes, classify incoming client correspondence, extract attachments, and parse tabular information without human intervention.",
    roleAndContributions: [
      "Designed and configured end-to-end bot logic using Blue Prism and Microsoft Power Automate.",
      "Implemented rule-based email classification and attachment extraction algorithms.",
      "Authored Python helper routines to parse tabular data from PDF and spreadsheet attachments.",
      "Configured robust exception handling paths and automated notification alerts for unexpected email formats."
    ],
    technologies: ["Blue Prism", "Microsoft Power Automate", "Python", "Outlook Integration", "Excel"],
    keyFeatures: [
      "Continuous mailbox monitoring with keyword and sender classification",
      "Automated extraction and parsing of attachments into structured data rows",
      "Exception handling queues with routing for manual operator review",
      "Audit trail logging tracking processing outcomes and timestamps"
    ],
    githubUrl: "https://github.com/Tshivhase-02/email-processing-rpa",
    status: "Completed & Deployed"
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio Website",
    tagline: "Modern, Minimalist Web Portfolio & Recruiter Information Hub",
    category: "Web & Frontend",
    description: "A professional, responsive personal website developed to present academic qualifications, technical skills, software projects, and contact channels in a clean, corporate layout tailored for hiring managers.",
    roleAndContributions: [
      "Structured an organized, accessible single-page web layout with smooth navigation and clear typographic hierarchy.",
      "Implemented a restrained, corporate design system using Tailwind CSS with zero visual clutter.",
      "Built interactive project modal cards, responsive skill category grids, and a direct inquiry form.",
      "Ensured responsive compatibility across mobile phones, tablets, laptops, and desktop screens."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5"],
    keyFeatures: [
      "Clean corporate design free of unnecessary dashboard interfaces and visual noise",
      "Interactive CV viewer with one-click print/save as PDF and markdown copy",
      "Organized sections covering Education, Certifications, Skills, and Projects",
      "Direct recruiter contact form with input validation and clear confirmation"
    ],
    githubUrl: "https://github.com/Tshivhase-02/personal-portfolio",
    liveUrl: "https://zwavhudi-tshivhase.dev",
    status: "Active & Maintained"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "univen-bsc-cs",
    qualification: "Bachelor of Science (BSc) in Computer Science",
    institution: "University of Venda",
    location: "Thohoyandou, Limpopo, South Africa",
    period: "Graduated",
    status: "Completed",
    description: "Comprehensive undergraduate degree providing deep grounding in computational fundamentals, software design principles, algorithms, and database systems.",
    keyModules: [
      "Object-Oriented Programming (Java)",
      "Data Structures & Algorithms",
      "Database Systems & SQL Design",
      "Operating Systems & Architecture",
      "Software Engineering Methodologies",
      "Computer Networks & Protocols",
      "Systems Analysis and Design"
    ]
  },
  {
    id: "software-eng-level-5",
    qualification: "Software Engineering Level 5",
    institution: "Accredited Software Engineering Programme",
    location: "South Africa",
    period: "Current Programme",
    status: "In Progress",
    description: "Industry-aligned vocational software engineering qualification advancing practical full-stack capabilities, enterprise backend frameworks, modern web technologies, and agile delivery.",
    keyModules: [
      "Enterprise Java & Spring Boot Application Development",
      "Relational Database Engineering with MySQL",
      "Modern Web Development (HTML5, CSS3, JavaScript & React)",
      "RESTful API Architecture & Service Integration",
      "Software Testing, Debugging & Quality Assurance",
      "Agile Project Workflows & Git Version Control"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-digital-learning-yes4youth",
    title: "Digital Learning",
    issuingOrganization: "YES4YOUTH",
    description: "Successfully completed a digital learning programme covering digital literacy, information management, cybersecurity awareness and the effective use of digital technologies in the workplace."
  },
  {
    id: "cert-entrepreneurship-yes4youth",
    title: "Entrepreneurship",
    issuingOrganization: "YES4YOUTH",
    description: "Completed training covering entrepreneurship principles, business development, identifying business opportunities and basic business planning."
  },
  {
    id: "cert-work-readiness-yes4youth",
    title: "Work Readiness",
    issuingOrganization: "YES4YOUTH",
    description: "Completed workplace preparation training covering professional conduct, communication, teamwork, workplace expectations and career development."
  },
  {
    id: "cert-java-21-udemy",
    title: "Java 21 Programming Masterclass: Fundamentals for Beginners",
    issuingOrganization: "Udemy",
    description: "Completed training in Java programming fundamentals, object-oriented programming, variables, data types, control structures, methods, classes and objects."
  },
  {
    id: "cert-genai-essentials-ibm",
    title: "Generative AI Essentials: Using LLMs to Work with Data",
    issuingOrganization: "IBM",
    description: "Completed training covering generative AI fundamentals, Large Language Models (LLMs) and using AI tools to analyse, process and work with data."
  },
  {
    id: "cert-genai-wethinkcode",
    title: "GenAI for Software Engineers",
    issuingOrganization: "WeThinkCode",
    description: "Completed training exploring generative AI applications in software engineering and how AI tools can support software development workflows."
  }
];
