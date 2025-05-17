"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "Apache Spark",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Data Processing",
  },
  {
    name: "Apache Kafka",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Streaming",
  },
  {
    name: "Kubernetes",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Orchestration",
  },
  {
    name: "Airflow",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Workflow",
  },
  {
    name: "Snowflake",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Data Warehouse",
  },
  {
    name: "dbt",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Transformation",
  },
  {
    name: "TensorFlow",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Machine Learning",
  },
  {
    name: "PyTorch",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Machine Learning",
  },
  {
    name: "AWS",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Cloud",
  },
  {
    name: "Google Cloud",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Cloud",
  },
  {
    name: "Azure",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Cloud",
  },
  {
    name: "Databricks",
    logo: "/placeholder.svg?height=60&width=120",
    category: "Unified Analytics",
  },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Modern Open Source Data Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable data platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground text-center">{tech.name}</h3>
              <p className="text-xs text-muted-foreground text-center mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
