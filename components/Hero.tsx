'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaGraduationCap, FaRocket, FaUser, FaDownload } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background elements with dark blue glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-shiny-blue/20 to-gradient-blue-start/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gradient-blue-end/20 to-shiny-blue/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10 py-20">
        {/* Top Section - Name, Title, Profile Picture */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Shalini </span>
              <span className="text-gradient">B</span>
            </h1>
            <p className="text-xl lg:text-2xl text-light-blue mb-6">
              Software Engineering Student | AI/ML Enthusiast
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Hello! I'm a Software Engineering student with hands-on experience in building real-world projects. 
              Strong foundation in DSA, problem-solving, and a growing passion for AI/ML.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="mailto:shalinibalaji0611@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300 hover:text-light-blue transition-colors"
              >
                <FaEnvelope className="text-light-blue" />
                <span>shalinibalaji0611@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919043933854"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300 hover:text-light-blue transition-colors"
              >
                <FaPhone className="text-light-blue" />
                <span>+91 90439 33854</span>
              </motion.a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="/Shalini_B Resume.pdf"
                download="Shalini_B Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-light-blue to-accent-blue text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-light-blue/50 transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-light-blue text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:text-light-blue hover:text-cyan transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Picture on Right - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative order-1 lg:order-2 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-light-blue shadow-2xl shadow-light-blue/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 to-gradient-blue-start/20" />
              {/* Fallback with initials */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-shiny-blue to-card-bg z-0">
                <span className="text-6xl lg:text-9xl font-bold text-light-blue">SB</span>
              </div>
              {/* Profile image - will show if available */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/height sample.png"
                  alt="Shalini B"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (target.parentElement) {
                      target.parentElement.style.display = 'none'
                    }
                  }}
                />
              </div>
            </motion.div>
            {/* Animated rings */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-4 border-light-blue -z-10"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute inset-0 rounded-full border-2 border-light-blue/50 -z-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
