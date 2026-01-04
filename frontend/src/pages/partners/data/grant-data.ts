export type Grant = {
  period: string
  title: string
  grantNumber: string
  amount?: string
  description?: string
}

export const grantData: Array<Grant> = [
  {
    period: '2023-2024',
    title: 'Chemistry’s Point of View (ChemPOV)',
    grantNumber: 'GAP502022-02-04 under the RIE2025',
    amount: 'SGD $50,000',
  },
  {
    period: '2021-2023',
    title:
      'Supporting Academically Weaker Students by Improving Their Self-Regulation for Online Learning',
    grantNumber: 'EDUN C33-63-102-V1 Co-I',
    amount: 'SGD $277,925',
  },
  {
    period: '2019-2021',
    title: 'Building a Recommender System for Lifelong Learning in Citizens',
    grantNumber: 'PHC MERLION grant Co-I',
    amount: '€ 25,000',
  },
  {
    period: '2018-2020',
    title:
      'A Frontier in Learning Science Educational Research Across Two Nations – Learning to Learn Better (L2LB)',
    grantNumber: '2018-01-EDU/USPC-NUS',
  },
  {
    period: '2018-2020',
    title:
      'VIPER: Virtual reality and Innovative Pedagogy in EnRiched environment',
    grantNumber: '2018-02-EDU/USPC-NUS',
  },
  {
    period: '2017-2018',
    title: 'DS4TOX: Digital Seeds for Toxicology',
    description:
      'Innovative pedagogical ways to use videos and virtual reality environments for teaching and learning',
    grantNumber: '2017-03-T/USPC-NUS',
  },
  {
    period: '2016-2017',
    title: 'iBLOC CM1401 Chemistry for Life Sciences',
    grantNumber: 'C-027-000-068 (Learning Innovation Fund – Technology)',
  },
]
