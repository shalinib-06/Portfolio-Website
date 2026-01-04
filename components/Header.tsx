'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm shadow-lg border-b border-gradient-blue-start/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            transition={{ rotate: { duration: 0.3 } }}
            className="text-2xl font-bold bg-gradient-to-r from-light-blue via-shiny-blue to-gradient-blue-end bg-clip-text text-transparent hover:from-white hover:via-light-blue hover:to-shiny-blue transition-all duration-300"
          >
            &lt;Shalini B/&gt;
          </motion.a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="group relative text-cyan-400 font-medium transition-colors duration-300 hover:text-light-blue"
              >
                {item.name}

                {/* Hover underline */}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-gradient-to-r from-cyan-400 to-sky-400
                    scale-x-0 origin-left
                    group-hover:scale-x-100
                    transition-transform duration-300 ease-out
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              href="https://linkedin.com/in/shalinibalaji"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.a
              href="https://github.com/shalinib-06"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-white transition-colors"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="mailto:shalinibalaji0611@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-white transition-colors"
            >
              <FaEnvelope size={22} />
            </motion.a>

            <motion.a
              href="https://x.com/shalinib_06"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-white transition-colors"
            >
              <FaXTwitter size={22} />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
