'use client';

import { motion } from "framer-motion";
import { Mail, Github, Send, Zap, Linkedin } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    url: "https://github.com/nenosaj", 
    username: "@Nenosaj",
    color: "from-gray-500 to-gray-600"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    url: "https://www.linkedin.com/in/daohog-jason1/", 
    username: "in/daohog-jason1",
    color: "from-blue-600 to-blue-700"
  },
  { 
    icon: Mail, 
    label: "Email", 
    url: "mailto:daohog.jason1@gmail.com", 
    username: "daohog.jason1@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Let's Connect</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">Get in</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Touch 📬
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project idea? Want to collaborate? Or just want to chat about tech, 
            Raspberry Pi, or writing? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-2">
                <span>✉️</span> Send Me a Message
              </h2>
              <p className="text-slate-400 mb-8">
                Fill out the form below and I'll get back to you soon!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-medium"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-medium"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 font-bold">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none font-medium"
                    placeholder="Tell me what's on your mind..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Send Message 🚀</span>
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6">
              <h3 className="text-xl font-black text-white mb-6">🌐 Connect With Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all group"
                    >
                      <div className={`p-2.5 bg-gradient-to-br ${link.color} rounded-xl`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold group-hover:text-blue-400 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-sm text-slate-500">{link.username}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Info Card */}
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-3xl backdrop-blur-sm">
              <h3 className="text-white font-black mb-3 flex items-center gap-2">
                <span>💡</span> Let's Talk About
              </h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Raspberry Pi projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Computer architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Creative writing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Tech collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Anything interesting!</span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-3xl backdrop-blur-sm text-center">
              <div className="relative w-4 h-4 bg-green-400 rounded-full mx-auto mb-3">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className="text-white font-black mb-2">🟢 Open to Connect</div>
              <div className="text-sm text-slate-300">
                Always happy to chat and collaborate!
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl text-center"
        >
          <p className="text-xl text-slate-300 italic">
            "The best conversations start with hello. Let's have ours!" 👋
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
