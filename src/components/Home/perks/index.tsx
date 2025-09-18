import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";

const Perks = () => {
  return (
    <section className="pb-28 relative" id="contact">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
            Get In <span className="text-primary">Touch</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium">
            Ready to Transform Your <span className="text-primary">Business</span>?
          </h2>
          <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey bg-opacity-35 lg:bg-bottom bg-center bg-no-repeat">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col"
              >
                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                  <Image
                    src= {`${getImagePrefix()}${item.icon}`}
                    alt={item.title}
                    width={44}
                    height={44}
                  />
                </div>
                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className="text-muted text-opacity-60"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-white text-32 font-medium mb-8">
              Let's Work Together
            </h3>
            <p className="text-muted text-opacity-60 text-18 mb-10">
              Contact us today to discuss your project requirements.
              <br />
              Email: <span className="text-primary">contact@salondora.com</span>
              <br />
              Phone: <span className="text-primary">+94 76 678 7578</span>
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:contact@salondora.com" 
                className="bg-primary text-darkmode px-8 py-3 rounded-lg text-18 font-medium hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
              >
                Send Email
              </a>
              <a 
                href="https://salondora.com" 
                target="_blank"
                className="bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-18 font-medium hover:bg-primary hover:text-darkmode transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
