import { Link } from '@tanstack/react-router'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { Project, useProjectListQuery } from '@/strapi/hooks/use-project-query'
import { ExternalLinkIcon } from 'lucide-react'

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to="/projects"
      hash={project.documentId}
      className="group block bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition-colors duration-200"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.Thumbnail[0].url}
          alt={`${project.Title} project thumbnail`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-neutral-400 uppercase tracking-wide mb-2">
          Since {project.StartYear}
        </div>
        <h3
          className="text-xl font-semibold text-white mb-3 leading-tight"
        >{project.Title}</h3>
        {/* <p className="text-sm text-neutral-300 line-clamp-2">
          {project.Summary}
        </p> */}
      </div>
    </Link>
  )
}

export const FeaturedProjectsSection = () => {
  const featuredProjectTitles = [
    '<ChemPOV',
    '<NuPOV',
    'VR',
    "Lightboard",
  ]

  const {data: featuredProjects} = useProjectListQuery({
    limit: 4,
    additionalFilters: [
      (project) =>
        featuredProjectTitles.some((title) =>
          project.Title.includes(title.replace(/<[^>]*>/g, '')),
        ),
    ],
  })

  if (!featuredProjects) {
    return <div></div>
  }

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
          <FeaturedProjectCard key={project.documentId} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-lg font-medium text-neutral-200 hover:text-white transition-colors duration-200"
        >
          View all projects
          <ExternalLinkIcon className='h-4' />
        </Link>
      </div>
    </FullScreenHeaderOnlySection>
  )
}
