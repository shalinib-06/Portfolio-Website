'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'SurviveNet',
      description: 'A comprehensive network survival and security analysis tool built with modern web technologies.',
      features: [
        'Network security analysis and monitoring',
        'Real-time threat detection and alerts',
        'Interactive dashboard with data visualization',
        'Secure authentication and user management',
      ],
      technologies: ['Flutter','Firebase','Dart','API'],
      github: 'https://github.com/shalinib-06/SurviveNet',
      screenshot: '/survivenet-screenshot.png',
    },
    {
      title: 'Luxeeventco - Event Management Website',
      description: 'Designed and developed a modern, responsive event management website with a clean and professional UI.',
      features: [
        'Reusable React components for scalability and maintainability',
        'Interactive sections for services, events, and contact forms',
        'Mobile-first responsiveness across all screen sizes',
        'Deployed on Vercel for optimized performance',
      ],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
      github: 'https://github.com/shalinib-06/LuxeEvent-Co',
      screenshot: '/luxeeventco-screenshot.png',
    },
    {
      title: 'Data Analysis and Visualization of IMDb Movie Dataset',
      description: 'Performed comprehensive data analysis and built ML models on IMDb movie dataset.',
      features: [
        'Exploratory data analysis to study trends in genres, ratings, and movie characteristics',
        'Classification models to categorize movies based on genre features',
        'Regression techniques to predict IMDB ratings',
        'Clustering algorithms to group movies with similar patterns',
      ],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/shalinib-06/IMDb-Movie-Genre-and-Rating-analysis',
      screenshot: '/imdb-analysis-screenshot.png',
    },
    {
      title: 'Malware Guard',
      description: 'Built a web-based malware and phishing detection tool using the VirusTotal API.',
      features: [
        'Web-scanner supporting scanning of files (hashes), URLs, domains, IPs and reports',
        'Detailed engine-by-engine results',
        'Integrated phishing-detection heuristics (domain checks, WHOIS info, punycode, etc.)',
        'Real-time folder-monitor in Python (using watchdog + desktop notifications)',
      ],
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/shalinib-06/Malware-Analyser',
      screenshot: '/malware-guard-screenshot.png',
    },
    {
      title: 'Dynamic Multilevel Feedback Queue with Aging (DMFQ-A)',
      description: 'Advanced CPU scheduling algorithm implementation with aging mechanism.',
      features: [
        'Implements Round Robin, SRTF, and FCFS across multilevel queues',
        'Uses aging to prevent starvation and improve responsiveness',
        'Supports preemptive scheduling for improved system performance',
      ],
      technologies: ['Python'],
      github: 'https://github.com/shalinib-06/DMFQ-A',
      screenshot: '/dmfq-screenshot.png',
    },
    {
      title: 'BFS Pathfinding Visualizer',
      description: 'A Python implementation of the Breadth-First Search (BFS) algorithm with an interactive PyGame visualization in real time.',
      features: [
        'Interactive Grid Interface: Create custom mazes by placing obstacles',
        'Drag & Drop Controls: Easily reposition start and end points',
        'Real-time Visualization: Watch the algorithm explore paths step-by-step',
        'Color-coded Elements: Intuitive visual feedback for different node types',
        'Performance Controls: Adjustable animation speed',
        'Statistics Display: View path length and nodes explored',
      ],
      technologies: ['Python','PyGame'],
      github: 'https://github.com/shalinib-06/BFS-Visualization-Interface',
      screenshot: '/bfs-screenshot.png',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              className="bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg p-6 card-hover border border-gradient-blue-start/50 shadow-xl shadow-gradient-blue-start/20 hover:shadow-cyan-400/50 transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-light-blue/10 p-2 rounded-lg">
                    <FaCode className="text-light-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-light-blue hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              {project.screenshot && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4 rounded-lg overflow-hidden border border-gradient-blue-start/30"
                >
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      if (target.parentElement) {
                        target.parentElement.style.display = 'none'
                      }
                    }}
                  />
                </motion.div>
              )}
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                    <span className="text-light-blue mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-shiny-blue/50 to-gradient-blue-start/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gradient-blue-start/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shalinib-06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-fit bg-gradient-to-r from-light-blue to-accent-blue text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-light-blue/50 transition-all duration-300"
          >
          Other Basic Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
