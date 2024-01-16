import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manikanta Reddy T",
  initials: "MR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Full Stack Engineer focused on crafting opensource products, interested in compiler design & computer networks",
  summary:
    "As a Full Stack Engineer, I have successfully been in a team, built an internal tool from scratch to production. Currently, I work mostly with TypeScript, React, Java and also wanted to get my hands rusty. I have over 1+ years of experience in a SaaS.",
  avatarUrl: "https://avatars.githubusercontent.com/u/89578665?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "manikantareddytamalampudi7@gmail.com",
    tel: "+91 7730064377",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MRTamalampudi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manikantareddy-tamalampudi-256405192/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/SpaceManIO",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Rajiv Gandhi University of Knowledge Technologies",
      degree: "Bachelor's Degree in Computer Science & Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Testsigma",
      link: "https://testsigma.com",
      badges: ["Bengaluru"],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "May 2022",
      end: "July 2023",
      description:
        "Implemented new features, contributed to Testsigma's opensource product, migrated an internal tool from AngularJS,Spring to ReactJS,SpringBoot. Technologies: React, Angular, TypeScript, Java, SpringBoot",
    }
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "React/Angular",
    "SpringBoot",
    "MySQL",
  ],
  projects: [
    {
      title: "Expenses",
      techStack: [
        "ReactJS",
        "SpringBoot",
        "MySQL",
      ],
      description: "A webapp to keep track of your expense and split the bills",
      link: {
        href: "https://github.com/MRTamalampudi/in-and-out",
      },
    },
    {
      title: "SendFile",
      techStack: [
        "Python",
        "PyQT",
        "Sockets",
      ],
      description: "A secure & blazing fast file sharing app.",
      link: {
        href: "https://github.com/MRTamalampudi/pythonFiletransfer-using-socket-programming",
      },
    },
  ]
} as const;
