"use client";
import { motion } from "framer-motion";
import { Check, Settings, PenTool, Wrench, Zap, Clock } from "lucide-react";

export default function Services() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-6 text-white"
        >
          Our Premium Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto"
        >
          {companyName} offers a wide range of professional solutions tailored to meet your exact needs.
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { icon: <PenTool size={24} />, title: "Installation & Setup", desc: "Expert deployment from day one.", span: "md:col-span-2 lg:col-span-2" },
          { icon: <Wrench size={24} />, title: "Maintenance", desc: "Keep things running smoothly.", span: "col-span-1" },
          { icon: <Zap size={24} />, title: "Emergency Repairs", desc: "Fast fixes when you need them most.", span: "col-span-1" },
          { icon: <Clock size={24} />, title: "24/7 Support", desc: "Always here for you.", span: "md:col-span-2 lg:col-span-2", highlight: true },
          { icon: <Settings size={24} />, title: "Custom Solutions", desc: "Tailored exactly to your unique requirements.", span: "md:col-span-3 lg:col-span-3" }
        ].map((service, i) => (
          <motion.div 
            key={i}
            variants={item}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className={`p-8 rounded-3xl border border-slate-700 shadow-sm flex flex-col justify-between min-h-[200px] overflow-hidden relative group ${service.span} ${service.highlight ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-transparent' : 'bg-slate-800'}`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.highlight ? 'bg-white/10' : 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20'}`} />
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${service.highlight ? 'bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-colors duration-300' : 'bg-slate-700 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300'}`}>
              {service.icon}
            </div>
            <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-white'}`}>{service.title}</h3>
              <p className={`mb-6 text-lg ${service.highlight ? 'text-emerald-50' : 'text-slate-300'}`}>{service.desc}</p>
              <ul className="space-y-3">
                {[1, 2].map((_, j) => (
                  <li key={j} className="flex items-center gap-3 opacity-90">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full ${service.highlight ? 'bg-white/20' : 'bg-slate-700 text-emerald-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-slate-100">Premium execution</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
