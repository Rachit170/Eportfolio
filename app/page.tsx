"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Introduction from "@/components/introduction"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-50 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-12 h-12 border-3 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold text-slate-800"
          >
            Rachit Rawat
          </motion.h1>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Introduction />
        <Projects />
        <Resume />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
