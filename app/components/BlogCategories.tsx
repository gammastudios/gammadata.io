"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Articles" },
  { id: "data-engineering", name: "Data Engineering" },
  { id: "data-architecture", name: "Data Architecture" },
  { id: "big-data", name: "Big Data" },
  { id: "streaming", name: "Streaming Analytics" },
  { id: "machine-learning", name: "Machine Learning" },
  { id: "data-governance", name: "Data Governance" },
]

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-4 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className={
              activeCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "border-border/60 hover:bg-primary/10 hover:text-primary"
            }
          >
            {category.name}
          </Button>
        ))}
      </motion.div>
    </section>
  )
}
