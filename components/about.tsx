"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Gamepad2, Music } from "lucide-react"

const interests = [
  { icon: Code, name: "Coding", color: "text-blue-400" },
  { icon: Coffee, name: "Coffee", color: "text-amber-400" },
  { icon: Gamepad2, name: "Gaming", color: "text-green-400" },
  { icon: Music, name: "Music", color: "text-pink-400" },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                Hey there! I'm <span className="text-purple-400 font-semibold">Rachit Rawat</span>, a passionate
                Computer Science student who loves turning ideas into reality through code.
              </p>

              <p className="leading-relaxed">
                I'm currently pursuing my degree while diving deep into the world of software development. My journey in
                tech started with curiosity and has evolved into a genuine passion for creating innovative solutions
                that make a difference.
              </p>

              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                brainstorming the next big idea. I believe in continuous learning and pushing the boundaries of what's
                possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "20+", label: "Projects Completed" },
                { number: "3+", label: "Years Learning" },
                { number: "10+", label: "Technologies" },
                { number: "∞", label: "Cups of Coffee" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">What I Love</h3>
              <div className="grid grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                  >
                    <interest.icon className={`w-8 h-8 mb-2 ${interest.color}`} />
                    <span className="text-sm font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20"
            >
              <blockquote className="text-center">
                <p className="text-lg italic text-gray-300 mb-4">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <footer className="text-purple-400 font-medium">- Cory House</footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
