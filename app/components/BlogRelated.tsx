import Link from "next/link"
import Image from "next/image"

const relatedPosts = [
  {
    id: 1,
    title: "Orchestrating ML Pipelines with Airflow and Kubeflow",
    excerpt: "Combining Airflow and Kubeflow for end-to-end ML workflow orchestration.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "orchestrating-ml-pipelines-with-airflow-and-kubeflow",
  },
  {
    id: 2,
    title: "Implementing Data Contracts for Reliable Data Pipelines",
    excerpt: "How data contracts can improve reliability and governance in data pipelines.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "implementing-data-contracts-for-reliable-data-pipelines",
  },
  {
    id: 3,
    title: "Monitoring Data Pipelines: Beyond Basic Metrics",
    excerpt: "Advanced monitoring strategies for enterprise-grade data pipelines.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "monitoring-data-pipelines-beyond-basic-metrics",
  },
]

export default function BlogRelated() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
