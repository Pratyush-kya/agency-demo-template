"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
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
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-5xl font-extrabold mb-6 text-white">Let's work together.</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Contact {companyName} today for a free quote. Our team of experts is ready to help you with your next project.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-slate-700">
            {[
              { icon: <Phone size={24} />, text: "(555) 123-4567" },
              { icon: <Mail size={24} />, text: `hello@${companyName.toLowerCase().replace(/[^a-z]/g, '')}.com` },
              { icon: <MapPin size={24} />, text: "Local Service Area" }
            ].map((contactItem, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-lg cursor-pointer group"
              >
                <div className="w-14 h-14 bg-slate-800 text-emerald-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
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
          animate="show"
          variants={container}
          className="bg-slate-800 p-8 md:p-10 rounded-3xl shadow-xl shadow-emerald-900/20 border border-slate-700"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-slate-700 focus:bg-slate-600 text-white placeholder-slate-400" placeholder="John Doe" />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-slate-700 focus:bg-slate-600 text-white placeholder-slate-400" placeholder="john@example.com" />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none bg-slate-700 focus:bg-slate-600 text-white placeholder-slate-400" placeholder="How can we help you?" />
            </motion.div>
            <motion.div variants={item}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={18} />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
