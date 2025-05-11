"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/70 backdrop-blur shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/home" className="text-white text-2xl font-bold tracking-wide">
            K Satheesan
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-indigo-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Menu
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setMobileOpen(true)}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 w-64 h-full bg-black text-white z-50 px-6 py-5 flex flex-col space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Menu</h2>
                <X
                  size={26}
                  className="cursor-pointer text-gray-300"
                  onClick={() => setMobileOpen(false)}
                />
              </div>

              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-indigo-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
