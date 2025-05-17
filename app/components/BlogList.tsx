"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Data Pipelines with Apache Airflow",
    excerpt:
      "Learn how to design and implement scalable data pipelines using Apache Airflow for enterprise-grade data orchestration.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    readTime: "12 min read",
    category: "Data Engineering",
    slug: "building-scalable-data-pipelines-with-apache-airflow",
  },
  {
    id: 2,
    title: "Data Mesh Architecture: Decentralized Data Ownership",
    excerpt:
      "Explore how data mesh architecture can transform your organization's approach to data management and governance.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 22, 2023",
    readTime: "10 min read",
    category: "Data Architecture",
    slug: "data-mesh-architecture-decentralized-data-ownership",
  },
  {
    id: 3,
    title: "Real-time Analytics with Apache Kafka and ksqlDB",
    excerpt:
      "Implement real-time analytics solutions using Apache Kafka and ksqlDB to process streaming data at scale.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 8, 2023",
    readTime: "15 min read",
    category: "Streaming Analytics",
    slug: "real-time-analytics-with-apache-kafka-and-ksqldb",
  },
  {
    id: 4,
    title: "Data Quality Monitoring in Modern Data Platforms",
    excerpt: "Strategies and tools for implementing robust data quality monitoring in your enterprise data platform.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 3, 2023",
    readTime: "8 min read",
    category: "Data Governance",
    slug: "data-quality-monitoring-in-modern-data-platforms",
  },
  {
    id: 5,
    title: "Optimizing Spark Performance for Large-Scale Data Processing",
    excerpt: "Advanced techniques for tuning Apache Spark to handle terabyte-scale data processing efficiently.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 12, 2023",
    readTime: "14 min read",
    category: "Big Data",
    slug: "optimizing-spark-performance-for-large-scale-data-processing",
  },
  {
    id: 6,
    title: "Building a Modern Data Stack with Open Source Technologies",
    excerpt:
      "A comprehensive guide to assembling a modern data stack using open source technologies for enterprise needs.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 5, 2023",
    readTime: "18 min read",
    category: "Data Platforms",
    slug: "building-a-modern-data-stack-with-open-source-technologies",
  },
]

export default function BlogList() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, visiblePosts).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {visiblePosts < blogPosts.length && (
        <div className="flex justify-center mt-12">
          <Button onClick={loadMore} variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Load More Articles
          </Button>
        </div>
      )}
    </section>
  )
}
