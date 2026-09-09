"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } }
  };

  return (
    <div className="relative overflow-hidden pt-40 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-12 border border-emerald-500/20 backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
            Welcome to the future of your business
          </motion.div>
          
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-10 leading-[1.1]">
            Elevate <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-600">{companyName}</span> to the Next Level.
          </motion.h1>
          
          <motion.p variants={item} className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Professional, reliable, and trusted by the community. We deliver uncompromising excellence in every project we take on.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full font-bold shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3 text-lg"
              >
                Explore Services <ArrowRight size={22} />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-lg backdrop-blur-md"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section - Bento Grid Style */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Shield className="w-10 h-10 text-emerald-400" />, title: "Fully Licensed", desc: "Certified professionals you can trust with your property." },
            { icon: <Zap className="w-10 h-10 text-emerald-400" />, title: "Lightning Fast", desc: "Quick response times and efficient project completion." },
            { icon: <Star className="w-10 h-10 text-emerald-400" />, title: "5-Star Quality", desc: "Top-rated service with hundreds of happy local customers." }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="bg-slate-900/50 p-10 rounded-[2rem] border border-white/5 shadow-inner hover:bg-slate-900/80 transition-colors backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
