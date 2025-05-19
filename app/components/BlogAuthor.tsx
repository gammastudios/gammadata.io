import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function BlogAuthor() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
        <Image src="/placeholder.svg?height=200&width=200" alt="Dr. Sarah Chen" fill className="object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
        <p className="text-muted-foreground mb-2">Principal Data Engineer at Gamma Data</p>
        <p className="text-sm text-muted-foreground mb-3">
          Dr. Chen specializes in designing scalable data platforms and has over 15 years of experience in data
          engineering for financial services and healthcare organizations.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
