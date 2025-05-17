"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Data Lake Modernization",
    client: "Fortune 500 Financial Services Company",
    description:
      "Transformed a legacy data warehouse into a modern, cloud-based data lake architecture, reducing operational costs by 40% and enabling real-time analytics capabilities.",
    technologies: ["Apache Spark", "Databricks", "Delta Lake", "AWS S3", "Airflow"],
    results: [
      "40% reduction in operational costs",
      "95% faster data processing",
      "Enabled real-time analytics capabilities",
      "Improved data governance and security",
    ],
  },
  {
    id: 2,
    title: "Real-time Data Streaming Platform",
    client: "Global Retail Corporation",
    description:
      "Designed and implemented a real-time data streaming platform to process millions of transactions per minute, enabling instant inventory management and personalized customer experiences.",
    technologies: ["Apache Kafka", "Kubernetes", "Flink", "Elasticsearch", "Google Cloud"],
    results: [
      "Processing of 3M+ events per minute",
      "Near real-time inventory updates across 2,000+ stores",
      "60% increase in personalization effectiveness",
      "Reduced data latency from hours to seconds",
    ],
  },
  {
    id: 3,
    title: "ML-Powered Predictive Analytics",
    client: "Healthcare Provider Network",
    description:
      "Developed a machine learning platform for predicting patient readmission risks, optimizing resource allocation and improving patient outcomes while ensuring HIPAA compliance.",
    technologies: ["TensorFlow", "Kubernetes", "Snowflake", "dbt", "Azure"],
    results: [
      "22% reduction in preventable readmissions",
      "15% improvement in resource allocation efficiency",
      "Fully HIPAA-compliant data processing",
      "$4.2M annual cost savings",
    ],
  },
]

export default function CaseStudies() {
  const [currentCase, setCurrentCase] = useState(0)

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world examples of how we've helped enterprises transform their data capabilities
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  {caseStudies[currentCase].client}
                </span>
                <h3 className="text-2xl font-bold mb-4">{caseStudies[currentCase].title}</h3>
                <p className="text-muted-foreground mb-6">{caseStudies[currentCase].description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[currentCase].technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-background rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {caseStudies[currentCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="p-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors"
                  onClick={prevCase}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-sm text-muted-foreground">
                  {currentCase + 1} of {caseStudies.length}
                </div>
                <button
                  className="p-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors"
                  onClick={nextCase}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
