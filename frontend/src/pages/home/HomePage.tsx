import { PageLayout } from '@/components/page-layout/PageLayout'
import { FullScreenHeroSection } from '../../components/full-screen-hero/FullScreenHeroSection'
import './styles.css'
import heroCropped from './assets/hero-cropped.webp'


export const HomePage = () => {
  return (
    <PageLayout>
      <FullScreenHeroSection 
        backgroundElement={
          <img 
            src={heroCropped} 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
        } 
        headlineContent='We are a group empowering learning for everyone.' 
      />
    </PageLayout>
  )
}
