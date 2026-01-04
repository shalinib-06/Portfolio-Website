'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaArrowRight } from 'react-icons/fa'

export default function Certifications() {
  const certifications = [
    { name: 'Supervised Machine Learning - Coursera', link: 'https://coursera.org/verify/ABC123' },
    { name: 'SQL (Intermediate) Certificate - HackerRank', link: 'https://drive.google.com/file/d/1811P1WYQ4rBBEP8Vs5iDdPrLl2jw-_KM/view?usp=sharing' },
    { name: 'AI for everyone - DeepLearning.AI (Coursera)', link: 'https://drive.google.com/file/d/1bzkT7jyrKuloS5Y8hQzeDjVz4TJB8qz7/view?usp=sharing' },
    { name: 'Data Science Certificate - VIT University', link: 'https://drive.google.com/file/d/1RdwOV4q6_qppU28908Ians1I5UdTh93-/view?usp=sharing' },
    { name: 'Advanced topics in Graph theory - VIT University', link: 'https://drive.google.com/file/d/1bEOknUtzdgLQR8mrTNcjQCHCh9M2hI83/view?usp=sharing' },
    { name: 'Next-Gen Vision AI Bootcamp - VIT University', link: 'https://drive.google.com/file/d/17SwdE4OMgHNipi0xyB3AS951xRSCclEO/view?usp=sharing' },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 10 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              }}
              className="bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg p-6 border border-gradient-blue-start/50 shadow-lg shadow-gradient-blue-start/10 hover:shadow-cyan-300/30 hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4"
            >
              {/* Icon */}
              <div className="bg-light-blue/10 p-3 rounded-lg">
                <FaCertificate className="text-light-blue text-2xl" />
              </div>

              {/* Link with hover arrow */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-300 flex-1 hover:text-light-blue transition-colors duration-300 flex items-center gap-2"
              >
                <span>{cert.name}</span>

                <FaArrowRight
                  className="
                    text-light-blue text-sm
                    opacity-0 -translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300
                  "
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
