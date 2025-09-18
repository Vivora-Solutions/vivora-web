import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Software Solutions by Vivora",
  description: "Meet our talented team of software professionals from University of Moratuwa. Experienced developers, architects, and designers delivering exceptional software solutions.",
  keywords: "software team, developers, University of Moratuwa, Sri Lanka, software company, tech team",
};

const teamMembers = [
  {
    name: "Dr. Rajitha Silva",
    role: "CEO & Lead Architect",
    university: "University of Moratuwa",
    degree: "PhD in Computer Science",
    experience: "15+ years",
    specialization: "System Architecture, AI/ML",
    image: "/images/team/member1.jpg",
    linkedin: "#",
    email: "rajitha@vivora.com"
  },
  {
    name: "Kasun Perera",
    role: "CTO & Full Stack Developer",
    university: "University of Moratuwa",
    degree: "BSc Engineering (Hons)",
    experience: "12+ years",
    specialization: "Cloud Architecture, DevOps",
    image: "/images/team/member2.jpg",
    linkedin: "#",
    email: "kasun@vivora.com"
  },
  {
    name: "Nimali Fernando",
    role: "Senior Frontend Developer",
    university: "University of Moratuwa",
    degree: "BSc Computer Science",
    experience: "8+ years",
    specialization: "React, Next.js, UI/UX",
    image: "/images/team/member3.jpg",
    linkedin: "#",
    email: "nimali@vivora.com"
  },
  {
    name: "Tharaka Jayasena",
    role: "Senior Backend Developer",
    university: "University of Moratuwa",
    degree: "BSc Engineering (Hons)",
    experience: "10+ years",
    specialization: "Node.js, Python, Databases",
    image: "/images/team/member4.jpg",
    linkedin: "#",
    email: "tharaka@vivora.com"
  },
  {
    name: "Sanduni Wickramasinghe",
    role: "Mobile App Developer",
    university: "University of Moratuwa",
    degree: "BSc Computer Science",
    experience: "6+ years",
    specialization: "React Native, Flutter",
    image: "/images/team/member5.jpg",
    linkedin: "#",
    email: "sanduni@vivora.com"
  },
  {
    name: "Chamara Rathnayake",
    role: "DevOps Engineer",
    university: "University of Moratuwa",
    degree: "BSc Engineering (Hons)",
    experience: "7+ years",
    specialization: "AWS, Docker, Kubernetes",
    image: "/images/team/member6.jpg",
    linkedin: "#",
    email: "chamara@vivora.com"
  },
  {
    name: "Ishara Kumari",
    role: "QA Engineer",
    university: "University of Moratuwa",
    degree: "BSc Computer Science",
    experience: "5+ years",
    specialization: "Test Automation, Quality Assurance",
    image: "/images/team/member7.jpg",
    linkedin: "#",
    email: "ishara@vivora.com"
  },
  {
    name: "Ruwan Gamage",
    role: "Business Analyst",
    university: "University of Moratuwa",
    degree: "BSc Engineering (Hons)",
    experience: "8+ years",
    specialization: "Project Management, Requirements Analysis",
    image: "/images/team/member8.jpg",
    linkedin: "#",
    email: "ruwan@vivora.com"
  },
  {
    name: "Dilini Amarasinghe",
    role: "UI/UX Designer",
    university: "University of Moratuwa",
    degree: "BSc Computer Science",
    experience: "6+ years",
    specialization: "User Experience, Visual Design",
    image: "/images/team/member9.jpg",
    linkedin: "#",
    email: "dilini@vivora.com"
  },
  {
    name: "Thilina Bandara",
    role: "Junior Developer",
    university: "University of Moratuwa",
    degree: "BSc Engineering (Hons)",
    experience: "2+ years",
    specialization: "Full Stack Development, Learning & Growth",
    image: "/images/team/member10.jpg",
    linkedin: "#",
    email: "thilina@vivora.com"
  }
];

export default function TeamPage() {
  return (
    <main className="bg-darkmode min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center">
            <h1 className="font-medium text-60 md:text-70 lg:text-76 text-white mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-muted text-18 md:text-20 lg:w-60% mx-auto mb-8">
              Talented professionals from University of Moratuwa, dedicated to delivering 
              exceptional software solutions with expertise and innovation.
            </p>
            <Link href="/" className="inline-block bg-primary rounded-lg px-6 py-3 text-darkmode font-medium hover:scale-110 duration-300">
              Back to Home
            </Link>
          </div>
        </div>
        <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-light_grey bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-gray-700"
              >
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-tealGreen rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-darkmode font-bold text-20">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-white text-20 font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-16 font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2 text-14 text-muted">
                    <p><span className="text-white">Education:</span> {member.degree}</p>
                    <p><span className="text-white">University:</span> {member.university}</p>
                    <p><span className="text-white">Experience:</span> {member.experience}</p>
                    <p><span className="text-white">Specialization:</span> {member.specialization}</p>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-primary bg-opacity-20 hover:bg-opacity-40 text-primary px-3 py-2 rounded-lg text-12 transition-all duration-300"
                    >
                      Email
                    </a>
                    <a
                      href={member.linkedin}
                      className="bg-primary bg-opacity-20 hover:bg-opacity-40 text-primary px-3 py-2 rounded-lg text-12 transition-all duration-300"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-light_grey bg-opacity-5">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center">
            <h2 className="text-white text-40 md:text-50 font-medium mb-6">
              Our <span className="text-primary">Culture</span>
            </h2>
            <p className="text-muted text-18 lg:w-70% mx-auto mb-12">
              We foster a collaborative environment where innovation thrives. Our team values 
              continuous learning, technical excellence, and delivering solutions that make a difference.
            </p>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-24">🎓</span>
                </div>
                <h4 className="text-white text-20 font-semibold mb-2">Excellence in Education</h4>
                <p className="text-muted text-14">
                  All our team members are graduates from the prestigious University of Moratuwa, 
                  ensuring top-tier technical expertise.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-24">🚀</span>
                </div>
                <h4 className="text-white text-20 font-semibold mb-2">Innovation Driven</h4>
                <p className="text-muted text-14">
                  We stay ahead of technology trends and continuously adopt new tools and 
                  methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-24">🤝</span>
                </div>
                <h4 className="text-white text-20 font-semibold mb-2">Collaborative Spirit</h4>
                <p className="text-muted text-14">
                  Our team works closely together, sharing knowledge and supporting each other 
                  to achieve exceptional results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
