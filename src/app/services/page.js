"use client";
import { motion } from "framer-motion";
import { Check, Settings, PenTool, Wrench, Zap, Clock } from "lucide-react";

export default function Services() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } }
  };

  return (
    <div className="pt-40 pb-32 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter">
          Our Premium Services
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
          {companyName} offers a wide range of professional solutions tailored to meet your exact needs.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          { icon: <PenTool size={28} />, title: "Installation & Setup", desc: "Expert deployment from day one.", span: "md:col-span-2 lg:col-span-2" },
          { icon: <Wrench size={28} />, title: "Maintenance", desc: "Keep things running smoothly.", span: "col-span-1" },
          { icon: <Zap size={28} />, title: "Emergency Repairs", desc: "Fast fixes when you need them most.", span: "col-span-1" },
          { icon: <Clock size={28} />, title: "24/7 Support", desc: "Always here for you.", span: "md:col-span-2 lg:col-span-2" },
          { icon: <Settings size={28} />, title: "Custom Solutions", desc: "Tailored exactly to your unique requirements.", span: "md:col-span-3 lg:col-span-3" }
        ].map((service, i) => (
          <motion.div 
            key={i}
            variants={item}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`p-10 rounded-[2rem] border shadow-inner flex flex-col justify-between min-h-[250px] overflow-hidden relative group backdrop-blur-md ${service.span} ${service.highlight ? 'bg-gradient-to-br from-emerald-600 to-teal-800 border-emerald-500/30' : 'bg-slate-900/50 border-white/5 hover:bg-slate-900/80'}`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${service.highlight ? 'bg-white/10' : 'bg-gradient-to-br from-emerald-500/10 to-transparent'}`} />
            
            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 relative z-10 border ${service.highlight ? 'bg-white/20 border-white/30 text-white' : 'bg-white/5 border-white/10 text-emerald-400 group-hover:border-emerald-500/30'} transition-colors duration-300`}>
              {service.icon}
            </div>
            <div className="relative z-10">
              <h3 className={`text-3xl font-bold mb-4 tracking-tight ${service.highlight ? 'text-white' : 'text-white'}`}>{service.title}</h3>
              <p className={`mb-8 text-xl font-light ${service.highlight ? 'text-emerald-50/90' : 'text-slate-400'}`}>{service.desc}</p>
              <ul className="space-y-4">
                {[1, 2].map((_, j) => (
                  <li key={j} className="flex items-center gap-4 opacity-90">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${service.highlight ? 'bg-white/20' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-slate-200">Premium execution</span>
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
