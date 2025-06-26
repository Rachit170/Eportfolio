"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and achievements
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center"
          >
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={32} className="text-indigo-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Download My Resume</h3>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Detailed information about my education, technical skills, projects, and experience. Updated regularly to
              reflect my latest achievements and learning journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download="Rachit_Rawat_Resume.pdf">
                  <Download size={20} className="mr-2" />
                  Download PDF
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye size={20} className="mr-2" />
                  Preview Online
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">3+</div>
                  <div className="text-sm text-slate-600">Years Learning</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">15+</div>
                  <div className="text-sm text-slate-600">Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">10+</div>
                  <div className="text-sm text-slate-600">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
