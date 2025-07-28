/**
 * Component Summary: Footer component with social media links and navigation
 * Props: None
 * Usage: Used as site-wide footer component
 */
import { FacebookIcon, Github, Instagram, X } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-3 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Logo */}
          <div className="text-white text-2xl font-bold">MUSINSAWAGON</div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Resources
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="hover:text-white transition-colors"
            >
              <X size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <FacebookIcon size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 All Rights Reserved by Me</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
