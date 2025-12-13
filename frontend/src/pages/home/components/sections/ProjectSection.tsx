import { Link } from '@/components/link/Link'
import { SectionLayout } from './SectionLayout'

type ProjectCardProps = {
  title: string
  description: string
  date?: string
  imageUrl?: string
}

const ProjectCard = ({
  title,
  description,
  date,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="w-64 h-100 bg-neutral-0 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image Section - Mobile: 200px height, Desktop: 180px */}
      <div className="relative w-full h-[200px] bg-[#B1B2B5]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-600">
            <span className="text-sm">Project Image</span>
          </div>
        )}
        {/* Date Badge */}
        {date && (
          <div className="absolute top-3 left-3 bg-[#B1B2B5] px-3 py-1 rounded">
            <span className="text-xs text-white font-main">{date}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 font-main">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-800 font-main leading-normal line-clamp-3">
          {description}
        </p>

        {/* Read More Link */}
        <Link
          to="/#"
          className="text-sm font-semibold text-neutral-900 font-main hover:underline inline-flex items-center gap-1 w-fit"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}

export const ProjectSection = () => {
  // Sample project data - replace with actual data
  const projects = [
    {
      title: 'Project Title',
      description:
        'This is a brief description of Project. It highlights the key features and objectives of this initiative.',
      date: '2024',
    },
    {
      title: 'Project Title',
      description:
        'This is a brief description of Project. It highlights the key features and objectives of this initiative.',
      date: '2024',
    },
    {
      title: 'Project Title',
      description:
        'This is a brief description of Project. It highlights the key features and objectives of this initiative.',
      date: '2024',
    },
  ]

  return (
    <SectionLayout className="bg-neutral-50" sectionTitle="Projects">
      {/* Project Cards Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 my-auto items-center justify-center mb-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <div className='w-full flex'>
      <Link to="/#" className='ml-auto'>See All Projects →</Link>
      </div>
    </SectionLayout>
  )
}
