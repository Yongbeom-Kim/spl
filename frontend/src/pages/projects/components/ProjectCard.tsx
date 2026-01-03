import { Project } from '../data/project-data'

interface ProjectCardProps {
  project: Project
  isReversed: boolean
}

export const ProjectCard = ({ project, isReversed }: ProjectCardProps) => {
  return (
    <article className="relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start odd:bg-neutral-50 bg-neutral-50/50 p-8 lg:p-12">
      <div className={isReversed ? 'lg:order-2' : ''}>
        <img
          src={project.thumbnailUrl}
          alt={`${project.title} project thumbnail`}
          className="w-full lg:w-[75%] mx-auto aspect-4/3 object-cover"
        />
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <div className="text-sm text-neutral-500 uppercase tracking-wide mb-3">
          Since {project.startYear}
        </div>

        <h3
          className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: project.title }}
        />

        <div
          className="text-base text-neutral-700 leading-relaxed prose prose-neutral max-w-none [&_p]:mb-3 [&_a]:text-accent-blue-600 [&_a]:font-medium [&_a]:hover:text-accent-blue-700 [&_a]:transition-colors [&_a]:duration-200 [&_a]:mb-2"
          dangerouslySetInnerHTML={{ __html: project.subtitle }}
        />
      </div>
    </article>
  )
}
