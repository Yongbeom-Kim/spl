import { ProjectCard } from './ProjectCard'
import { projectData } from '../data/project-data'

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      {projectData.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          isReversed={index % 2 === 1}
        />
      ))}
    </div>
  )
}
