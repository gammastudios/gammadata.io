"use client"

import { motion } from "framer-motion"
import { Database, LineChart, Code, Server, Workflow, Layers } from "lucide-react"

const services = [
  {
    icon: <Database className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Platform Engineering",
    description:
      "Building scalable, resilient data platforms using modern open source technologies for enterprise-grade performance.",
  },
  {
    icon: <LineChart className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Analytics & ML",
    description:
      "Implementing advanced analytics and machine learning solutions to extract actionable insights from your data.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Engineering",
    description: "Designing and implementing robust data pipelines for efficient data processing and transformation.",
  },
  {
    icon: <Server className="w-12 h-12 mb-4 text-primary" />,
    title: "Cloud Data Infrastructure",
    description: "Architecting cloud-native data solutions optimized for performance, security, and cost-efficiency.",
  },
  {
    icon: <Workflow className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Governance",
    description:
      "Establishing comprehensive data governance frameworks to ensure data quality, security, and compliance.",
  },
  {
    icon: <Layers className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Strategy Consulting",
    description: "Developing strategic roadmaps to help enterprises leverage data as a competitive advantage.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
