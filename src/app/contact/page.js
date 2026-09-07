"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Business";

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-5xl font-extrabold mb-6">Let's work together.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Contact {companyName} today for a free quote. Our team of experts is ready to help you with your next project.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <span className="font-medium">hello@{companyName.toLowerCase().replace(/[^a-z]/g, '')}.com</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <span className="font-medium">Local Service Area</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?" />
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
