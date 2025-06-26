"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rachitrawat2004@gmail.com",
    href: "mailto:rachitrawat2004@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rachitrawat",
    href: "https://in.linkedin.com/in/rachit-rawat-32b30b2b1",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rachitrawat",
    href: "https://github.com/Rachit170",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "rachitrawat2004@gmail.com", // Your email
        },
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      )

      console.log("Email sent successfully:", result)
      setSubmitStatus("success")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Connect</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group"
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <info.icon size={20} className="text-indigo-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{info.label}</div>
                    <div className="text-slate-900 font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-slate-200 p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} className="text-red-600" />
                <p className="text-red-800">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
