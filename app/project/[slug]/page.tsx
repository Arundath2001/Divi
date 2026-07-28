import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import React from "react"

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

// Reusable Section component for consistent premium layout
function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="py-12 md:py-16 border-t border-muted/30 animate-fade-in-delay-2">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-4 md:sticky md:top-24">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
        </div>
        <div className="md:col-span-8 prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <div className="space-y-8 animate-fade-in max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Snapshot (if available) */}
        {project.snapshot && (
          <div className="mt-12 p-6 rounded-xl bg-muted/50 grid grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-delay-1">
            {project.snapshot.role && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Role</h3>
                <p>{project.snapshot.role}</p>
              </div>
            )}
            {project.snapshot.projectType && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Project Type</h3>
                <p>{project.snapshot.projectType}</p>
              </div>
            )}
            {project.snapshot.platform && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</h3>
                <p>{project.snapshot.platform}</p>
              </div>
            )}
            {project.snapshot.duration && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Duration</h3>
                <p>{project.snapshot.duration}</p>
              </div>
            )}
            {project.snapshot.tools && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Tools</h3>
                <p>{project.snapshot.tools}</p>
              </div>
            )}
            {project.snapshot.client && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</h3>
                <p>{project.snapshot.client}</p>
              </div>
            )}
            {project.snapshot.responsibilities && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Responsibilities</h3>
                <p>{project.snapshot.responsibilities}</p>
              </div>
            )}
            {project.snapshot.deliverables && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Deliverables</h3>
                <p>{project.snapshot.deliverables}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 mb-16 aspect-[16/9] relative rounded-2xl overflow-hidden bg-muted animate-fade-in-delay-1">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-0">
          <Section title="Overview">
            {project.overview ? (
              <p className="whitespace-pre-wrap">{project.overview}</p>
            ) : (
              <p>{project.longDescription}</p>
            )}
          </Section>

          {project.problemStatement && (
            <Section title="Problem Statement">
              <p className="whitespace-pre-wrap">{project.problemStatement.text}</p>
              {project.problemStatement.points && project.problemStatement.points.length > 0 && (
                <ul className="mt-4">
                  {project.problemStatement.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {project.goals && project.goals.length > 0 && (
            <Section title="Project Goals">
              <ul>
                {project.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.roleDetails && (
            <Section title="My Role">
              <p className="whitespace-pre-wrap">{project.roleDetails.text}</p>
              {project.roleDetails.points && project.roleDetails.points.length > 0 && (
                <ul className="mt-4">
                  {project.roleDetails.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {project.targetUsers && project.targetUsers.length > 0 && (
            <Section title="Target Users">
              <ul>
                {project.targetUsers.map((user, index) => (
                  <li key={index}>{user}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.userResearch && (
            <Section title="User Research">
              <p className="whitespace-pre-wrap">{project.userResearch.text}</p>
              {project.userResearch.points && project.userResearch.points.length > 0 && (
                <ul className="mt-4">
                  {project.userResearch.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {project.userPainPoints && project.userPainPoints.length > 0 && (
            <Section title="User Pain Points">
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-muted">
                      <th className="text-left py-4 px-4 font-semibold">Problem</th>
                      <th className="text-left py-4 px-4 font-semibold">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.userPainPoints.map((item, index) => (
                      <tr key={index} className="border-b border-muted/50 last:border-0">
                        <td className="py-4 px-4">{item.problem}</td>
                        <td className="py-4 px-4">{item.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          )}

          {project.userFlow && (
            <Section title="User Flow">
              <div className="flex flex-wrap items-center gap-y-4 gap-x-3 mt-6">
                {project.userFlow.split('→').map((step, index, array) => (
                  <React.Fragment key={index}>
                    <div className="px-5 py-2.5 bg-background border border-border/80 rounded-full text-sm font-medium text-muted-foreground shadow-sm flex items-center justify-center text-center">
                      {step.trim()}
                    </div>
                    {index < array.length - 1 && (
                      <div className="text-muted-foreground/30 shrink-0 px-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Section>
          )}

          {project.informationArchitecture && project.informationArchitecture.length > 0 && (
            <Section title="Information Architecture">
              <div className="mt-6 bg-card border border-border/40 rounded-[24px] p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  
                  {/* Root Node */}
                  <div className="flex items-center gap-4 md:w-1/4 shrink-0">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Root Level</div>
                      <h4 className="text-lg font-bold text-foreground">
                        {project.informationArchitecture[0]}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Divider line for desktop */}
                  <div className="hidden md:block w-[1px] self-stretch bg-border/60"></div>
                  
                  {/* Children Nodes */}
                  <div className="flex-1 w-full pt-2 md:pt-0">
                    <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-4">Pages & Sections</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.informationArchitecture.slice(1).map((item, index) => {
                        const cleanItem = item.replace(/^[├└]──\s*/, '').trim();
                        return (
                          <div key={index} className="px-4 py-3 bg-background border border-border/60 rounded-xl text-[13.5px] font-medium text-muted-foreground flex items-center gap-3 hover:border-border hover:text-foreground transition-all">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                             <span className="truncate">{cleanItem}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                </div>
              </div>
            </Section>
          )}

          {project.wireframes && (
            <Section title="Wireframes & Evolution">
              <p className="whitespace-pre-wrap">{project.wireframes}</p>
            </Section>
          )}

          {project.designSystem && project.designSystem.length > 0 && (
            <Section title="Design System">
              <div className="flex flex-wrap gap-3">
                {project.designSystem.map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-muted/50 rounded-lg text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <Section title="Key Features">
              <ul>
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.accessibility && project.accessibility.length > 0 && (
            <Section title="Accessibility">
              <ul>
                {project.accessibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.designConsiderations && project.designConsiderations.length > 0 && (
            <Section title="Design Considerations">
              <ul>
                {project.designConsiderations.map((consideration, index) => (
                  <li key={index}>{consideration}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <Section title="Challenges">
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.outcome && (
            <Section title="Design Outcome">
              <p className="whitespace-pre-wrap">{project.outcome}</p>
            </Section>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <Section title="Learnings">
              <ul>
                {project.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </Section>
          )}

          {!project.overview && !project.problemStatement && (
            <>
              <Section title="The Challenge">
                <p>This section is a placeholder for detailing the specific problems, user needs, or business challenges that prompted this project. Elaborate on what needed to be solved and why it was important.</p>
              </Section>
    
              <Section title="My Role & Process">
                <p>This section is a placeholder for explaining your role in the project and the methodologies you used. Discuss your research process, ideation, wireframing, testing, and final high-fidelity designs.</p>
              </Section>
    
              <Section title="The Outcome">
                <p>This section is a placeholder for the final results. Highlight any key metrics, positive user feedback, or successful business outcomes that resulted from your design solutions.</p>
              </Section>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
