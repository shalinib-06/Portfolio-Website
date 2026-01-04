'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to MongoDB API
      const mongoResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const mongoData = await mongoResponse.json()

      if (!mongoResponse.ok) {
        throw new Error(mongoData.error || 'Failed to submit form to database')
      }

      // Send email via EmailJS
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't throw error for email failure, just log it
        // The form submission to database was successful
      }

      setIsSubmitting(false)
      setShowSuccessMessage(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    } catch (error) {
      console.error('Form submission failed:', error)
      setIsSubmitting(false)
      setShowErrorMessage(true)

      // Auto hide error message after 5 seconds
      setTimeout(() => {
        setShowErrorMessage(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-shiny-blue/20 to-gradient-blue-start/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'd love to hear from you—reach out for any opportunities or questions!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:shalinibalaji0611@gmail.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg border border-gradient-blue-start/50 hover:border-light-blue transition-colors group shadow-lg shadow-gradient-blue-start/10 hover:shadow-[0_12px_30px_rgba(79,210,255,0.18)] transition-shadow duration-300"
              >
                <div className="bg-light-blue/10 p-3 rounded-lg group-hover:bg-light-blue/20 transition-colors">
                  <FaEnvelope className="text-light-blue text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">shalinibalaji0611@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+91xxxxxxxxxx"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg border border-gradient-blue-start/50 hover:border-light-blue transition-colors group shadow-lg shadow-gradient-blue-start/10 hover:shadow-[0_12px_30px_rgba(79,210,255,0.18)] transition-shadow duration-300"
              >
                <div className="bg-light-blue/10 p-3 rounded-lg group-hover:bg-light-blue/20 transition-colors">
                  <FaPhone className="text-light-blue text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 90439 33854</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Vellore%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg border border-gradient-blue-start/50 hover:border-light-blue transition-colors group shadow-lg shadow-gradient-blue-start/10 hover:shadow-[0_12px_30px_rgba(79,210,255,0.18)] transition-shadow duration-300"
              >
                <div className="bg-light-blue/10 p-3 rounded-lg group-hover:bg-light-blue/20 transition-colors">
                  <FaMapMarkerAlt className="text-light-blue text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Vellore, India</p>
                </div>
              </motion.a>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://linkedin.com/in/shalinibalaji"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-card-bg p-4 rounded-lg border border-accent-blue hover:border-light-blue transition-colors hover:shadow-[0_8px_20px_rgba(79,210,255,0.18)] transition-shadow duration-300"
              >
                <FaLinkedin className="text-light-blue text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com/shalinib-06"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-card-bg p-4 rounded-lg border border-accent-blue hover:border-light-blue transition-colors hover:shadow-[0_8px_20px_rgba(79,210,255,0.18)] transition-shadow duration-300"
              >
                <FaGithub className="text-light-blue text-2xl" />
              </motion.a>
              <motion.a
                href="https://x.com/shalinib_06"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-card-bg p-4 rounded-lg border border-accent-blue hover:border-light-blue transition-colors hover:shadow-[0_8px_20px_rgba(79,210,255,0.18)] transition-shadow duration-300 flex items-center justify-center"
              >
                <FaXTwitter className="text-light-blue text-2xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg p-8 border border-gradient-blue-start/50 shadow-xl shadow-gradient-blue-start/20 hover:shadow-[0_20px_40px_rgba(79,210,255,0.14)] transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Connect With Me <span className="text-light-blue"></span>
                </h3>
                <p className="text-gray-400 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-black border border-gradient-blue-start/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-light-blue transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-black border border-gradient-blue-start/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-light-blue transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-black border border-gradient-blue-start/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-light-blue transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-darker-blue border border-accent-blue rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-light-blue transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-light-blue to-accent-blue text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-light-blue/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Sliding Success Message */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-4 right-4 z-50 max-w-sm"
          >
            <div className="bg-gradient-to-r from-light-blue to-accent-blue rounded-lg p-4 shadow-2xl border border-light-blue/50">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="bg-white/20 p-2 rounded-full"
                >
                  <FaCheckCircle className="text-white text-xl" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Message Sent!</h4>
                  <p className="text-white/90 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowSuccessMessage(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Error Message */}
      <AnimatePresence>
        {showErrorMessage && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-4 right-4 z-50 max-w-sm"
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 shadow-2xl border border-red-400/50">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="bg-white/20 p-2 rounded-full"
                >
                  <FaExclamationTriangle className="text-white text-xl" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Message Failed</h4>
                  <p className="text-white/90 text-sm">Something went wrong. Please try again.</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowErrorMessage(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

