import { Carousel } from '@/components/carousel'

export const AboutUsImageCarousel = () => {
  return (
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
  )
}

