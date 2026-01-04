'use client'

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gradient-blue-start/50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Shalini B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}



