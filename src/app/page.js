"use client";

import { motion } from "framer-motion";

export default function Home() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      
      {/* Animated Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0"></div>

      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {companyName}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-10"
        >
          Modern, lightning-fast, and beautifully animated web experiences designed to convert visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Contact Us Today
          </button>
        </motion.div>
      </div>

    </div>
  );
}
