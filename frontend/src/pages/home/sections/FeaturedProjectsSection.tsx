import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { projectData, Project } from '../../projects/data/project-data'
import { Link } from '@tanstack/react-router'

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to="/projects"
      className="group block bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition-colors duration-200"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnailUrl}
          alt={`${project.title} project thumbnail`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-neutral-400 uppercase tracking-wide mb-2">
          Since {project.startYear}
        </div>
        <h3
          className="text-xl font-semibold text-white mb-3 leading-tight"
          dangerouslySetInnerHTML={{ __html: project.title }}
        />
        <p className="text-sm text-neutral-300 line-clamp-2">
          {project.subtitle
            .replace(/<[^>]*>/g, '')
            .replace(/&[^;]+;/g, ' ')
            .trim()
            .substring(0, 120)}
          {project.subtitle.replace(/<[^>]*>/g, '').length > 120 && '...'}
        </p>
      </div>
    </Link>
  )
}

export const FeaturedProjectsSection = () => {
  const featuredProjectTitles = [
    '<strong>ChemPOV</strong>',
    '<strong>NuPOV</strong>',
    '<strong>VR</strong> Crime Scene',
    "<strong>Lightboard</strong> for better student's engagement",
  ]

  const featuredProjects = projectData
    .filter((project) =>
      featuredProjectTitles.some((title) =>
        project.title.includes(title.replace(/<[^>]*>/g, '')),
      ),
    )
    .slice(0, 4)

  return (
    <FullScreenHeaderOnlySection
      header={'Our Projects'}
      align_header={'center'}
      variant={'dark'}
      width="wide"
      height="fit-content"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center text-lg font-medium text-neutral-200 hover:text-white transition-colors duration-200"
        >
          View all projects
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </FullScreenHeaderOnlySection>
  )
}
