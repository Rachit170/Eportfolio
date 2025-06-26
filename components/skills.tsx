"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
      { name: "Python", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", level: 70, color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 60, color: "from-yellow-500 to-orange-500" },
      { name: "Figma", level: 75, color: "from-purple-400 to-purple-600" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Technologies I love working with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-purple-400">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="mt-16 relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {["⚛️", "🔥", "⚡", "🚀", "💎", "🎯", "🌟", "✨"].map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="text-4xl mx-4 hover:scale-125 transition-transform cursor-pointer"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
