import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy Policy", herf: "#" },
  { label: "Terms of Service", herf: "#" },
  { label: "About Us", herf: "#about" },
  { label: "Contact", herf: "#contact" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Team Members",
    short: "Computer Science And Engineering students of University of Moratuwa",
    icon: "/images/icons/icon-Services.svg",
    background: "bg-warning bg-opacity-20",
    price: "10+",
    mark: "Experienced Developers",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Projects",
    short: "Completed",
    icon: "/images/icons/icon-blockchain.svg",
    background: "bg-light_grey",
    price: "50+",
    mark: "Satisfied Clients",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Experience",
    short: "Years",
    icon: "/images/icons/icon-consulting.svg",
    background: "bg-warning bg-opacity-20",
    price: "5+",
    mark: "Industry Experience",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Technologies",
    short: "Modern Stack",
    icon: "/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "20+",
    mark: "Tech Stack Mastery",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Client Satisfaction",
    short: "Rating",
    icon: "/images/icons/icon-star.svg",
    background: "bg-light_grey",
    price: "100%",
    mark: "Happy Clients",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Web Development",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Security Solutions",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Mobile Applications",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Expert Team from UoM" },
  { title: "Cost-Effective Solutions" },
  { title: "Proven Track Record" },
  { title: "24/7 Support" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "Technical Support",
    text: "Round-the-clock technical support and maintenance for all our solutions.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Sri Lankan Expertise",
    text: "Local team with global standards, based in beautiful Sri Lanka",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Continuous Learning",
    text: "Stay updated with latest<br /> technologies and trends.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Analysis & Planning",
    text: "Deep dive into requirements and create comprehensive project roadmap",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Development",
    text: "Build robust solutions using latest technologies and best practices",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Testing & QA",
    text: "Rigorous testing to ensure quality and performance standards",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Deployment & Support",
    text: "Seamless deployment with ongoing maintenance and support",
    position: "md:bottom-0 md:right-0",
  },
];

// Company stats data
export const CompanyStats: { name: string; value: string }[] = [
  { name: "Team Members", value: "10+" },
  { name: "Projects Completed", value: "50+" },
  { name: "Years Experience", value: "5+" },
  { name: "Client Satisfaction", value: "100%" },
];
