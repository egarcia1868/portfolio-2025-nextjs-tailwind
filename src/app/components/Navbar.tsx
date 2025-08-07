"use client";

import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const theme = "dark"; // TODO: get theme from context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menus */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>
          {/* destop menus */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  className={`hover:text-primary transition-colors ${isActive ? "font-semibold text-primary" : ""}`}
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="p-2 rounded-lg hover:bg-gray-100 text-primary cursor-pointer dark:hover:bg-gray-800 transition-colors">
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    className="block py-2 hover:text-primary transition-colors"
                    href={item.href}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div>
                <button className="flex items-center py-2 hover:text-primary transition-colors">
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-5 h-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-5 h-5 mr-2" /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
