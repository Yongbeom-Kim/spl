import { ProjectCard } from './ProjectCard'
import { useProjectListQuery } from '@/strapi/hooks/use-project-query'

export const ProjectList = () => {
  const { data: projects } = useProjectListQuery()
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.documentId}
          project={project}
          isReversed={index % 2 === 1}
        />
      ))}
    </div>
  )
}
