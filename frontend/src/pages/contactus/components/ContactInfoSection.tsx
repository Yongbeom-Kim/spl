import { Callout } from '@/components/page-section/containers/callout/Callout'
import { Section } from '@/components/page-section'
import { FullScreenHeaderOnlySection } from '@/components/page-section/containers/layout/FullScreenHeaderOnlySection'

export const ContactInfoSection = () => {
  return (
    <FullScreenHeaderOnlySection
      header="Opportunities"
      align_header="left"
      variant="light"
      width="wide"
      height={'fit-content'}
    >
      <Section.H3>
        Want to join us or collaborate with us?
        <br />
        Let us know more about you!
      </Section.H3>

      <Section.P>
        Please get in touch if you are interested in joining the group as we are
        always looking for talented and motivated people to collaborate in
        external fund applications.
      </Section.P>

      <Section.H3>Post-Doc / Research Associate Positions:</Section.H3>
      <Section.P>
        If you are interested in joining the group as a PDRA, there are a number
        of personal fellowships we could leverage, some are reported below:
      </Section.P>
      <Section.Ul>
        <Section.Li>
          <Section.A
            href="https://research.ie/funding/goipd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irish Research Council Government of Ireland Postdoctoral Fellowship
          </Section.A>
        </Section.Li>
        <Section.Li>
          <Section.A
            href="https://research.ie/funding/eps-postdoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enterprise Partnership Scheme (Postdoctoral)
          </Section.A>
        </Section.Li>
        <Section.Li>
          <Section.A
            href="https://royalsociety.org/grants-schemes-awards/grants/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Royal Society Fellowship
          </Section.A>
        </Section.Li>
        <Section.Li>
          <Section.A
            href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marie Skłodowska-Curie Individual Postdoctoral Fellowship
          </Section.A>
        </Section.Li>
      </Section.Ul>
      <Section.Callout variant="blue">
        Please mention which fellowship you would like to apply to when
        contacting Fun Man.
      </Section.Callout>

      <Section.H3>PhD Studentships:</Section.H3>
      <Section.P>
        We welcome enquiry by email from potential PhD students from the Europe,
        UK, and around the world who have (or are about to obtain) a good
        undergraduate degree in Chemistry or a closely related subject.
      </Section.P>

      <Callout variant="red">
        <Section.Strong>Note:</Section.Strong> if your nationality is from a
        country outside the EU or the UK, you are classed as an overseas student
        and will normally have to provide your own funding sources for
        subsistence and fees.
        <br />
        <br />
        Nevertheless, there are opportunities for you to take up part-time work
        at the school as Demonstrator to supplement your daily expenses.
      </Callout>

      <Section.H3>Update [10/10/2024]</Section.H3>
      <Section.P>
        There are no funded vacancies at this time. However, we are always happy
        to hear from prospective interns, masters, PhD students and post-docs.
      </Section.P>
      <Section.P>
        If you are interested in applying for funding to work with us then we
        may be able to help submit a competitive application. Please get in
        touch via email to discuss. Details of some potential schemes are given
        below.
      </Section.P>
      <Section.H4>PhD Students:</Section.H4>
      <Section.Ul>
        <Section.Li>Irish Research Council</Section.Li>
        <Section.Li>China Scholarship Council</Section.Li>
      </Section.Ul>
      <Section.H4>Post-Doctoral Fellows:</Section.H4>
      <Section.Ul>
        <Section.Li>Irish research Council</Section.Li>
        <Section.Li>Marie-Curie Actions</Section.Li>
      </Section.Ul>
      <Section.H4>Internships:</Section.H4>
      <Section.Ul>
        <Section.Li>ERASMUS+</Section.Li>
        <Section.Li>Royal Society of Chemistry</Section.Li>
      </Section.Ul>
    </FullScreenHeaderOnlySection>
  )
}
