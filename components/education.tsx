"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Graphic Era Hill University",
    location: "Uttrakhand, India",
    period: "2022 - 2026 (Expected)",
    description:
      "Pursuing a comprehensive Computer Science degree with focus on software engineering, data structures, algorithms, and modern development practices.",
    achievements: [
      "Current CGPA: 7.9/10",
      "PwC's Launchpad Trainee",
      "Runner up - Inter-College Hackathon 2023",
    ],
    current: true,
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Kendriya Vidhalaya Old Cantt",
    location: "Uttar Pradesh, India",
    period: "2020 - 2022",
    description:
      "Completed higher secondary education with Science stream, specializing in Mathematics, Physics, and Computer Science.",
    achievements: [
      "Percentage: 76.4%",
      "National Olympiad Qualifier in Mathematics",
    ],
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">My academic journey and educational background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                {/* Current Status Badge */}
                {edu.current && (
                  <div className="absolute left-20 -top-2 md:left-24">
                    <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Currently Studying
                    </div>
                  </div>
                )}

                {/* Content Card */}
                <div className="md:ml-20 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-indigo-600" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-indigo-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-900 flex items-center gap-2 mb-3">
                      <Award size={16} className="text-indigo-600" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
