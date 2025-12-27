import { createFileRoute } from '@tanstack/react-router'
import { ContactUsPage } from '@/pages/contactus/ContactUsPage'

export const Route = createFileRoute('/contactus/')({
  component: ContactUsPage,
})
