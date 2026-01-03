import benjaminYap from '../assets/headshots/benjamin_yap.png'
import charlesWindle from '../assets/headshots/charles_windle.png'
import chooWeiXin from '../assets/headshots/choo_wei_xin.png'
import funman2 from '../assets/headshots/funman_2.png'
import gunRui from '../assets/headshots/gun_rui.png'
import hanJiayi from '../assets/headshots/han_jiayi.png'
import jonathanOng from '../assets/headshots/jonathan_ong.png'
import jovernTeo from '../assets/headshots/jovern_teo.png'
import karenLoh from '../assets/headshots/karen_loh.png'
import kenzoTogo from '../assets/headshots/kenzo_togo.png'
import kimYongbeom from '../assets/headshots/kim_yongbeom.png'
import kiran from '../assets/headshots/kiran.png'
import leonLim from '../assets/headshots/leon_lim.png'
import matthiasKon from '../assets/headshots/matthias_kon.png'
import pangHanqing from '../assets/headshots/pang_hanqing.png'
import panshulSharma from '../assets/headshots/panshul_sharma.png'
import puaMinXin from '../assets/headshots/pua_min_xin.png'
import steinerTanyanxu from '../assets/headshots/steiner_tanyanxu.png'
import tanLinYun from '../assets/headshots/tan_lin_yun.png'
import tangShiyu from '../assets/headshots/tang_shiyu.png'
import yeoZhien from '../assets/headshots/yeo_zhien.png'

export interface Person {
  name: string
  profileImage: string
  role?: string
  description: string
  isAlumni: boolean
  readMoreHref: string | undefined
}

