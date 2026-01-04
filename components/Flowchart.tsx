'use client'

import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaCode, FaProjectDiagram, FaCertificate, FaBriefcase } from 'react-icons/fa'

export default function Flowchart() {
  const nodes = [
    { id: 'start', label: 'Shalini B', icon: FaUser, color: 'from-light-blue to-blue-400' },
    { id: 'education', label: 'Education', icon: FaGraduationCap, color: 'from-blue-500 to-blue-600' },
    { id: 'skills', label: 'Skills', icon: FaCode, color: 'from-blue-600 to-blue-700' },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, color: 'from-blue-700 to-blue-800' },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate, color: 'from-blue-800 to-blue-900' },
    { id: 'goal', label: 'Internship Goal', icon: FaBriefcase, color: 'from-light-blue to-green-400' },
  ]

  const connections = [
    { from: 'start', to: 'education' },
    { from: 'education', to: 'skills' },
    { from: 'skills', to: 'projects' },
    { from: 'projects', to: 'certifications' },
    { from: 'certifications', to: 'goal' },
  ]

  return (
    <section id="flowchart" className="py-20 px-4 bg-dark-blue overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Resume Flowchart</span>
          </h2>
          <p className="text-gray-400">Visual representation of my professional journey</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Flowchart */}
          <div className="hidden lg:block">
            <div className="flex flex-col items-center space-y-8">
              {nodes.map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={node.id} className="relative w-full flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      className={`relative bg-gradient-to-br ${node.color} rounded-lg p-6 w-64 shadow-2xl border-2 border-light-blue/30`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <Icon className="text-white text-4xl mb-3" />
                        <h3 className="text-xl font-bold text-white">{node.label}</h3>
                      </div>
                      {index < nodes.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: 40 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1 bg-gradient-to-b from-light-blue to-transparent"
                        />
                      )}
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Flowchart */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {nodes.map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={node.id} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br ${node.color} rounded-lg p-4 shadow-xl border-2 border-light-blue/30`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="text-white text-3xl" />
                        <h3 className="text-lg font-bold text-white">{node.label}</h3>
                      </div>
                    </motion.div>
                    {index < nodes.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="absolute bottom-0 left-8 transform -translate-y-full w-1 bg-gradient-to-b from-light-blue to-transparent"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



