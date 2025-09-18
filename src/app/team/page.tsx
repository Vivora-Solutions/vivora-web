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
    name: "ISHARA DILSHAN",
    position: "Chief Executive Officer (CEO) – Director",
    role: "Leads company vision, strategy, fundraising, partnerships, business registration, and legal compliance.",
    image: "/images/team/8.jpeg",
  },
  {
    name: "SITHUM BIMSARA",
    position: "Chief Technology Officer (CTO) – Director",
    role: "Heads development team, product roadmap, and provides technical leadership.",
    image: "/images/team/3.jpeg",
  },
  {
    name: "INDUWARA BANDARA",
    position: "Chief Operating Officer (COO) – Director",
    role: "Oversees daily operations, salon onboarding, and business execution through outreach and partnerships.",
    image: "/images/team/7.jpeg",
  },
  {
    name: "KAVEESHA KAPURUGE",
    position: "Creative Lead",
    role: "Designs video content, flyers, graphics, and manages digital marketing & social media.",
    image: "/images/team/10.jpeg",
  },
  {
    name: "DULITHA PERERA",
    position: "Mobile Developer",
    role: "Builds and maintains iOS/Android mobile applications and database systems.",
    image: "/images/team/5.jpeg",
  },
  {
    name: "DAMINDU THAMODYA",
    position: "Backend Developer",
    role: "Manages server-side logic and system integrations.",
    image: "/images/team/1.jpeg",
  },
  {
    name: "THEMIYA YASITH WIJESINGHE",
    position: "Content Planner",
    role: "Plans and creates engaging digital content, including scripts and captions.",
    image: "/images/team/4.jpeg",
  },
  {
    name: "NIPUN SANGEETH",
    position: "Frontend Developer",
    role: "Builds and maintains the web platform (customer & salon dashboards) and supports salon onboarding.",
    image: "/images/team/9.jpeg",
  },
  {
    name: "SASMITHA JAYASINGHE",
    position: "Mobile Developer",
    role: "Builds mobile applications and contributes to salon onboarding through outreach.",
    image: "/images/team/6.jpeg",
  },
  {
    name: "DHANANJAYA WEERAKOON",
    position: "Business Development Executive",
    role: "Identifies, contacts, and onboards salons to the platform through calls, DMs, emails, and in-person visits.",
    image: "/images/team/2.jpeg",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-darkmode min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center">
            <h1 className="font-medium text-60 md:text-70 lg:text-76 text-white mb-6">
              Team <span className="text-primary">Vivora</span>
            </h1>
            <p className="text-muted text-18 md:text-20 lg:w-60% mx-auto mb-8">
              Your one-stop solution for discovering and booking the best salon experiences in your city.
            </p>
            <Link href="/" className="inline-block bg-primary rounded-lg px-6 py-3 text-darkmode font-medium hover:scale-110 duration-300">
              Back to Home
            </Link>
          </div>
        </div>
        <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-40 md:text-50 font-medium mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted text-18 lg:w-70% mx-auto mb-16">
              A diverse team of passionate individuals working together to revolutionize the salon experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group ${
                  index === teamMembers.length - 1 && teamMembers.length % 3 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="bg-light_grey bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-500 border border-gray-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-tealGreen flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-darkmode"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-white text-20 font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-tealGreen rounded-full mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>
                    <p className="text-primary text-16 font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-muted text-14 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-light_grey bg-opacity-5">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="max-w-5xl mx-auto bg-light_grey bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-700 hover:bg-opacity-15 transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="h-12 w-1.5 bg-gradient-to-b from-primary via-tealGreen to-primary rounded-full mr-6"></div>
              <h2 className="text-white text-40 font-medium">
                Our <span className="text-primary">Story</span>
              </h2>
            </div>

            <div className="space-y-6 text-18 leading-relaxed">
              <p className="text-muted">
                SalonDora was born out of a late-night discussion among friends who shared a simple but powerful idea:
                <span className="italic font-semibold text-primary">
                  {" "}
                  "What if busy people could book a salon appointment easily and walk in without waiting?"
                </span>
              </p>
              <p className="text-muted">
                That thought grew into a software solution, and soon after, our team came together under the name{" "}
                <span className="font-bold text-primary">
                  Vivora Solutions
                </span>
                .
              </p>
              <p className="text-muted">
                We are a group of 10 founders from diverse engineering backgrounds – Computer Science, Electronics,
                Mechanical, and Materials Engineering – united by a passion for solving real problems with technology.
              </p>
              <p className="text-muted">
                Our vision and mission is simple:{" "}
                <span className="font-bold text-primary">
                  to make everyday life easier through smart and accessible technology.
                </span>
              </p>
              <p className="text-muted">
                In a very short time, SalonDora has seen rapid growth and adoption. We've improved the platform quickly,
                collaborated with leading salon chains, and onboarded many salons across the country.
              </p>
              <p className="text-muted">
                SalonDora is more than just an app – it's the first step in our journey of building solutions that bring
                convenience and innovation into daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-40 md:text-50 font-medium mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted text-18 lg:w-70% mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <span className="text-primary text-24">🚀</span>
              </div>
              <h4 className="text-white text-20 font-semibold mb-2">Innovation</h4>
              <p className="text-muted text-14">
                We constantly push boundaries and embrace new technologies to create cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <span className="text-primary text-24">🤝</span>
              </div>
              <h4 className="text-white text-20 font-semibold mb-2">Collaboration</h4>
              <p className="text-muted text-14">
                Our diverse backgrounds come together to create solutions that are greater than the sum of their parts.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <span className="text-primary text-24">💡</span>
              </div>
              <h4 className="text-white text-20 font-semibold mb-2">Problem Solving</h4>
              <p className="text-muted text-14">
                We identify real-world problems and create technology solutions that make life easier for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
