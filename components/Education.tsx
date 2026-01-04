'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Education() {
  const educations = [
    {
      title: 'Integrated M.Tech Software Engineering',
      institution: 'Vellore Institute of Technology',
      location: 'Vellore,Tamil Nadu, India',
      period: 'Aug 2023 – Jul 2028',
      grade: 'CGPA: 9.04/10',
      coursework: ['Data Structures', 'Algorithms', 'Computer Networks', 'Operating Systems', 'DBMS', 'AI', 'Blockchain'],
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Sri Narayani Vidyashram Sr. Sec School-CBSE',
      location: 'Vellore,Tamil Nadu, India',
      period: 'Apr 2022 – Mar 2023',
      grade: 'Percentage: 85.6%',
      coursework: ['Bio - Maths','Leadership','Team Management','Communication'],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-shiny-blue/20 to-gradient-blue-start/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-gradient-blue-end/20 to-shiny-blue/20 rounded-full blur-3xl" />
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
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and learnings.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-blue-start to-gradient-blue-end transform md:-translate-x-1/2" />

            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}
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
                        <FaGraduationCap className="text-light-blue text-2xl" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.title}</h3>
                        <p className="text-light-blue text-lg font-semibold mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-light-blue" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-light-blue" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-300">
                        <span className="font-semibold text-light-blue">{edu.grade}</span>
                      </p>
                    </div>

                    {edu.coursework.length > 0 && (
                      <div>
                        <h4 className="text-light-blue font-semibold mb-2">Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <motion.span
                              key={course}
                              whileHover={{ scale: 1.1 }}
                              className="bg-gradient-to-r from-shiny-blue/50 to-gradient-blue-start/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gradient-blue-start/30"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
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



