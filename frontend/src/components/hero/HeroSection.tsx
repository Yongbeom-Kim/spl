import { Button } from '@/components/button/Button'
import heroSectionImage from './assets/heroSectionImage.png'

const HeroBackgroundImage = () => {
  return (
    <>
      {/* TODO: learn about this */}
      <img
        src={heroSectionImage}
        alt="Hero section"
        className="object-cover h-screen w-screen"
      />
      <div className="absolute inset-0 bg-black/60" />
    </>
  )
}

const HeroContent = () => {
  return (
    <>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-0 font-main w-full text-center">
          Hero Section Title
        </h1>
        <p className="text-2xl text-neutral-0 font-main w-full text-center">
          Secondary Text Here
        </p>
      </div>
      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center flex flex-col md:flex-row gap-4 md:gap-10">
        {/* <Button variant="red" className="md:w-60 md:font-2xl md:px-8 md:py-3 px-4 py-2 text-lg w-45"> */}
        <Button variant="red" className="w-60 font-2xl px-8 py-3">
          Explore XYZ
        </Button>
        <Button variant="translucent" className="w-60 font-2xl px-8 py-3">
          Find Out More
        </Button>
      </div>
    </>
  )
}

export const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden h-full"
    >
      <HeroBackgroundImage />
      <HeroContent />
    </section>
  )
}
