import { Section } from '@/components/page-section'
import { grantData } from '../data/grant-data'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'

const FundedGrantProposalsSection = () => {
  return (
    <FullScreenHeaderOnlySection
      variant={'light'}
      width={'narrow'}
      height={'min-fullscreen'}
      header={''}
      align_header={'left'}
    >
      <Section.H2>Funded Grant Proposals</Section.H2>
      <div className="">
        {grantData.map((grant, idx) => (
          <Section.P key={idx} className="font-bold">
            {grant.period}
            {grant.amount && (
              <>
                <br /> {grant.amount}
              </>
            )}
            <br />
            {grant.title}
            <br />
            {grant.grantNumber}
            {grant.description && (
              <>
                <br /> {grant.description}
              </>
            )}
          </Section.P>
        ))}
      </div>
    </FullScreenHeaderOnlySection>
  )
}

const PartnerInstitutionsImageSection = () => {
  return (
    <FullScreenHeaderOnlySection
      variant={'light'}
      width={'narrow'}
      height={'min-fullscreen'}
      header={''}
      align_header={'left'}
			backgroundColor='var(--color-neutral-200)'
    >
      <div className="flex flex-col">
        <img
          src="https://static.wixstatic.com/media/658066_da4edb07d3fc425b9e52aa115def8c4c~mv2.jpg/v1/fill/w_758,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IA_Idex_1920.jpg"
          alt="IA Idex"
          className="my-4 rounded shadow lg:-translate-x-1/3"
        />
        <img
          src="https://static.wixstatic.com/media/658066_57bc9e52435541b98e5ab0f0df7809e6~mv2.jpg/v1/fill/w_758,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/uspc-nus.jpg"
          alt="USPC NUS"
          className="my-4 rounded shadow lg:translate-x-1/3"
        />
        <img
          src="https://static.wixstatic.com/media/658066_68be402fb5154d0bb12abea9583539dd~mv2.jpg/v1/fill/w_758,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/UDP_CRE_case-study_190411b6.jpg"
          alt="UDP CRE case study"
          className="my-4 rounded shadow lg:-translate-x-1/3"
        />
      </div>
    </FullScreenHeaderOnlySection>
  )
}

export const PartnersBodySections = () => {
  return (
    <>
      <FundedGrantProposalsSection />
			<PartnerInstitutionsImageSection />
    </>
  )
}
