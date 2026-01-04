'use client'

import { motion } from 'framer-motion'
import { FaPython, FaJava, FaReact, FaGitAlt, FaGithub, FaDatabase, FaLinux } from 'react-icons/fa'
import { SiJavascript, SiCplusplus, SiMysql, SiFlask, SiPostman, SiFirebase, SiNodedotjs, SiNextdotjs, SiMongodb, SiScikitlearn, SiPandas, SiNumpy, SiVisualstudiocode, SiGooglecolab, SiOracle } from 'react-icons/si'
import { TbBrandFlutter } from 'react-icons/tb'

export default function Skills() {
  const skillIcons: { [key: string]: any } = {
    'Python': FaPython,
    'Java': FaJava,
    'C++': SiCplusplus,
    'JavaScript': SiJavascript,
    'SQL': FaDatabase,
    'React': FaReact,
    'Flutter (basics)': TbBrandFlutter,
    'MySQL': SiMysql,
    'PL/SQL': SiOracle,
    'Flask (basic)': SiFlask,
    'Node.js': SiNodedotjs,
    'Next.js': SiNextdotjs,
    'MongoDB': SiMongodb,
    'scikit-learn': SiScikitlearn,
    'Pandas': SiPandas,
    'NumPy': SiNumpy,
    'REST APIs': SiPostman,
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'VS Code': SiVisualstudiocode,
    'Google Colab': SiGooglecolab,
    'Linux (basics)':  FaLinux,
    'Postman': SiPostman,
    'Firebase': SiFirebase,
  }

  const skillCategories = [
    {
      title: 'Languages',
      icon: FaPython,
      skills: ['Python', 'Java', 'C++', 'JavaScript'],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MySQL', 'PL/SQL', 'MongoDB'],
    },
    {
      title: 'Frameworks/Libraries',
      icon: FaReact,
      skills: ['React', 'Next.js', 'Flutter (basics)', 'scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      title: 'Backend',
      icon: SiFlask,
      skills: ['Node.js','Flask (basic)', 'REST APIs'],
    },
    {
      title: 'Tools/Platforms',
      icon: FaGithub,
      skills: ['Firebase', 'Postman', 'Git', 'GitHub', 'VS Code', 'Google Colab', 'Linux (basics)', ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              className="bg-gradient-to-br from-card-bg to-shiny-blue/20 rounded-lg p-6 card-hover border border-gradient-blue-start/50 shadow-lg shadow-gradient-blue-start/10 hover:shadow-cyan-400/50 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon && (
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-light-blue/10 p-2 rounded-lg"
                  >
                    {(() => {
                      const Icon = category.icon
                      return <Icon className="text-light-blue text-xl" />
                    })()}
                  </motion.div>
                )}
                <h3 className="text-xl font-bold text-light-blue">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skillIcons[skill]
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-gradient-to-r from-shiny-blue/50 to-gradient-blue-start/50 px-3 py-2 rounded-full text-sm text-gray-300 cursor-default flex items-center gap-2 border border-gradient-blue-start/30"
                    >
                      {SkillIcon && <SkillIcon className="text-light-blue" />}
                      {skill}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



