"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    "UI/UX Design",
    "User Research",
    "Wireframing & Prototyping",
    "Design Systems",
    "Figma",
  ]

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
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate UI/UX designer dedicated to creating intuitive, user-centered digital products. My approach is rooted in empathy, focusing deeply on user needs to solve complex problems with elegant solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe great design is functional as well as beautiful. By bridging the gap between user goals and business objectives, I craft experiences that are both engaging and highly effective.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Skills & Services</h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-foreground justify-center md:justify-start p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  <span className="font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
