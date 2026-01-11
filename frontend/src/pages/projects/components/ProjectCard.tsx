import { Project } from '@/strapi/hooks/use-project-query'
import {
  BlocksRenderer,
} from '@strapi/blocks-react-renderer'

interface ProjectCardProps {
  project: Project
  isReversed: boolean
}

export const ProjectCard = ({ project, isReversed }: ProjectCardProps) => {
  return (
    <article id={project.documentId} className="relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start odd:bg-neutral-50 bg-neutral-50/50 p-8 lg:p-12">
      <div className={isReversed ? 'lg:order-2' : ''}>
        <img
          src={project.Thumbnail[0].url}
          alt={`${project.Title} project thumbnail`}
          className="w-full lg:w-[75%] mx-auto aspect-4/3 object-cover bg-neutral-0"
        />
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <div className="text-sm text-neutral-500 uppercase tracking-wide mb-3">
          Since {project.StartYear}
        </div>

        <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 leading-tight">
          {project.Title}
        </h3>

        <div className="text-base text-neutral-700 leading-relaxed prose prose-neutral max-w-none">
          <BlocksRenderer
            content={project.Summary}
            blocks={{
              link: ({ url, children }) => (
                <a
                  href={url}
                  target="_blank"
                  className="text-accent-blue-600 font-medium hover:text-accent-blue-700 transition-colors duration-200"
                >
                  {children}
                </a>
              ),
              paragraph: ({ children }) => <p className="mb-3">{children}</p>,
            }}
          />
        </div>
      </div>
    </article>
  )
}