export const peopleData: Person[] = [
  {
    name: 'Benjamin Yap',
    profileImage: benjaminYap,
    description:
      'Benjamin is a chemistry undergraduate at NUS. He is passionate about organic chemistry research, science communications and teaching chemistry. He enjoys looking for new and innovative teaching methods to interest younger audiences.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Charles Windle',
    profileImage: charlesWindle,
    description:
      'Charles is a Natural Sciences (Chemistry and Biochemistry) undergraduate at the University of Cambridge. He met Fun Man through a research attachment with the NUS Department of Chemistry in 2019, represented Singapore at the International Chemistry Olympiad (IChO) 2020, and has continued to collaborate with Senpai Learn on chemistry and science education projects. He is passionate about learning, programming, music, and science-fiction stories.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Choo Wen Xin',
    profileImage: chooWeiXin,
    description:
      'Wen Xin is an artist who graduated from the National University of Singapore (NUS) with a Bachelor of Computing (Computer Science) with Honours (Distinction) in 2020. Interested in art since a young age, Wen Xin decided to pursue her passion instead. She explored various avenues and ended up working together with Senpai Learn.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Fun Man Fung',
    profileImage: funman2,
    role: 'Lead',
    description:
      'Dr. Fun Man Fung is a Singaporean trained at the National University of Singapore. Until recently, he was a Core Faculty and Assistant Director of Education at the NUS Institute for Applied Learning Sciences & Education Technology. He is passionate about education, mentorship, youth empowerment, and civic engagement.',
    isAlumni: false,
    // TODO: write this page
    readMoreHref: "/people/funman",
  },
  {
    name: 'Gun Rui',
    profileImage: gunRui,
    description:
      "Gun Rui is a student in NUS High School of Math and Science. Majoring in Math, Physics, Chemistry and Computer Science, he is passionate about various fields in computer science, for example its use as an educational aid and cyber security. Apart from computer science, Gun Rui's other interests include chemistry as well as aviation. Gun Rui has also participated in various STEM related competitions, a notable one being the National STEM Championship, where his team clinched the Champion position.",
    isAlumni: false,
    readMoreHref: undefined,
  },
  {
    name: 'Han Jia Yi',
    profileImage: hanJiayi,
    description:
      "Jia Yi graduated from National University of Singapore (NUS) with a degree in Chemistry. He first met Fun Man when enrolled in a module on Environmental Chemistry during his undergraduate days. Since then, he has worked with Senpai Learn on various projects to improving chemistry students' learning experience. Through these projects, he developed some interests in cognitive, and education psychology. In his free time, he likes to listen to music, read e-books, and play computer games.",
    isAlumni: false,
    readMoreHref: undefined,
  },
  {
    name: 'Jonathan Ong',
    profileImage: jonathanOng,
    description:
      "Jonathan is a chemistry undergraduate at the National University of Singapore (NUS) and University Scholar's Programme (USP). By day, you'll find him seeking fun and engaging methods to impart knowledge to his juniors. By night, he'll probably be gaming with friends.",
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Jovern Teo',
    profileImage: jovernTeo,
    description:
      'Jovern is an undergraduate scholar at LKCSOM. Prior to pursuing medicine, Jovern was a gold medalist representing NUS High School in Singapore Chemistry and British Biology Olympiads. A recipient of the A*STAR Young Researcher award, he has contributed to research projects across multiple disciplines integrating mathematical modelling, microbiology, computer science, chemistry and gamification. His passion to advance knowledge with data analytics, bioinformatics and scientific pedagogy has led him to invaluable opportunities to learn under experienced mentors, while collaborating with peers to present their findings at science fairs and professional conferences. Through interdisciplinary innovation, Jovern aspires to educate and empower others to make informed decisions about their health and well-being.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Karen Loh',
    profileImage: karenLoh,
    description:
      'Karen is a chemistry and mathematics undergraduate at the National University of Singapore (NUS). She is deeply interested in environmental chemistry and education. Besides chemistry, she has a strong passion for music and serving the community.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Kenzo Togo',
    profileImage: kenzoTogo,
    description:
      'Kenzo Togo is a graduate from Imperial College London with a Biomedical Engineering MEng degree. Currently working at NUS as a research assistant, he manages various educational projects and initiatives. Kenzo is the lead research assistant for ChemPOV and supports the team in social media and reviews. He serves as a mentor for pre-university students on a science research program.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Kim Yongbeom',
    profileImage: kimYongbeom,
    description:
      "Yongbeom is a computing undergraduate at the National University of Singapore (NUS) and University Scholar's Programme (USP). He has a keen interest in cognitive and behavioral psychology, and wants to simply have us study and learn better as students and lifelong learners.",
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Kiran',
    profileImage: kiran,
    description:
      'Kiran is an undergraduate at Trinity College Cambridge, interested in chemical and software engineering. He has keen interests in machine learning and organic chemistry, and in his spare time he enjoys playing squash and the saxophone.',
    isAlumni: false,
    readMoreHref: undefined,
  },
  {
    name: 'Leon Lim',
    profileImage: leonLim,
    description:
      'Leon is Chemistry undergraduate at the National University of Singapore (NUS). He is passionate about mental well-being and hopes to help those who are experiencing tremendous pressure from academics. He also enjoys watching food review videos and playing board games.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Matthias Kon',
    profileImage: matthiasKon,
    description:
      'Mattias is a first-year medical student from NUS. He began his research journey in science education, and presented oral & poster presentations in this field at various local and overseas conferences. Mattias currently has a keen interest in public and community health, and contributes greatly towards this area under his portfolio as Head of Community Health & Engagement in the Programme for Ocular Inflammation & Infection Translational Research (PROTON), National Healthcare Group Eye Institute. He leads and directs various research thrusts concerning the visual epidemiology and general public health of migrants, elderly, and youths, among others. In conjunction with his community-based research, Mattias is also an avid volunteer who spends much of his time crafting targeted and needs-based community service projects which serve the underprivileged.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Pang Hanqing',
    profileImage: pangHanqing,
    description:
      'Hanqing is a chemistry undergraduate at the National University of Singapore (NUS). She has a deep interest in chemistry pedagogy and has been actively participating in teaching sessions as well as the development of innovative teaching methods.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Panshul Sharma',
    profileImage: panshulSharma,
    description:
      "Panshul Sharma is currently a full-time National Serviceman in the Singapore Armed Forces, in accordance with Singapore's mandatory military conscription requirement. He attended NUS High School of Math and Science and graduated in 2023. Panshul was selected as one of four students to represent Singapore at the 55th International Chemistry Olympiad where he won a Gold medal and placed 20th globally. In a team of six students, he also represented Singapore at the International Chemistry Tournament where the team won first overall. Panshul has also previously done a research poster presentation at the ACS Spring Conference 2023. He especially enjoys learning organic chemistry and is passionate about making the subject more appealing to younger students.",
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Pua Min Xin',
    profileImage: puaMinXin,
    description:
      "Min Xin is a Physics undergraduate at NUS. An aspiring educator, his passions include education and youth development. At his best, Min Xin is thinking about his role in making the world a better place. Most of the time, though, you'll find him having coffee with friends.",
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Steiner Tan Yan Xu',
    profileImage: steinerTanyanxu,
    description:
      'Steiner is a chemistry undergraduate at the National University of Singapore (NUS). He has a keen interest in teaching methodology to inspire and nurture people to become effective learners. In addition to his passion in education, he also has sport hobbies such as football and athletics.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Tan Lin Yun',
    profileImage: tanLinYun,
    description:
      "Lin Yun is a Chemistry undergraduate at National University of Singapore (NUS) with a deep interest in Medicinal and Organic Chemistry Research. Inspired by Dr Fung's passion for youth empowerment and helping students to grow, he wants to help other students reach their potential.",
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Tang Shiyu',
    profileImage: tangShiyu,
    description:
      'Shiyu is a chemistry undergraduate at the National University of Singapore. She has a strong passion in science teaching and developing new teaching methods. She has conducted various meaningful activities to teach chemistry to students from different backgrounds. In her free time, she likes to watch drama and learn different languages.',
    isAlumni: true,
    readMoreHref: undefined,
  },
  {
    name: 'Yeo Zhi En',
    profileImage: yeoZhien,
    description:
      'Zhi En is a chemistry undergraduate at NUS. He is an aspiring educator in the field of chemistry who seeks to actively contribute back to the society.',
    isAlumni: true,
    readMoreHref: undefined,
  },
]
