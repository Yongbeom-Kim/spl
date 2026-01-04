import heroCropped from '../assets/hero-cropped.webp'
import { Card } from '@/components/page-section/containers/card/Card'
import { Section } from '@/components/page-section'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'
import { Carousel } from '@/components/carousel'

const AboutUsSection1 = () => {
  return (
    <FullScreenHeaderOnlySection
      header={'Welcome to Senpai Learn!'}
      align_header={'left'}
      variant={'light'}
      width="wide"
      height="fit-content"
    >
      <div className="w-full lg:w-1/2 mr-auto">
        <Section.P>
          We are a team of enablers who support projects related to enhanced
          learning via novel approaches.
        </Section.P>
        <Section.P>We are determined to engender equity in our work.</Section.P>
        <Section.P>
          Our team of highly motivated individuals is invested in mentoring
          youths, to educate and build skills via evidence-based portfolios.
        </Section.P>
      </div>
      <div
        className="w-full lg:w-2/3 ml-auto my-10"
      >
        <Carousel
          images={[
            {
              src: 'https://static.wixstatic.com/media/658066_e116353ee8014ca7905f67a3e3306f64~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_e116353ee8014ca7905f67a3e3306f64~mv2.jpg',
              alt: 'Senpai Learn activity 1',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_f315c15708b744c5816ecfba7e4fa2c9~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_f315c15708b744c5816ecfba7e4fa2c9~mv2.jpg',
              alt: 'Senpai Learn activity 2',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_876d92b8f40147d8b0b0bb4c6d78c010~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_876d92b8f40147d8b0b0bb4c6d78c010~mv2.jpg',
              alt: 'Senpai Learn activity 3',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_60387c68ba364ce7adb0739610576500~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_60387c68ba364ce7adb0739610576500~mv2.jpg',
              alt: 'Senpai Learn activity 4',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_628433fed63241c5bdbdf6538fdf4ed6~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_628433fed63241c5bdbdf6538fdf4ed6~mv2.jpg',
              alt: 'Senpai Learn activity 5',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_bfed7beda20e4acaabc6940db0d10a6a~mv2.jpeg/v1/fill/w_690,h_918,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_bfed7beda20e4acaabc6940db0d10a6a~mv2.jpeg',
              alt: 'Senpai Learn activity 6',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_7d0a2e0b690b40c4b0ab19f298a250e5~mv2.jpg/v1/fill/w_928,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_7d0a2e0b690b40c4b0ab19f298a250e5~mv2.jpg',
              alt: 'Senpai Learn activity 7',
            },
            {
              src: 'https://static.wixstatic.com/media/658066_9ed7d182776445069a02bc937b6cbd75~mv2.jpg/v1/fill/w_928,h_619,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/658066_9ed7d182776445069a02bc937b6cbd75~mv2.jpg',
              alt: 'Senpai Learn activity 8',
            },
          ]}
          autoPlayInterval={4000}
          aspectRatio="3/2"
        />
        </div>
    </FullScreenHeaderOnlySection>
  )
}

const AboutUsSection2 = () => {
  return (
    <FullScreenHeaderOnlySection
      header={'Our Philosophy'}
      align_header={'left'}
      variant={'dark'}
      width="wide"
      height="fit-content"
    >
      <div className="flex flex-col lg:flex-row items-start mb-20">
        <Section.Ul className="w-full lg:w-5/6">
          <Section.Li>
            <Section.Strong>Be an Enabler.</Section.Strong> Be a champion for a
            cause that you believe in.
          </Section.Li>
          <Section.Li>
            <Section.Strong>Be a Leader.</Section.Strong> Leadership starts from
            within.
          </Section.Li>
          <Section.Li>
            <Section.Strong>Be an Educator.</Section.Strong> Captivate learners
            with authentic delivery and cultivate a sense of responsibility in
            their roles in society.
          </Section.Li>
          <Section.Li>
            <Section.Strong>Be an Inspiration.</Section.Strong> Lead by example.
          </Section.Li>
        </Section.Ul>
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
      variant={'light'}
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
            Never, ever underestimate the
            <br />
            importance of having fun.
          </blockquote>

          <div className="h-full flex justify-end text-6xl lg:text-8xl text-neutral-600 font-brush font-extrabold opacity-30">
            "
          </div>

          <footer className="text-lg lg:text-xl text-neutral-800">
            <p className="font-semibold mb-2">— Professor Randy Pausch</p>
            <p className="text-base lg:text-lg text-neutral-700 mb-1">
              Carnegie Mellon University
            </p>
            <p className="text-sm lg:text-base text-neutral-700">(1961-2008)</p>
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
