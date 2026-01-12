import { createFileRoute } from '@tanstack/react-router'
import { ContactUsPage } from '@/pages/contactus/ContactUsPage'
import { generateSeoMeta } from '@/util/seo'

export const Route = createFileRoute('/contactus/')({
  component: ContactUsPage,
  head: () => {
    return generateSeoMeta({
      title: 'Contact Us | SenpaiLearn | Fung Lab',
      description:
        'Get in touch with SenpaiLearn at Fung Lab. Contact us for inquiries, collaborations, or questions about our educational research.',
      path: '/contactus',
      keywords: [
        'contact',
        'inquiries',
        'collaborations',
        'SenpaiLearn',
        'Fung Lab',
        'contact information',
        'email',
      ],
    })
  },
})
