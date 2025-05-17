"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Gamma Data
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Data Professionals with Enterprise Focus</h3>
            <p className="text-gray-300 mb-6">
              At Gamma Data, we specialize in building enterprise-grade data platforms that leverage the power of modern
              open source technologies. Our team of experienced data engineers, architects, and scientists work with
              large organizations to transform their data capabilities.
            </p>
            <p className="text-gray-300 mb-6">
              We believe in the power of open source technologies to deliver flexible, scalable, and cost-effective data
              solutions that drive real business value. Our approach combines technical excellence with deep industry
              knowledge to help enterprises navigate the complex data landscape.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-background/20 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-primary mb-2">50+</h4>
                <p className="text-gray-400">Enterprise clients</p>
              </div>
              <div className="bg-background/20 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-primary mb-2">200+</h4>
                <p className="text-gray-400">Data projects delivered</p>
              </div>
              <div className="bg-background/20 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-primary mb-2">15+</h4>
                <p className="text-gray-400">Years of experience</p>
              </div>
              <div className="bg-background/20 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-primary mb-2">24/7</h4>
                <p className="text-gray-400">Enterprise support</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative h-96 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-black/80 rounded-lg transform -rotate-3 flex items-center justify-center p-8">
              <div className="font-mono text-sm text-gray-300 overflow-hidden">
                <div className="mb-2 text-primary"># Data platform architecture</div>
                <pre className="text-xs">
                  {`┌─────────────────────────────────────┐
│           Data Sources              │
│  (APIs, Databases, Streaming, etc)  │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│         Data Ingestion              │
│    (Kafka, Spark Streaming, etc)    │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│         Data Storage                │
│    (Data Lake, Data Warehouse)      │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│         Data Processing             │
│      (Spark, dbt, Airflow)          │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│         Data Consumption            │
│    (BI, ML, Applications)           │
└─────────────────────────────────────┘`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
