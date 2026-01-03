export type Project = {
  thumbnailUrl: string
  startYear: number
  title: string
  subtitle: string
}

const unsortedProjectData: Project[] = [
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_3a1ea6eac7c647bba3174c1b1439a565~mv2.jpg/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Abstract%20Graphic%20revised%20Miro.jpg',
    startYear: 2021,
    title: 'Collaborative Learning using <strong>MiroBoard</strong>',
    subtitle:
      '<p>Instead of the usual Zoom teaching + hybrid paper and pen sketching, how do we facilitate group collaboration in learning Organic Chemistry Reactions? Project led by Beatrice.</p><p><a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.1c00842">Published in Journal of Chemical Education, ACS</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_e1d46f89658047eebe7fe6cdb77556dc~mv2.jpg/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Speak_your_mind%20logo.jpg',
    startYear: 2021,
    title: '<strong>Speak</strong> Your Mind',
    subtitle:
      '<p>Using <a href="https://clubhousedb.com/user/funman">Clubhouse</a>, we engender a safe psychological safety net for learners to speak and engage in stimulating intellectual discourse in Environmental Chemistry. Project led by Benjamin.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_e2f04d8705084d51b448ee08852519cf~mv2.jpg/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/b6bbaf50-26be-4284-9208-e5cf932072b9.jpg',
    startYear: 2021,
    title: '<strong>Twitch</strong>ing Team Teaching',
    subtitle:
      '<p>Instead of the usual Zoom teaching, we live-streamed our chemistry class via Twitch.tv. Team taught by Fun Man & Yongbeom. Project led by Ivan.</p><p><a href="https://youtu.be/RIcv1N0CxcY" target="_blank" rel="noopener noreferrer">Watch our Clips</a>. See our <a href="https://www.twitch.tv/chemfunman/about" target="_blank" rel="noopener noreferrer">Twitch.tv Channel</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_bdf905f1848244d387ef426944ae50f4~mv2.png/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Abstract%20Graphic%20Discord.png',
    startYear: 2021,
    title: '<strong>Discord</strong> Learning Community',
    subtitle:
      '<p>We use Discord to spark student discourse to catalyze the formation of a learning community. Proudly led by Ivan.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_a7e485185c164e80b900a417319a00a7~mv2.png/v1/crop/x_0%2Cy_200%2Cw_1024%2Ch_764/fill/w_373%2Ch_278%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/logo.png',
    startYear: 2020,
    title: '<strong>ChemPOV</strong>',
    subtitle:
      '<p>A digital game-based learning solution to learn organic chemistry with friends. P2P, fun, engaging! Led by Jia Yi, Dawoud, Kenzo, Ben.</p><p>Featured by <a href="https://media-and-learning.eu/type/featured-articles/chempov-a-multi-player-digital-boardgame-from-singapore-that-supports-more-engaging-learning/" target="_blank" rel="noopener noreferrer">Media & Learning</a>. Watch <a href="https://youtu.be/YO7JlCSHBl0" target="_blank" rel="noopener noreferrer">Trailer</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_27642d92c915410fb5bbab440ef3cb51~mv2.png/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/nupov-app-logo_v2.png',
    startYear: 2019,
    title: '<strong>NuPOV</strong>',
    subtitle:
      '<p>We created an Augmented Reality mobile app to allow users to interact with 3D molecules to support spatial visualization training, an essential skill for scientists. Led by Kevin, Jonah & Jia Yi.</p><p><a href="https://nusit.nus.edu.sg/awards/2021-awards/nus-it-nupov-nus-adea-2021-recipient/?utm_source=linktree&utm_medium=nupovadea21&utm_id=igtwt" target="_blank" rel="noopener noreferrer">Awarded NUS Annual Digital Education 2021</a>. Read our publications <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.0c00387" target="_blank" rel="noopener noreferrer">[1]</a> | <a href="https://media-and-learning.eu/type/featured-articles/how-nupov-revolutionises-organic-chemistry-education-with-the-help-of-ar/" target="_blank" rel="noopener noreferrer">[2]</a> | <a href="https://www.sciencedirect.com/science/article/pii/B9780128228791000020" target="_blank" rel="noopener noreferrer">[3]</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_c15d3570d9c146b9a03205f9a236a2c8~mv2.jpg/v1/crop/x_89%2Cy_0%2Cw_543%2Ch_405/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/JCE1%20Illustration.jpg',
    startYear: 2020,
    title: '<strong>Telegram</strong> Quiz Bot',
    subtitle:
      '<p>We built a Telegram Quiz Bot to support remote learning by helping students identify gaps in their content knowledge with ease and convenience. Led by Jon and Pras.</p><p>Published in Journal of <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.1c00201">Chemical Education, ACS</a>. Watch <a href="https://youtu.be/2r_BxF3sPEA">Trailer</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_52b5212f839a4afbae3b153294618b14~mv2.png/v1/crop/x_477%2Cy_0%2Cw_1443%2Ch_1080/fill/w_375%2Ch_280%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Abstract%20Graphic.png',
    startYear: 2019,
    title: '<strong>VR</strong> Crime Scene',
    subtitle:
      '<p>We created a realistic crime scene using immersive learning platform <a href="https://www.uptale.io/en/home/">uptale</a> to teach and learn Forensic Science. Led by Shaphyna.</p><p>Published in <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.0c00817">Journal of Chemical Education, ACS</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_9c6eb67107634d31a741d6ce2ff4e830~mv2.jpg/v1/crop/x_315%2Cy_0%2Cw_3477%2Ch_2592/fill/w_375%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/20210318_161324.jpg',
    startYear: 2020,
    title: 'Team Teaching',
    subtitle:
      '<p>Team Teaching is Fun! Open-minded educators set common understandings and build a strong working relationship with one another.</p><p>Featured by <a href="https://blog.nus.edu.sg/teachingconnections/2021/06/23/applying-team-teaching-in-the-context-of-an-undergraduate-environment-chemistry-course/" target="_blank" rel="noopener noreferrer">Teaching Connections</a>. Watch <a href="https://youtu.be/EyVmEUrwoxc" target="_blank" rel="noopener noreferrer">Trailer</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_3e950e2c1c3e41dea1dd63a4b1a57d5e~mv2.jpg/v1/crop/x_141%2Cy_591%2Cw_735%2Ch_548/fill/w_375%2Ch_280%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/CheMakers%20JCE%20abstract%20graphic.jpg',
    startYear: 2020,
    title: '<strong>CheMakers</strong>',
    subtitle:
      '<p>We developed CheMakers, a collaborative board game to help students understand organic reaction mechanisms and implement mechanistic thinking. Proudly led by Zilong and Phillmont.</p><p><a href="https://pubs.acs.org/toc/jceda8/98/2" target="_blank" rel="noopener noreferrer"><em>Featured Cover</em> JCE</a>. Published in <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.0c01116" target="_blank" rel="noopener noreferrer">Journal of Chemical Education, ACS</a>. Watch <a href="https://youtu.be/EyVmEUrwoxc" target="_blank" rel="noopener noreferrer">Trailer</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_824af576f2a34213bdb92a6793d080b4~mv2.jpg/v1/crop/x_373%2Cy_0%2Cw_1077%2Ch_803/fill/w_375%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/LIve%20acting_JPG.jpg',
    startYear: 2021,
    title: '<strong>Duologue</strong> for Student Partnership',
    subtitle:
      '<p>Live Acting in Team-Based Learning to Teach Professionalism and Ethics to Pharmacy Students. Proudly led by Xin Ru.</p><p>Featured by <a href="https://issotl.com/2021/02/22/issotl-connect-cluster-3-sotl-partnerships/" target="_blank" rel="noopener noreferrer">ISSOTL</a>. Watch <a href="https://youtu.be/dQiLyEf_riw" target="_blank" rel="noopener noreferrer">Trailer</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_b669f0ab1bc74f59b6dcf30f90f5181c~mv2.jpg/v1/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Abstract%20Graphic.jpg',
    startYear: 2018,
    title: '<strong>Virtual Field Trip</strong> to Indonesia',
    subtitle:
      '<p>We were the first to apply 360-camera to build an immersive experience for an overseas trip in learning Environmental Chemistry. Proudly led by Alvita and Owen.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.8b00728">Journal of Chemical Education, ACS</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_d46287ed99764b0382f656d26799b83a~mv2.jpg/v1/crop/x_0%2Cy_53%2Cw_903%2Ch_672/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Viva%20la%20Vida_JPG.jpg',
    startYear: 2017,
    title: 'Viva la Vida',
    subtitle:
      '<p>A gamified approach toward Viva voce was implemented in a post-lab activity to evaluate students in teams. This game-show approach fostered collaboration among teammates and reduced stress felt by students. Proudly led by Sam.</p><p>Published in <a href="https://pubs.acs.org/doi/full/10.1021/acs.jchemed.0c01397">Journal of Chemical Education, ACS</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_94936636881a4f038e4ce2ed7734c44e~mv2.jpg/v1/crop/x_567%2Cy_0%2Cw_4361%2Ch_3264/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/FAAM%205%20-%20Director%20Alvita%20in%20Action.jpg',
    startYear: 2017,
    title: '360 Laboratory Video',
    subtitle:
      '<p>With the Ricoh Theta 360-camera, we recorded immersive photosphere & video for learners to self-explore the laboratory under the guidance of the lab instructor. Proudly led by Alvita.</p><p>Published in <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.8b00143">Journal of Chemical Education, ACS</a>. Featured by <a href="https://theconversation.com/how-innovative-videography-can-supercharge-education-97676">The Conversation</a>. Watch <a href="https://youtu.be/twbxoPGstOU">Trailer</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_c52ec1de899e40539ad8423e28b9b0c0~mv2.png/v1/crop/x_0%2Cy_279%2Cw_2148%2Ch_1601/fill/w_373%2Ch_278%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/logo%20-%20ChemCharades.png',
    startYear: 2017,
    title: 'Chem<strong>Charade</strong>',
    subtitle:
      '<p>\'Charades\' has been adapted to teach students about laboratory instruments, glassware, apparatus, and techniques. Students communicate openly through deliberate practice with their teammates. Proudly led by Sam.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.7b00857">Journal of Chemical Education, ACS</a>. Watch <a href="https://youtu.be/j6puFykYYu8">Trailer</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_db461b754ac043e89ec1a0ee5736fe1a~mv2.png/v1/crop/x_37%2Cy_0%2Cw_704%2Ch_527/fill/w_373%2Ch_278%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Graphic%20Art_tif.png',
    startYear: 2017,
    title: '<strong>Snapchat</strong> the Lab',
    subtitle:
      '<p>Applying the heuristic approach, our pedagogical goal is to help students review the practical aspects of the experiments with minimal delay, enhance their comprehension towards the lessons materials and increase their confidence when they conduct future experiments. Project led by Alina.</p><p>Featured by <a href="https://theconversation.com/how-to-use-snapchat-in-the-laboratory-for-better-student-engagement-105146">The Conversation</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_a598885ff9764ebe8ee746f298fdda62~mv2.jpg/v1/crop/x_0%2Cy_43%2Cw_620%2Ch_462/fill/w_373%2Ch_278%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Instagram%20lab_JPG.jpg',
    startYear: 2017,
    title: '<strong>Instasnap</strong>-proach for Lab Teaching',
    subtitle:
      '<p>With Instagram, we adopted the one-to-one (instructor to individual student) engagement when the instructor observed laboratory actions (good improvisations/mistakes by students) as they conduct their experiments. Proudly led by Rachel.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/bk-2017-1270.ch003">American Chemical Society (ACS) Symposium Series Book</a>. Watch <a href="https://youtu.be/u4RhsIIO8Cs">Trailer</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_077f0be006c648368d2e2622ad6c7f6d~mv2.jpg/v1/crop/x_162%2Cy_0%2Cw_4361%2Ch_3264/fill/w_372%2Ch_277%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/JCE%20Scifinder%20Abstract%20Graphic_JPG.jpg',
    startYear: 2017,
    title: 'Teaching <strong>SciFinder</strong> via the Flipped Approach',
    subtitle:
      '<p>We adopted the Flipped Classroom approach to teach undergraduates SciFinder, a literature search tool offered by CAS solutions. Proudly led by Hafiz.</p><p>Published in <a href="https://www.sciencedirect.com/science/article/pii/B978012822879100010X">Elsevier Book</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_73cd5951747149a1a1805c98f944409f~mv2.png/v1/crop/x_0%2Cy_171%2Cw_2048%2Ch_1828/fill/w_372%2Ch_332%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/JCE%20LIGHTBOARD%20cover%20art%20proposal%20CHOO%20WEN%20XIN%20FULL%20COLOR.png',
    startYear: 2016,
    title: "<strong>Lightboard</strong> for better student's engagement",
    subtitle:
      '<p>The lightboard provides eye-contact and genuine emotive teaching through a short video lecture. Proudly led by Fun Man.</p><p>Published in <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.7b00004">Journal of Chemical Education, American Chemical Society (ACS)</a> and <a href="https://www.sciencedirect.com/science/article/pii/B9780128228791000032">Elsevier</a>. Watch <a href="https://www.youtube.com/watch?v=RuxwXwOdtRw&t=3s">Trailer</a></p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_a3b9446420d148eab09536321e0f5015~mv2.jpg/v1/crop/x_0%2Cy_0%2Cw_9770%2Ch_7281/fill/w_372%2Ch_277%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/J%20Chem%20Ed%20Graphic%20Abstract%20-%20FungFunMan%20-%20IPOV%20Glass.jpg',
    startYear: 2014,
    title: '<strong>Google Glass</strong> for an FPS Lab Live-Stream',
    subtitle:
      '<p>With the Google Glass, we live-streamed observed laboratory actions (good improvisations/mistakes by students) as they conduct their experiments. Proudly led by Fun Man.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/bk-2017-1270.ch003">American Chemical Society (ACS) Symposium Series Book</a>. Watch <a href="https://youtu.be/u4RhsIIO8Cs">Trailer</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_97d433c84eb1470991898e00ef8eacb9~mv2.png/v1/crop/x_0%2Cy_0%2Cw_2893%2Ch_2557/fill/w_372%2Ch_329%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Abstract%20Graphic%20Drone.png',
    startYear: 2015,
    title:
      'Using the <strong>Flying Drone</strong> to Enrich Environmental Chemistry Fieldwork',
    subtitle:
      '<p>We were the pioneers to use the drone to support fieldwork in analytical environmental experiments - soil sampling. Proudly led by Fun Man & Simon.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.8b00771">Journal of Chemical Education, ACS</a> and <a href="https://pubs.acs.org/doi/abs/10.1021/bk-2017-1270.ch009">ACS Symposium Book</a>.</p>',
  },
  {
    thumbnailUrl:
      'https://static.wixstatic.com/media/658066_22ed58792add4ac28f42872d07cc9074~mv2.jpg/v1/crop/x_63%2Cy_0%2Cw_1061%2Ch_791/fill/w_372%2Ch_277%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/GoPro%20ACS%20abstract%20graphic.jpg',
    startYear: 2013,
    title:
      'Using <strong>GoPro</strong> to Capture First-Person View Lab Instructions',
    subtitle:
      '<p>How can we captivate the audience in a manner that will make it an even more realistic demonstration? The application of a small device, GoPro camera, empowers the demonstrator to teach his students with a new perspective. Proudly led by Fun Man.</p><p>Published in <a href="https://pubs.acs.org/doi/abs/10.1021/ed5009624">Journal of Chemical Education, ACS</a>.</p>',
  },
]

export const projectData: Project[] = [...unsortedProjectData].sort(
  (a, b) => b.startYear - a.startYear,
)
