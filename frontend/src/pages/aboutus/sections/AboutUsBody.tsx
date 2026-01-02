import { FullScreenHeaderOnlySection } from '@/components/page-sections/layout/FullScreenHeaderOnlySection'
import heroCropped from '../assets/hero-cropped.webp'
import { Card } from '@/components/page-sections/components/card/Card'

const AboutUsSection1 = () => {
  return (
    <FullScreenHeaderOnlySection
      header={'Welcome to Senpai Learn!'}
      align_header={'left'}
      theme={'light'}
      width="wide"
      height="fit-content"
    >
      <div className="w-full lg:w-1/2 mr-auto">
        <p>
          We are a team of enablers who support projects related to enhanced
          learning via novel approaches.
        </p>
        <p>We are determined to engender equity in our work.</p>
        <p>
          Our team of highly motivated individuals is invested in mentoring
          youths, to educate and build skills via evidence-based portfolios.
        </p>
      </div>
      <img
        src={heroCropped}
        className="aspect-3/2 object-cover w-full lg:w-2/3 ml-auto my-10"
      />
    </FullScreenHeaderOnlySection>
  )
}

const AboutUsSection2 = () => {
  return (
    <FullScreenHeaderOnlySection
      header={'Our Philosophy'}
      align_header={'left'}
      theme={'dark'}
      width="wide"
      height="fit-content"
    >
      <div className="flex flex-col lg:flex-row items-start mb-20">
        <ul className="w-full lg:w-5/6">
          <li>
            <strong>Be an Enabler.</strong> Be a champion for a cause that you
            believe in.
          </li>
          <li>
            <strong>Be a Leader.</strong> Leadership starts from within.
          </li>
          <li>
            <strong>Be an Educator.</strong> Captivate learners with authentic
            delivery and cultivate a sense of responsibility in their roles in
            society.
          </li>
          <li>
            <strong>Be an Inspiration.</strong> Lead by example.
          </li>
        </ul>
        <div className="p-4 bg-white mt-10 ml-auto lg:-mt-20 rounded-sm">
          <img
            src="https://static.wixstatic.com/media/658066_2f9d53fb49d147158946cd30efc5a75e~mv2.jpg/v1/fill/w_103,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/658066_2f9d53fb49d147158946cd30efc5a75e~mv2.jpg"
            alt=""
          />
        </div>
      </div>

      <Card
        variant={'light'}
        className="h-fit w-full py-0 lg:py-20 px-0 lg:px-10 mx-auto bg-neutral-400"
      >
        <iframe
          className="max-w-3xl aspect-video mx-auto"
          src="https://www.youtube.com/embed/YO7JlCSHBl0?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Card>
    </FullScreenHeaderOnlySection>
  )
}

const AboutUsSection3 = () => {
  return (
    <FullScreenHeaderOnlySection
      header={''}
      align_header={'center'}
      theme={'light'}
      width="wide"
      height="fit-content"
    >
      <div className="w-full lg:w-full mx-auto py-12">
        <Card
          variant={'light'}
          shadow={true}
          className="relative p-12 lg:p-16"
          background="var(--color-accent-red-50)"
        >
          <div className="h-full mr-auto flex items-start text-6xl lg:text-8xl text-neutral-600 font-brush font-extrabold opacity-30">
            "
          </div>

          <blockquote className="text-2xl lg:text-5xl font-light italic text-neutral-900 mb-8 leading-relaxed text-center">
            Never, ever underestimate the<br />importance of having fun.
          </blockquote>

          <div className="h-full flex justify-end text-6xl lg:text-8xl text-neutral-600 font-brush font-extrabold opacity-30">
            "
          </div>

          <footer className="text-lg lg:text-xl text-neutral-100">
            <p className="font-semibold mb-2">— Professor Randy Pausch</p>
            <p className="text-base lg:text-lg text-neutral-200 mb-1">
              Carnegie Mellon University
            </p>
            <p className="text-sm lg:text-base text-neutral-300">(1961-2008)</p>
          </footer>
        </Card>
      </div>
    </FullScreenHeaderOnlySection>
  )
}

export const AboutUsBody = () => (
  <>
    <AboutUsSection1 />
    <AboutUsSection2 />
    <AboutUsSection3 />
  </>
)
