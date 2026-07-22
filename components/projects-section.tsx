"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Case Studies & Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-[3/2]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/project/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
