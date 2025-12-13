import { Link } from '@/components/link/Link'
import { SectionLayout } from './SectionLayout'

export const AboutUsSection = () => {
  return (
    <SectionLayout className="bg-neutral-100" sectionTitle="About Us">
      <div className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] sm:grid-rows-2 gap-10">
        <div className="row-span-2 w-full min-h-52 bg-white rounded-lg flex items-center justify-center text-neutral-600">
          <span className="text-sm">About Us Image</span>
        </div>

        <p className="text-lg md:text-lg text-neutral-900 font-main leading-normal">
          We are a passionate team dedicated to providing innovative learning
          solutions. Our mission is to empower learners through accessible and
          engaging educational experiences.
        </p>

        <div className="flex">
          <Link to="/" className="block ml-auto mt-auto">
            Learn More →
          </Link>
        </div>
      </div>
    </SectionLayout>
  )
}
