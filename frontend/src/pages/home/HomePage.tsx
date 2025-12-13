import { PageWithHeroLayout } from "@/components/page-layout/PageLayout"
import { AboutUsSection } from "@/pages/home/components/sections/AboutUsSection"
import { ProjectSection } from "@/pages/home/components/sections/ProjectSection"
import { NewsSection } from "@/pages/home/components/sections/NewsSection"


export const HomePage = () => {
	return (
		<PageWithHeroLayout>
			<AboutUsSection />
			<ProjectSection />
			<NewsSection />
		</PageWithHeroLayout>
	)
}