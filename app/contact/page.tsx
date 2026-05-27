'use client';

import { motion } from "framer-motion";
import { Mail, Github, Send, Zap, Linkedin, Globe, CheckCircle2, AlertCircle, type LucideIcon } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// Import dynamic professional data
import contact from "@/data/contact.json";
import socials from "@/data/socials.json";

// Map technical icons to social nodes
const iconMapping: Record<string, { icon: LucideIcon; color: string }> = {
  github: { icon: Github, color: "from-gray-500 to-gray-600" },
  linkedin: { icon: Linkedin, color: "from-blue-600 to-blue-700" },
  globe: { icon: Globe, color: "from-teal-500 to-emerald-500" }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Build dynamic sidebar links from socials.json
  const dynamicSocialLinks = [
    ...socials.map((social) => ({
      label: social.name,
      url: social.url,
      username: social.url.replace(/^https?:\/\/(www\.)?/, ''), 
      icon: iconMapping[social.icon.toLowerCase()]?.icon || Globe,
      color: iconMapping[social.icon.toLowerCase()]?.color || "from-slate-500 to-slate-600"
    })),
    { 
      label: "Email", 
      url: `mailto:${contact.email}`, 
      username: contact.email,
      icon: Mail, 
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Securely pull credentials from .env.local[cite: 2]
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: contact.email, // Targeted to daohogjason1@gmail.com
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        // Reset status after 5 seconds to allow for new handshakes
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Link Protocol Failure:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Initiate Connection
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">Get in</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Touch 📬
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on cloud infrastructure, automated systems, 
            or full-stack engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- Technical Brief (Contact Form) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-[2.5rem] p-10">
              <h2 className="text-2xl font-black text-white mb-2">Establish Handshake</h2>
              <p className="text-slate-500 mb-8 text-sm">
                Transmit your project requirements via the secure link protocol.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-white focus:border-blue-500/50 transition-all outline-none"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-white focus:border-blue-500/50 transition-all outline-none"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Message </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-white focus:border-blue-500/50 transition-all outline-none resize-none"
                    placeholder="Hello"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 group disabled:opacity-50 ${
                    status === 'success' 
                      ? "bg-green-500 text-white" 
                      : status === 'error' 
                      ? "bg-red-500 text-white"
                      : "bg-white text-slate-950 hover:bg-blue-400"
                  }`}
                >
                  {isSubmitting ? (
                    <>Modulating Signal...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-4 h-4" /> Data Transmitted</>
                  ) : status === 'error' ? (
                    <><AlertCircle className="w-4 h-4" /> Link Failure</>
                  ) : (
                    <>Transmit Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* --- System Status & Social Nodes --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social Nodes */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-[2.5rem] p-8">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Social Nodes</h3>
              <div className="space-y-3">
                {dynamicSocialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-slate-950/30 border border-slate-800/50 rounded-2xl hover:border-slate-700 transition-all group"
                    >
                      <div className={`p-2 bg-gradient-to-br ${link.color} rounded-lg`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="text-white font-bold text-sm truncate">{link.label}</div>
                        <div className="text-[10px] text-slate-500 truncate">{link.username}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] text-center relative overflow-hidden group">
              <div className="relative w-3 h-3 bg-blue-400 rounded-full mx-auto mb-4">
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
              </div>
              <div className="text-xs font-black text-white uppercase tracking-widest mb-2">Availability</div>
              <div className="text-[11px] text-slate-400 leading-relaxed font-medium">
                {contact.availability}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- System Note --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 italic">
            &copy; 2026 Jason Daohog — Engineering high-fidelity systems from Cagayan de Oro.
          </p>
        </motion.div>
      </div>
    </div>
  );
}