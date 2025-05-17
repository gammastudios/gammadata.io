import type { Metadata } from "next"
import BlogList from "../components/BlogList"
import BlogFeatured from "../components/BlogFeatured"
import BlogCategories from "../components/BlogCategories"
import BlogNewsletter from "../components/BlogNewsletter"

export const metadata: Metadata = {
  title: "Blog | Gamma Data",
  description: "Thought leadership and insights on data engineering, analytics, and modern data platforms",
}

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-20">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
              Gamma Data Blog
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Data Engineering Insights</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert perspectives on modern data platforms, engineering best practices, and industry trends
            </p>
          </div>

          <BlogFeatured />
          <BlogCategories />
          <BlogList />
          <BlogNewsletter />
        </div>
      </div>
    </div>
  )
}
