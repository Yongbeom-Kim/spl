import { FullScreenHeroSection } from "@/components/full-screen-hero/FullScreenHeroSection"
import { PeoplePageHeroBackground } from "./HeroMasonryBackground"

export const PeoplePageHeroSection = () => {
	return (

		<FullScreenHeroSection 
		backgroundElement={<PeoplePageHeroBackground />} 
		headlineContent={'About Us'} 
	/>
	)
}