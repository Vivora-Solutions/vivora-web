import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode relative z-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {/* Column 1 - Company Info */}
          <div className="col-span-1 relative z-10">
            <Logo />
            <div className="flex gap-6 items-center mt-8">
              <a 
                href="https://www.facebook.com/profile.php?id=61579227657330&mibextid=ZbWKwL" 
                className="block p-2 cursor-pointer hover:bg-gray-800 rounded transition-all duration-300" 
                style={{ pointerEvents: 'auto' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary transition-colors duration-300"
                  style={{ pointerEvents: 'none' }}
                />
              </a>
              <a 
                href="https://www.instagram.com/vivora_lk?igsh=MWpxZ3dpdDkxeWpiMA==" 
                className="block p-2 cursor-pointer hover:bg-gray-800 rounded transition-all duration-300" 
                style={{ pointerEvents: 'auto' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary transition-colors duration-300"
                  style={{ pointerEvents: 'none' }}
                />
              </a>
              <a 
                href="https://www.tiktok.com/@vivora_lk?_t=ZT-8zqx1Wg7p8g&_r=1" 
                className="block p-2 cursor-pointer hover:bg-gray-800 rounded transition-all duration-300" 
                style={{ pointerEvents: 'auto' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon
                  icon="fa6-brands:tiktok"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary transition-colors duration-300"
                  style={{ pointerEvents: 'none' }}
                />
              </a>
            </div>
           
  
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="col-span-1">
            <h4 className="text-white mb-4 font-medium text-24">Quick Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-24 font-medium">Contact Us</h3>
            <p className="text-muted text-opacity-60 text-18 mt-5">
              Ready to start your next
              <br /> software project?
            </p>
            <div className="mt-6">
              <p className="text-white text-17 mb-3">
                📧 contact@salondora.com <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vivorasolutions@gmail.com
              </p>
              <p className="text-white text-17 mb-3">
                📱 +94 70 244 3978 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 77 683 2913 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 76 678 7578
              </p>
              <p className="text-white text-17">
                🏢 No 415/92 A, 5th lane, Gemunu Pedesa, Nawamalkaduwawa, Kurunegala
              </p>
            </div>
          </div>
          
        </div>
         <p className="text-white text-24 justify-center flex  font-medium sm:mt-20 mt-12">
              © 2025 Software Solutions by Vivora
            </p>
      </div>
      
    </footer>
  );
};

export default Footer;
