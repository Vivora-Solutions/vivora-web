import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Our Projects - Software Solutions by Vivora",
  description: "Explore our portfolio of innovative software solutions including SalonDora, mobile apps, and custom development projects.",
  keywords: "software projects, SalonDora, mobile apps, web development, Sri Lanka, Vivora Solutions",
};

const projects = [
  {
    title: "SalonDora",
    category: "Mobile & Web Application",
    description: "A comprehensive salon booking platform that connects customers with beauty salons across Sri Lanka. Features real-time booking, customer management, and business analytics.",
    image: "./images/projects/salondora.png",
    technologies: ["React","tailwind css", "Next.js", "Node.js", "Postgres", "AWS"],
    status: "Live",
    link: "https://salondora.com",
    features: [
      "Real-time salon booking system",
      "Customer and salon dashboards",
      "Payment integration",
      "Review and rating system",
      "Business analytics"
    ]
  }
//   {
//     title: "E-Commerce Platform",
//     category: "Web Application",
//     description: "A modern e-commerce solution with advanced inventory management, payment processing, and customer analytics for local businesses.",
//     image: "/projects/ecommerce.jpg",
//     technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Vercel"],
//     status: "In Development",
//     link: "#",
//     features: [
//       "Advanced product catalog",
//       "Secure payment processing",
//       "Inventory management",
//       "Customer analytics",
//       "Mobile responsive design"
//     ]
//   },
//   {
//     title: "School Management System",
//     category: "Enterprise Software",
//     description: "Complete school management solution with student information system, gradebook, attendance tracking, and parent portal.",
//     image: "/projects/school.jpg",
//     technologies: ["React", "Django", "Python", "MySQL", "Docker"],
//     status: "Completed",
//     link: "#",
//     features: [
//       "Student information management",
//       "Grade and attendance tracking",
//       "Parent-teacher communication",
//       "Financial management",
//       "Report generation"
//     ]
//   },
//   {
//     title: "Healthcare Management",
//     category: "Mobile Application",
//     description: "Digital healthcare platform connecting patients with healthcare providers, featuring appointment booking and medical records management.",
//     image: "/projects/healthcare.jpg",
//     technologies: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
//     status: "In Development",
//     link: "#",
//     features: [
//       "Doctor appointment booking",
//       "Medical records management",
//       "Prescription tracking",
//       "Telemedicine integration",
//       "Health analytics"
//     ]
//   },
//   {
//     title: "Inventory Management System",
//     category: "Desktop Application",
//     description: "Comprehensive inventory management solution for retail businesses with barcode scanning, stock alerts, and sales reporting.",
//     image: "/projects/inventory.jpg",
//     technologies: ["Electron", "React", "SQLite", "Node.js", "Chart.js"],
//     status: "Completed",
//     link: "#",
//     features: [
//       "Barcode scanning integration",
//       "Real-time stock tracking",
//       "Sales and purchase management",
//       "Automated alerts",
//       "Detailed reporting"
//     ]
//   },
//   {
//     title: "Food Delivery Platform",
//     category: "Mobile & Web Application",
//     description: "Multi-restaurant food delivery platform with real-time tracking, payment integration, and restaurant management tools.",
//     image: "/projects/food.jpg",
//     technologies: ["React Native", "React", "Express.js", "MongoDB", "Socket.io"],
//     status: "Planning",
//     link: "#",
//     features: [
//       "Multi-restaurant platform",
//       "Real-time order tracking",
//       "Payment gateway integration",
//       "Delivery management",
//       "Customer loyalty programs"
//     ]
//   }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
      return "bg-green-500";
    case "Completed":
      return "bg-blue-500";
    case "In Development":
      return "bg-yellow-500";
    case "Planning":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

export default function ProjectsPage() {
  return (
    <main className="bg-darkmode min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center">
            <h1 className="font-medium text-60 md:text-70 lg:text-76 text-white mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted text-18 md:text-20 lg:w-60% mx-auto mb-8">
              Discover our portfolio of innovative software solutions that are transforming businesses and improving lives across Sri Lanka.
            </p>
            <Link href="/" className="inline-block bg-primary rounded-lg px-6 py-3 text-darkmode font-medium hover:scale-110 duration-300">
              Back to Home
            </Link>
          </div>
        </div>
        <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-light_grey bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-opacity-20 transition-all duration-500 border border-gray-700 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full"
                    style={{ zIndex: 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tealGreen/20 flex items-center justify-center z-10">
                    {/* <div className="text-center">
                      <Icon
                        icon="mdi:laptop-code"
                        width="80"
                        height="80"
                        className="text-primary mx-auto mb-4"
                      />
                      <p className="text-white text-14 opacity-60">Project Screenshot</p>
                    </div> */}
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-12 font-medium`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-24 font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.link !== "#" && (
                      <Link 
                        href={project.link}
                        target="_blank"
                        className="text-primary hover:text-white transition-colors duration-300"
                      >
                        <Icon icon="mdi:external-link" width="20" height="20" />
                      </Link>
                    )}
                  </div>
                  
                  <p className="text-primary text-14 font-medium mb-3">{project.category}</p>
                  <p className="text-muted text-16 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white text-14 font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary bg-opacity-20 text-primary px-2 py-1 rounded text-12 hover:bg-opacity-30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white text-14 font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted text-14 flex items-center">
                          <Icon icon="mdi:check-circle" width="16" height="16" className="text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center bg-primary text-darkmode px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
                    >
                      Visit Project
                      <Icon icon="mdi:arrow-right" width="16" height="16" className="ml-2" />
                    </Link>
                  ) : (
                    <button className="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-60">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-light_grey bg-opacity-5">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center">
            <h2 className="text-white text-40 md:text-50 font-medium mb-6">
              Have a <span className="text-primary">Project Idea?</span>
            </h2>
            <p className="text-muted text-18 lg:w-60% mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-primary text-darkmode px-8 py-4 rounded-lg font-medium hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                href="/team"
                className="bg-transparent border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-darkmode transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
