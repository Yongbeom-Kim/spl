import { Link } from '@tanstack/react-router'
import aboutusHero from '../../aboutus/assets/hero-cropped.webp'
import { Section } from '@/components/page-section'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { ExternalLinkIcon } from '@/components/external-link-icon/ExternalLinkIcon'
import { AboutUsImageCarousel } from '@/pages/aboutus/components/AboutUsImageCarousel'

export const WhoWeAreSection = () => {
  return (
    <FullScreenHeaderOnlySection
      header={'Who We Are'}
      align_header={'left'}
      variant={'light'}
      width="wide"
      height="fit-content"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div>
          <Section.P>
            We are a team of enablers dedicated to mentoring and empowering
            others through novel approaches to learning.
          </Section.P>
          <Section.P className="lg:mb-24">
            We are chemists, educators, engineers, artists, programmers, and
            scientists, from diverse backgrounds.
          </Section.P>

          <div>
            <Link
              to="/aboutus"
              className="inline-flex items-center text-lg font-medium text-accent-blue-600 hover:text-accent-blue-700 transition-colors duration-200"
            >
              Learn more about us
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 lg:-translate-y-16 lg:-mb-16">
          <AboutUsImageCarousel />
        </div>
      </div>
    </FullScreenHeaderOnlySection>
  )
}
