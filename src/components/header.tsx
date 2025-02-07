"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Animation

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="w-full bg-black border-b border-black py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Dine Market Logo" width={120} height={40} className="cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {["Female", "Male", "Kids", "All Products"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white text-lg font-bold hover:text-gray-400">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(true)}>
          <Menu size={30} />
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Sliding Menu */}
              <motion.div
                className="fixed top-0 right-0 h-full w-3/4 bg-black text-white flex flex-col items-center py-10 space-y-6 mobile-menu z-50"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Close Button */}
                <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
                  <X size={30} />
                </button>

                {/* Navigation Links */}
                {["Female", "Male", "Kids", "All Products"].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-lg font-bold" onClick={() => setIsOpen(false)}>
                    {item}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Search & Cart Section (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative w-72">
            <input type="text" placeholder="Search for products..." className="border border-gray-500 rounded-md py-2 px-4 text-black w-full" />
          </div>

          <Link href="/cart" className="relative flex items-center">
            <Image src="/shppingcartlogo.png" alt="Shopping Cart" width={36} height={36} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
