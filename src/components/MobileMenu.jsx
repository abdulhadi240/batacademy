"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLock } from "react-icons/fa";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="pt-4 mx-4 md:hidden">
        {/* Menu Button */}
        <div className="flex justify-between mx-2">
          
          <div>
            <Image src={"/logobat.png"} width={70} height={70} alt="logo" />
          </div>
          <button
            aria-label="Open menu"
            className="flex items-center justify-center w-auto h-auto text-black rounded-md dark:text-white"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-md h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="">
          {/* Logo */}

          <button
            aria-label="Close menu"
            onClick={toggleMenu}
            className="flex justify-end p-2 bg-[#DEEEFD] w-full text-[#111F51] hover:text-gray-800 "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="bg-[#DEEEFD] p-4">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <Image
                  src="/logobat.png" // Optimized image usage
                  alt="Logo"
                  width={100}
                  height={100}
                  className=""
                  priority // To load the image faster
                />
              </div>
              <div className="flex justify-between gap-10">
                <Link
                  href="/login"
                  className="flex items-center w-full h-8 px-4 mt-4 text-xs  border-[#111F51] border-[1px] text-[#111F51] rounded hover:bg-blue-700"
                  onClick={toggleMenu}
                >
                  <FaLock className="mr-2 " /> Login
                </Link>
                <Link
                  href="/login"
                  className="flex items-center w-full h-8 px-4 mt-4 text-xs text-white rounded bg-primary "
                  onClick={toggleMenu}
                >
                  <FaLock className="mr-2 " /> Signup
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="mt-8 space-y-4 text-sm space-x-7">
            <Link
              href="/"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {" "}
              
            </Link>
            <Link
              href="/"
              passHref
              className="block text-[#111F51] font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/search_course/training-courses/"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Training Courses
            </Link>
            <Link
              href="/search_course/diploma"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Diploma
            </Link>
            <Link
              href="/search_course/masters"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Masters
            </Link>
            <Link
              href="/show_cities"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Cities 
            </Link>
            <Link
              href="/consulting"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Consulting
            </Link>
            <Link
              href="/team"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              How We Are
            </Link>
            <Link
              href="/teamwork"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Team Work
            </Link>
            <Link
              href="/contact"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
