"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from '../public/180x60.png';
import mobileLogo from "../public/120x40.png";
import {
  IconBrandXing,
  IconMenuDeep,
} from "@tabler/icons-react";


function NavbarDesign() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);

  const handleNavMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  
  return (
    <header className=" relative m-0 z-50">
      <div className=" relative top-0 w-full z-50 2xl:max-w-[1860px] mx-auto">
        <nav className=" relative py-5 lg:py-4.5 lg:px-10 flex items-center lg:flex-wrap lg:justify-start w-full">
          <div className=" flex flex-wrap items-center justify-between px-4 lg:px-0 p-0 w-full">
            <Link href={"/"}>
              <picture>
                <source media="(min-width: 1024px)" srcSet={logo.src} width={180} height={60}/>
                <source media="(max-width: 1023px)" srcSet={mobileLogo.src} width={120} height={40}/>
                <img src={logo.src} alt="Logo" />
              </picture>
            </Link>

            <div className=" hidden lg:flex items-center basis-auto">
              <div className=" flex flex-1 mx-[1.042vw]">
                <ul className=" inline-flex items-center list-none p-0 py-[0.5rem]">
                  <li className=" mx-1.5 relative">
                    <Link
                      href={"/"}
                      className=" text-base py-3.5 px-2.5 hover:text-[#2F9D94]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className=" mx-1.5 relative">
                    <Link
                      href={"/"}
                      className=" text-base py-3.5 px-2.5 hover:text-[#2F9D94]"
                    >
                      About
                    </Link>
                  </li>
                  <li className=" mx-1.5 relative w-full group">
                    <Link
                      href="#"
                      className=" text-base py-3.5 px-2.5 hover:text-[#2F9D94]"
                    >
                      Services
                    </Link>
                  </li>
                  <li className=" mx-1.5 relative">
                    <Link
                      href='/contact'
                      className=" text-base py-3.5 px-2.5 hover:text-[#2F9D94]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" hidden lg:flex items-center gap-3">
              {/* <button>Cart</button>
              <button>Sign In</button> */}
              <Link href={"/contact"} className=" contact-button">
                Appointment
              </Link>
            </div>
            <div className=" flex lg:hidden items-center gap-3">
              <div className=" lg:hidden" onClick={handleNavMenu}>
                <span className=" slicknav-btn">
                  {mobileMenuOpen ? (
                    <IconBrandXing stroke={2} />
                  ) : (
                    <IconMenuDeep stroke={2} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={` ${mobileMenuOpen ? "block" : "hidden"} top-0 relative`}
        >
          <div className=" text-base">
            <ul className=" my-1 clear-both list-none overflow-hidden p-0">
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/home"
                  className=" relative text-base font-normal  m-0 rounded-none"
                >
                  Home
                </Link>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/about"
                  className=" relative text-base font-normal  m-0 rounded-none"
                >
                  About
                </Link>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="#"
                  className=" relative text-base font-normal m-0 rounded-none"
                >
                  Services
                </Link>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/contact"
                  className=" relative text-base font-normal m-0 rounded-none"
                >
                  Contact
                </Link>
              </li>
              {/* <li className=" hidden lg:block">Sign In</li>
              <li className=" hidden lg:block">Sign Up</li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarDesign;
