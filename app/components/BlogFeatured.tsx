"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogFeatured() {
  return (
    <section className="py-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-black/50 rounded-xl overflow-hidden border border-border/40"
      >
        <div className="lg:col-span-3 order-2 lg:order-1 p-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Featured
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                Data Architecture
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              The Future of Data Platforms: Trends and Technologies Shaping Enterprise Data in 2023
            </h2>
            <p className="text-muted-foreground">
              An in-depth analysis of emerging trends and technologies that are transforming enterprise data platforms,
              including data mesh, real-time analytics, and AI-driven data operations.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime="2023-04-20">April 20, 2023</time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>20 min read</span>
              </div>
            </div>
            <Link
              href="/blog/future-of-data-platforms-trends-and-technologies"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2 h-64 lg:h-auto relative">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="The Future of Data Platforms"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
