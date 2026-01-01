import { Callout } from '@/components/page-sections/components/callout/Callout'
import { FullScreenTextOnlyLayout } from '@/components/page-sections/layout/FullScreenTextOnlyLayout'

export const ContactInfoSection = () => {
  return (
    <FullScreenTextOnlyLayout header="Opportunities" align_header='left'>
      <h3>
        Want to join us or collaborate with us?
        <br />
        Let us know more about you!
      </h3>

      <p>
        Please get in touch if you are interested in joining the group as we are
        always looking for talented and motivated people to collaborate in
        external fund applications.
      </p>

      <h3>Post-Doc / Research Associate Positions:</h3>
      <p>
        If you are interested in joining the group as a PDRA, there are a number
        of personal fellowships we could leverage, some are reported below:
      </p>
      <ul>
        <li>
          <a
            href="https://research.ie/funding/goipd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irish Research Council Government of Ireland Postdoctoral Fellowship
          </a>
        </li>
        <li>
          <a
            href="https://research.ie/funding/eps-postdoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enterprise Partnership Scheme (Postdoctoral)
          </a>
        </li>
        <li>
          <a
            href="https://royalsociety.org/grants-schemes-awards/grants/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Royal Society Fellowship
          </a>
        </li>
        <li>
          <a
            href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marie Skłodowska-Curie Individual Postdoctoral Fellowship
          </a>
        </li>
      </ul>
      <Callout variant="blue">
        Please mention which fellowship you would like to apply to when
        contacting Fun Man.
      </Callout>

      <h3>PhD Studentships:</h3>
      <p>
        We welcome enquiry by email from potential PhD students from the Europe,
        UK, and around the world who have (or are about to obtain) a good
        undergraduate degree in Chemistry or a closely related subject.
      </p>

      <Callout variant="red">
        <strong>Note:</strong> if your nationality is from a country outside the
        EU or the UK, you are classed as an overseas student and will normally
        have to provide your own funding sources for subsistence and fees.
        <br />
        <br />
        Nevertheless, there are opportunities for you to take up part-time work
        at the school as Demonstrator to supplement your daily expenses.
      </Callout>

      <h3>Update [10/10/2024]</h3>
      <p>
        There are no funded vacancies at this time. However, we are always happy
        to hear from prospective interns, masters, PhD students and post-docs.
      </p>
      <p>
        If you are interested in applying for funding to work with us then we
        may be able to help submit a competitive application. Please get in
        touch via email to discuss. Details of some potential schemes are given
        below.
      </p>
      <h4>PhD Students:</h4>
      <ul>
        <li>Irish Research Council</li>
        <li>China Scholarship Council</li>
      </ul>
      <h4>Post-Doctoral Fellows:</h4>
      <ul>
        <li>Irish research Council</li>
        <li>Marie-Curie Actions</li>
      </ul>
      <h4>Internships:</h4>
      <ul>
        <li>ERASMUS+</li>
        <li>Royal Society of Chemistry</li>
      </ul>
    </FullScreenTextOnlyLayout>
  )
}
