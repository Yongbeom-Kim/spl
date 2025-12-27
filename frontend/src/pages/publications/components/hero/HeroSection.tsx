import { FullScreenHeroSection } from "@/components/full-screen-hero/FullScreenHeroSection"
import { PublicationsHeroMasonryBackground } from "./PublicationsHeroMasonryBackground"

export const PublicationsPageHeroSection = () => {
	return (
		<FullScreenHeroSection 
			backgroundElement={<PublicationsHeroMasonryBackground />} 
			headlineContent={'Publications'} 
		/>
	)
}

