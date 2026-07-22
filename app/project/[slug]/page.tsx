import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <div className="space-y-8 animate-fade-in">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-16 aspect-video relative rounded-xl overflow-hidden bg-muted animate-fade-in-delay-1">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-16 prose prose-lg dark:prose-invert max-w-3xl animate-fade-in-delay-2">
          <h2>Overview</h2>
          <p>{project.longDescription}</p>
          
          {/* Add more generic sections that can be filled in later */}
          <h2>The Challenge</h2>
          <p>This section is a placeholder for detailing the specific problems, user needs, or business challenges that prompted this project. Elaborate on what needed to be solved and why it was important.</p>

          <h2>My Role & Process</h2>
          <p>This section is a placeholder for explaining your role in the project and the methodologies you used. Discuss your research process, ideation, wireframing, testing, and final high-fidelity designs.</p>

          <h2>The Outcome</h2>
          <p>This section is a placeholder for the final results. Highlight any key metrics, positive user feedback, or successful business outcomes that resulted from your design solutions.</p>
        </div>
      </div>
    </main>
  )
}
