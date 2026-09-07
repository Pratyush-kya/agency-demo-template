"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={container}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Welcome to the future of your business
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            Elevate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{companyName}</span> to the Next Level.
          </motion.h1>
          
          <motion.p variants={item} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional, reliable, and trusted by the community. We deliver excellence in every project we take on.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-bold shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Shield className="w-8 h-8 text-blue-500" />, title: "Fully Licensed", desc: "Certified professionals you can trust with your property." },
            { icon: <Zap className="w-8 h-8 text-amber-500" />, title: "Lightning Fast", desc: "Quick response times and efficient project completion." },
            { icon: <Star className="w-8 h-8 text-purple-500" />, title: "5-Star Quality", desc: "Top-rated service with hundreds of happy local customers." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
