export type Publication = {
  title: string
  authors: Array<string>
  publicationDate: string
  readMoreUrl: string
  posterImg?: {
    src: string
    alt: string
  }
}

export const publicationData: Array<Publication> = [
  {
    title:
      'Technology-Enabled Blended Learning Experiences for Chemistry Education and Outreach',
    authors: ['Fun Man Fung', 'Christoph Zimmermann'],
    publicationDate: '2 July 2021',
    readMoreUrl:
      'https://www.elsevier.com/books/technology-enabled-blended-learning-experiences-for-chemistry-education-and-outreach/fung/978-0-12-822879-1',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_6a78d84596ce43dc97bf0218f1c370e7~mv2.jpg/v1/fill/w_239,h_135,al_c,lg_1,q_80,enc_avif,quality_auto/nothing.jpg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'How Early-Career Scientists Responded with Resiliency to the Space Created by the COVID-19 Pandemic',
    authors: [
      'Fun Man Fung*',
      'Safia Z. Jilani*',
      'Monica L. Ohnsorg*',
      'Rebecca L. Pinals*',
      'Mohit Saraf*',
      'Joshua Tropp*',
      'Peter Carlton*',
    ],
    publicationDate: '22 March 2022',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acscentsci.2c00094',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_923d0e6dcbce4e809c51aca74f953142~mv2.jpeg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Supporting Social and Learning Presence in the Revised Community of Inquiry Framework for Hybrid Learning',
    authors: [
      'Beatrice Jia Min Ng',
      'Jia Yi Han',
      'Yongbeom Kim',
      'Kenzo Aki Togo',
      'Jia Ying Chew',
      'Yulin Lam',
      'Fun Man Fung*',
    ],
    publicationDate: '7 February 2022',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.1c00842',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_3760471d5bbb4d1ca612519782af4292~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Does Team Teaching Improve Student Engagement in an Age of Digital Learning',
    authors: ['Yongbeom Kim', 'Jia Yi Han', 'Fun Man Fung'],
    publicationDate: '4 December 2021',
    readMoreUrl: 'https://doi.org/10.1109/TALE52509.2021.9678925',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_2e642e4bee8b4a079bfac5a343ad7f24~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'ChemPOV: Digitizing an Organic Chemistry Boardgame to Support Online Learning',
    authors: [
      'Fun Man Fung',
      'Yulin Lam',
      'John Yap',
      'Dawoud Abdullah Musalli A',
      'Jia Yi Han',
      'Kenzo Aki Togo',
      'Yongbeom Kim',
    ],
    publicationDate: '4 December 2021',
    readMoreUrl:
      'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9678765',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_c93332ab07c9490a8dc686248a4488cf~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title: 'Utilizing a Telegram Quiz Bot to Promote Retrieval Practice',
    authors: [
      'Prasanth Rajan Mohan',
      'Jonathan Sing Huat Ong',
      'Fun Man Fung',
      'Jia Yi Han',
      'Jia Ying Chew',
    ],
    publicationDate: '4 December 2021',
    readMoreUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9678688',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_0d9d1c2d80db4a7584ca48eaed6127c7~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Teaching in Virtual Environments: Global Educational Development to Respond to Challenges and Opportunities of the COVID-19 Pandemic',
    authors: [
      'Melissa Withers',
      'Mona Monfared',
      'Fun Man Fung',
      'Vivian WY Lee',
      'César Alberto Lucio Ramírez',
      'Michael Antonio F. Mendoza',
      'Catherine Zhou',
      'Eleanor V.H. Vandegrift',
    ],
    publicationDate: '24 September 2021',
    readMoreUrl: 'https://td.journals.psu.edu/td/article/view/1513',
  },
  {
    title:
      'University-wide chronotyping shows late-type students have lower grades, shorter sleep, poorer well-being, lower self-regulation, and more absenteeism',
    authors: [
      'Sing Chen Yeo',
      'Jacinda Tan',
      'Clin K.Y. Lai',
      'Samantha Lim',
      'Yuvan Chandramoghan',
      'Fun Man Fung',
      'Patricia Chen',
      'Timothy J. Strauman',
      'Joshua J. Gooley',
    ],
    publicationDate: '31 December 2020',
    readMoreUrl: 'https://doi.org/10.1101/2021.08.04.455177',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_c34568e9c31a4e19993dad9aa8b72714~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Coding a Telegram Quiz Bot to Aid Learners in Environmental Chemistry',
    authors: [
      'Jonathan Sing Huat Ong',
      'Prasanth Rajan Mohan',
      'Jia Yi Han',
      'Jia Ying Chew',
      'Fun Man Fung*',
    ],
    publicationDate: '9 August 2021',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.1c00201',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_6cfd86e964c542a381bad51bc07c5197~mv2.jpeg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Adopting a Gamified Approach of Conducting Viva Voce in an Undergraduate Lab Module',
    authors: ['Sam Book Kiat Koh', 'Shueh Yee Tai', 'Fun Man Fung*'],
    publicationDate: '7 June 2021',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.0c01397',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_e028d893a9584aebaa16ba5f09d90726~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'CheMakers: Playing a Collaborative Board Game to Understand Organic Chemistry',
    authors: [
      'Zilong Zhang',
      'Phillmont Muktar',
      'Christoper Ivan Wijaya Ong',
      'Yulin Lam',
      'Fun Man Fung*',
    ],
    publicationDate: '8 February 2021',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.0c01116',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_1400ce442563472ea20b6471644a5531~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Analysis of lipopolysaccharides by coupling microscale solid-phase extraction with capillary electrophoresis-laser induced fluorescence',
    authors: [
      'Rachel Lim Rui Xia',
      'Fun Man Fung*',
      'Hua-tao Feng',
      'Sam Fong Yau Li',
    ],
    publicationDate: '31 January 2021',
    readMoreUrl:
      'https://www.sciencedirect.com/science/article/pii/S0026265X20325571',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_87624042a3b240e9b6f349c3aeaf52d9~mv2.jpg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Interacting with 3D Molecular Structures Using an Augmented Reality Mobile App',
    authors: [
      'Jonah Kailer Aw',
      'Kevin Boellaard',
      'Teck Kiang Tan',
      'John Yap',
      'Yi Ping Loh',
      'Benoit Colasson',
      'Etienne Blanc',
      'Yulin Lam',
      'Fun Man Fung*',
    ],
    publicationDate: '10 August 2020',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.0c00387',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_6b5c4da951394d7dbe8bf0e9a3bdbd91~mv2.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title: 'A diverse view of science to catalyse change',
    authors: [
      'Cesar Urbina-Blanco',
      'Safia Jilani',
      'Isaiah Speight',
      'Fun Man Fung et al.',
    ],
    publicationDate: '16 August 2020',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/jacs.0c07877',
  },
  {
    title:
      'How COVID-19 Disrupted Our “Flipped” Freshman Organic Chemistry Course: Insights Gained from Singapore',
    authors: ['Fun Man Fung*', 'Yulin Lam'],
    publicationDate: '7 September 2020',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.0c00590',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_da424438479e45e58ee8841c1e68b6fd~mv2.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Building an Interactive Immersive Virtual Reality Crime Scene for Future Chemists to Learn Forensic Science Chemistry',
    authors: [
      'Shaphyna Nacqiar Kader',
      'Wei Bo Ng',
      'Stella Wei Ling Tan',
      'Fun Man Fung*',
    ],
    publicationDate: '7 September 2020',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.0c00817',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_20769402c3d549068cb0c78032b62012~mv2.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'How Chemists Achieve Active Learning Online During the COVID-19 Pandemic: Using the Community of Inquiry (CoI) Framework to Support Remote Teaching',
    authors: [
      'Hui Ru Tan',
      'Wei Heng Chng',
      'Christian Chonardo',
      'Magdeline Tao Tao Ng',
      'Fun Man Fung',
    ],
    publicationDate: '7 September 2020',
    readMoreUrl: 'https://pubs.acs.org/doi/full/10.1021/acs.jchemed.0c00541',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_228da391c6324e87aac11145be7ce687~mv2.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Sustaining Active Learning in Virtual Classroom in the Time of COVID-19 Pandemic',
    authors: [
      'Fun Man Fung',
      'Wei Heng Chng',
      'Hui Ru Tan',
      'Magdeline Tao Tao Ng',
    ],
    publicationDate: '15 July 2020',
    readMoreUrl: 'http://None',
  },
  {
    title: 'Reflecting on a Year of Elements. Chemistry International',
    authors: ['Lori Ferrins', 'Christine Dunne', 'João Borges', 'Fun Man Fung'],
    publicationDate: '15 July 2020',
    readMoreUrl:
      'https://www.degruyter.com/document/doi/10.1515/ci-2020-0302/html',
  },
  {
    title:
      'Bridges to the Future: Toward Future Ready Graduates in Chemistry Laboratories',
    authors: ['Fun Man Fung', 'Simon Watts'],
    publicationDate: '12 August 2019',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.8b00771',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_e0b442b5ef2f46649132cb51f2a2f83c~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Applying a Virtual Reality Platform in Environmental Chemistry Education to Conduct a Field Trip to an Overseas Site',
    authors: [
      'Fun Man Fung',
      'Wen Yi Choo',
      'Alvita Ardisara',
      'Christoph Dominik Zimmermann',
      'Simon Watts',
      'Thierry Koscielniak',
      'Etienne Blanc',
      'Xavier Coumoul',
      'Rainer Dumke',
    ],
    publicationDate: '11 February 2019',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.8b00728',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_2bf0435109d245db9f6f43fc55e33513~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Integrating 360° Videos in an Undergraduate Chemistry Laboratory Course',
    authors: ['Alvita Ardisara', 'Fun Man Fung'],
    publicationDate: '8 October 2018',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.8b00143',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_a9d273d857a445d0a3644185c7f9c028~mv2.jpeg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Applying a Quiz-Show style Game to Facilitate Effective Chemistry Lexical Communication',
    authors: ['Sam Koh Boon Kiat', 'Fun Man Fung'],
    publicationDate: '12 November 2018',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.7b00857',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_c52ec1de899e40539ad8423e28b9b0c0~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Celebrating the Golden Jubilee of the International Chemistry Olympiad: Back to Where It All Began',
    authors: [
      'Fun Man Fung',
      'Martin Putala',
      'Petr Holzhauser',
      'Ekasith Somsook',
      'Cecilia Hernandez',
      'I-Jy Chang',
    ],
    publicationDate: '12 February 2018',
    readMoreUrl: 'https://pubs.acs.org/doi/10.1021/acs.jchemed.7b00640',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_8e75c7eef7404e849627cbb6a066df23~mv2.jpeg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpeg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'The Application of Drones in Chemical Education for Analytical Environmental Chemistry',
    authors: ['Fun Man Fung', 'Simon Watts'],
    publicationDate: '7 November 2017',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/bk-2017-1270.ch009',
  },
  {
    title:
      'Application of Social Media in Chemistry Education: Incorporating Instagram and Snapchat in Laboratory Teaching',
    authors: ['Rachel Lim Rui Xia', 'Alina Ang Sihui', 'Fun Man Fung'],
    publicationDate: '7 November 2017',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/bk-2017-1270.ch003',
  },
  {
    title:
      'Extraction, separation and characterization of endotoxins in water samples using solid phase extraction and capillary electrophoresis-laser induced fluorescence',
    authors: ['Fun Man Fung', 'Min Su', 'Hua-tao Feng', 'Sam Fong Yau Li'],
    publicationDate: '6 September 2017',
    readMoreUrl: 'https://www.nature.com/articles/s41598-017-11232-x',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_f151daa07c484174918537dc54f06610~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Using first-person perspective filming techniques for a chemistry laboratory demonstration to facilitate a flipped pre-lab',
    authors: ['Fun Man Fung'],
    publicationDate: '21 May 2015',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/ed5009624',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_22ed58792add4ac28f42872d07cc9074~mv2.jpg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'A Bird’s-Eye View of Sampling Sites: Using Unmanned Aerial Vehicles to Make Chemistry Fieldwork Videos',
    authors: ['Fun Man Fung', 'Simon Watts'],
    publicationDate: '8 August 2017',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.6b00985',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_97d433c84eb1470991898e00ef8eacb9~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Adopting Lightboard for a Chemistry Flipped Classroom to Improve Technology-Enhanced Videos for Better Learner Engagement',
    authors: ['Fun Man Fung'],
    publicationDate: '8 June 2017',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.7b00004',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_0cf5cab0b1d74d61ae5fbfa2a79b75cc~mv2.gif',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Exploring Technology-Enhanced Learning Using Google Glass to Offer Students a Unique Instructor’s Point of View Live Laboratory Demonstration',
    authors: ['Fun Man Fung'],
    publicationDate: '27 November 2016',
    readMoreUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.6b00457',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_a3b9446420d148eab09536321e0f5015~mv2.jpg/v1/fill/w_239,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.jpg',
      alt: 'nothing.png',
    },
  },
  {
    title:
      'Seeing through my lenses: A GoPro approach to teach a laboratory module',
    authors: ['Fun Man Fung'],
    publicationDate: '30 April 2016',
    readMoreUrl:
      'https://www.researchgate.net/profile/Fun_Man_Fung/publication/310577163_Seeing_Through_My_Lenses_A_GoPro_approach_to_teach_a_laboratory_module/links/5987fb2d45851560584cf395/Seeing-Through-My-Lenses-A-GoPro-approach-to-teach-a-laboratory-module.pdf',
    posterImg: {
      src: 'https://static.wixstatic.com/media/658066_98bd428c52044a50be1c297d0eb755cb~mv2.png/v1/fill/w_239,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nothing.png',
      alt: 'nothing.png',
    },
  },
]
