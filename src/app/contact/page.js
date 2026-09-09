"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } }
  };

  return (
    <div className="pt-40 pb-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter">Let's work together.</h1>
            <p className="text-2xl text-slate-400 font-light leading-relaxed">
              Contact {companyName} today for a free quote. Our team of experts is ready to help you with your next project.
            </p>
          </div>

          <div className="space-y-8 pt-10 border-t border-white/10">
            {[
              { icon: <Phone size={28} />, text: "(555) 123-4567" },
              { icon: <Mail size={28} />, text: `hello@${companyName.toLowerCase().replace(/[^a-z]/g, '')}.com` },
              { icon: <MapPin size={28} />, text: "Local Service Area" }
            ].map((contactItem, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center gap-6 text-xl cursor-pointer group"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-emerald-400 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors duration-300">
                  {contactItem.icon}
                </div>
                <span className="font-medium text-slate-300 group-hover:text-emerald-400 transition-colors">{contactItem.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-slate-900/50 p-10 md:p-14 rounded-[3rem] shadow-2xl border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-3 text-slate-300 uppercase tracking-widest">Full Name</label>
              <input type="text" className="w-full px-6 py-5 rounded-2xl border border-white/10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white/5 focus:bg-white/10 text-white placeholder-slate-500 text-lg" placeholder="John Doe" />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-3 text-slate-300 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full px-6 py-5 rounded-2xl border border-white/10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white/5 focus:bg-white/10 text-white placeholder-slate-500 text-lg" placeholder="john@example.com" />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-3 text-slate-300 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full px-6 py-5 rounded-2xl border border-white/10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none bg-white/5 focus:bg-white/10 text-white placeholder-slate-500 text-lg" placeholder="How can we help you?" />
            </motion.div>
            <motion.div variants={item}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-shadow flex items-center justify-center gap-3 mt-6 text-lg"
              >
                Send Message <Send size={20} />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
