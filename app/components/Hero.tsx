"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-black min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-white-grid-pattern dark:bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/0 dark:from-black dark:via-black/80 dark:to-black/0" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          <motion.div
            className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Terminal size={16} />
            <span>Enterprise Data Solutions</span>
          </motion.div>

          <motion.div
            className="p-6 border border-primary/20 bg-gray-900/90 backdrop-blur-sm rounded-lg max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono">
              <p className="text-primary mb-2">Welcome to Gamma Data.</p>
              <p className="text-gray-400 mb-4">Data. Delivered to Production</p>
              <div className="flex items-start">
                <span className="text-primary mr-2">$</span>
                <span className="text-gray-300">
                  We are data professionals, delivering data platforms for large enterprises on the modern open source
                  data stack.
                  <span className="terminal-cursor align-middle ml-1"></span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#services" className="data-button">
              Our Services
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
