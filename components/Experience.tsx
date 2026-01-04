'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Yuga Yatra Retail (OPC) pvt. ltd.',
      location: 'Remote',
      period: '29 Dec 2025 - 28 Feb 2026',
      description: 'Working as a Software Engineering Intern, contributing to real-world projects and gaining industry experience.',
      responsibilities: [
        'Developing websites/apps using cutting-edge tools like Cursor AI and Firebase Studio',
        'Exploring AI technologies and their real-world applications',
        'Working on live freelancing projects through Upwork',
        'Managing seller portals on Amazon and Flipkart',
        'Collaborating with teams using Google Workspace',
        'Creating designs with Canva',
      ],
      technologies: ['React', 'JavaScript', 'Python', 'Git', 'GitHub'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-shiny-blue/20 to-gradient-blue-start/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gradient-blue-end/20 to-shiny-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work experience and the roles I have taken in various organizations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-blue-start to-gradient-blue-end transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8 md:text-right'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-light-blue rounded-full border-4 border-card-bg transform -translate-x-1/2 -translate-y-1 top-6 z-10`}>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-light-blue rounded-full opacity-50"
                  />
                </div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
                    className="bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg p-6 card-hover border border-gradient-blue-start/50 shadow-xl shadow-gradient-blue-start/20 hover:shadow-cyan-400/50 transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-light-blue/10 p-3 rounded-lg"
                      >
                        <FaBriefcase className="text-light-blue text-2xl" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-light-blue text-lg font-semibold mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-light-blue" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-light-blue" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-light-blue font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: respIndex * 0.1 }}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-light-blue mr-2 mt-1">▹</span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className="bg-gradient-to-r from-shiny-blue/50 to-gradient-blue-start/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gradient-blue-start/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

