"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-slate-900"
              >
                Hi, I'm <span className="text-indigo-600">Rachit Rawat</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-600 font-medium"
              >
                Computer Science Student
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              Passionate computer science student with a love for creating innovative solutions and building meaningful
              digital experiences. Currently pursuing my degree while exploring the endless possibilities of technology
              and software development.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Rachit170",
                  label: "GitHub",
                  color: "hover:text-slate-900",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rachit-rawat-32b30b2b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcLGVgIwmSXufOhDWLl%2BTdg%3D%3D",
                  label: "LinkedIn",
                  color: "hover:text-blue-600",
                },
                { icon: Mail, href: "#contact", label: "Email", color: "hover:text-indigo-600" },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-white rounded-full shadow-md border border-slate-200 text-slate-600 ${color} transition-all duration-300`}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#projects">View My Projects</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download="Rachit_Rawat_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/profile.jpg"
                  alt="Rachit Rawat - Computer Science Student"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.currentTarget.src = "/placeholder.svg?height=320&width=320"
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>

              {/* Optional: Add a subtle animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-200 animate-pulse opacity-50"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-slate-500"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
