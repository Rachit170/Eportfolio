"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400">© 2024 Rachit Rawat. Built with passion ☕</p>
        </motion.div>
      </div>
    </footer>
  )
}
