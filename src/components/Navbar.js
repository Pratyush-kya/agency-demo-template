"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {companyName.charAt(0)}
              </div>
            </motion.div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-gray-900" : "text-gray-900"}`}>
              {companyName}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-600/30">
              Get Quote
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
