"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className="md:pt-40 pt-9" id="process">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Development <span className="text-primary">Process</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              Our structured approach ensures quality delivery from
              conception to deployment and beyond.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative min-h-[600px]">
              <div className="relative z-10">
                <Image
                  src= {`${getImagePrefix()}images/timeline/img-timeline.png`} 
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-70% mx-auto"
                />
              </div>
              {/* Planning - Top Left */}
              <div className="absolute top-20 left-4 xl:left-8 w-64 xl:w-72 flex items-center gap-4 z-20">
                <div className="text-right flex-1">
                  <h5 className="text-muted text-20 xl:text-24 mb-2">Planning</h5>
                  <p className="text-14 xl:text-16 text-muted text-opacity-60">
                    Map the project's scope and architecture
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-4 xl:p-5 h-fit rounded-full flex-shrink-0">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Planning"
                    width={32}
                    height={32}
                    className="w-8 h-8 xl:w-10 xl:h-10"
                  />
                </div>
              </div>
              
              {/* Refinement - Top Right */}
              <div className="absolute top-20 right-4 xl:right-8 w-64 xl:w-72 flex items-center gap-4 z-20">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-4 xl:p-5 h-fit rounded-full flex-shrink-0">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="Refinement"
                    width={32}
                    height={32}
                    className="w-8 h-8 xl:w-10 xl:h-10"
                  />
                </div>
                <div className="text-left flex-1">
                  <h5 className="text-muted text-20 xl:text-24 mb-2">Refinement</h5>
                  <p className="text-14 xl:text-16 text-muted text-opacity-60">
                    Refine and improve your solution
                  </p>
                </div>
              </div>
              
              {/* Prototype - Bottom Left */}
              <div className="absolute bottom-20 left-4 xl:left-8 w-64 xl:w-72 flex items-center gap-4 z-20">
                <div className="text-right flex-1">
                  <h5 className="text-muted text-20 xl:text-24 mb-2">Prototype</h5>
                  <p className="text-14 xl:text-16 text-muted text-opacity-60">
                    Build a working prototype to test your product
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-4 xl:p-5 h-fit rounded-full flex-shrink-0">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Prototype"
                    width={32}
                    height={32}
                    className="w-8 h-8 xl:w-10 xl:h-10"
                  />
                </div>
              </div>
              
              {/* Support - Bottom Right */}
              <div className="absolute bottom-20 right-4 xl:right-8 w-64 xl:w-72 flex items-center gap-4 z-20">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-4 xl:p-5 h-fit rounded-full flex-shrink-0">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Scale and support"
                    width={32}
                    height={32}
                    className="w-8 h-8 xl:w-10 xl:h-10"
                  />
                </div>
                <div className="text-left flex-1">
                  <h5 className="text-muted text-nowrap text-20 xl:text-24 mb-2">
                    Support
                  </h5>
                  <p className="text-14 xl:text-16 text-muted text-opacity-60">
                    Deploy the product and ensure full support by us
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey bg-opacity-45 p-6 rounded-full">
                    <Image
                      src= {`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted text-opacity-60 text-18">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
