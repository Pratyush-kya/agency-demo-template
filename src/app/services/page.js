"use client";
import { motion } from "framer-motion";
import { Check, Settings, Tool, Wrench, Zap, Clock } from "lucide-react";

export default function Services() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-6"
        >
          Our Premium Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          {companyName} offers a wide range of professional solutions tailored to meet your exact needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Tool />, title: "Installation & Setup", span: "md:col-span-2 lg:col-span-2" },
          { icon: <Wrench />, title: "Maintenance", span: "col-span-1" },
          { icon: <Zap />, title: "Emergency Repairs", span: "col-span-1" },
          { icon: <Clock />, title: "24/7 Support", span: "md:col-span-2 lg:col-span-2 bg-blue-600 text-white border-transparent" },
          { icon: <Settings />, title: "Custom Solutions", span: "md:col-span-3 lg:col-span-3" }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between min-h-[200px] ${service.span} ${service.title === '24/7 Support' ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${service.title === '24/7 Support' ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {[1, 2].map((_, j) => (
                  <li key={j} className="flex items-center gap-2 opacity-80">
                    <Check size={16} /> Premium execution
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
