"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
      <motion.a
        href="/"
        className="relative inline-flex items-center font-extrabold tracking-tight text-white text-xl md:text-2xl"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl"
          animate={{
            opacity: [0.25, 0.8, 0.25],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="relative bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(59,130,246,0.55)]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Mr Quick Fix
        </motion.span>

        <motion.span
          className="ml-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,1)]"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
        />
      </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm md:text-base text-white">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-md md:hidden">
          <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
            >
              About
            </Link>

            <a
              href="https://wa.me/27676259810?text=Hi%20I%20need%20IT%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
              onClick={closeMenu}
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </>
  );
}