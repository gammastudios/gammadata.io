"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Only show the theme toggle once the component has mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Gamma Data</span>
            <div className="flex items-center">
              <Image 
                src="/favicon-32x32.png" 
                alt="Gamma Data Logo" 
                width={24} 
                height={24} 
                className="mr-2" 
              />
              <span className="text-xl font-bold text-primary">Gamma Data</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-x-12">
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#case-studies"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="dark-mode-toggle"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
