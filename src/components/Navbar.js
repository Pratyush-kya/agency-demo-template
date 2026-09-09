"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-white/10 py-4 shadow-2xl shadow-black/50" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 180, scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                {companyName.charAt(0)}
              </div>
            </motion.div>
            <span className={`font-extrabold text-2xl tracking-tighter text-white`}>
              {companyName}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className="relative px-4 py-2 text-sm font-bold tracking-wide transition-colors">
                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-emerald-400" : "text-slate-400 hover:text-white"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow text-sm tracking-wide uppercase"
            >
              Get Quote
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <motion.div whileTap={{ scale: 0.9 }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-8 shadow-2xl overflow-hidden"
          >
            <div className="space-y-4">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block px-6 py-4 rounded-2xl font-bold text-lg transition-colors ${pathname === link.href ? "bg-white/10 text-emerald-400 border border-white/10" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-6 bg-white text-black px-6 py-4 rounded-2xl font-bold shadow-lg uppercase tracking-wider">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
