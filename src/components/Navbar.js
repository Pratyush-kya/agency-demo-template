"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {companyName.charAt(0)}
              </div>
            </motion.div>
            <span className={`font-bold text-xl tracking-tight text-white`}>
              {companyName}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className="relative px-3 py-2 text-sm font-medium transition-colors">
                  <span className={`relative z-10 ${isActive ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-emerald-900/30 rounded-lg -z-0"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-emerald-600/30">
              Get Quote
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-xl"
        >
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg font-medium ${pathname === link.href ? "bg-emerald-900/30 text-emerald-400" : "text-slate-300 hover:bg-slate-700"}`}>
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-md">
            Get Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
}
