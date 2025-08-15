import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Icons */}
          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/egarcia1868"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/garcia-eric-r/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto: egarcia.austin.tx@gmail.com"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <MdEmail />
            </Link>
          </div>

          {/* Name */}
          <span className="text-sm mt-2 text-secondary">
            &copy; {new Date().getFullYear()} Eric Garcia.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
