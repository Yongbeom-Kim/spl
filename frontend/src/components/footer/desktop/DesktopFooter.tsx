import { footerLinks, footerSocialLinks } from '@/util/const'
import { Link } from '@tanstack/react-router'

export const DesktopFooterSummaryInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-neutral-0 font-main leading-8">
        SENPAI LEARN
      </h2>
      <p className="text-sm text-neutral-300 font-main leading-5">
        Empowering learners through innovative education
      </p>
    </div>
  )
}

export const DesktopFooterLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-neutral-0 font-main leading-6 mb-2">
        Links
      </h3>
      <div className="flex flex-col gap-1.5">
        {footerLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-sm text-neutral-300 hover:text-neutral-0 transition-colors font-main leading-5"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const DesktopFooterSocials = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-neutral-0 font-main leading-6 mb-2">
        Social
      </h3>
      <div className="flex gap-3">
        {footerSocialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-500 transition-colors"
            aria-label={social.name}
          >
            {/* TODO: Social icon placeholder */}
            <span className="text-neutral-0 text-xs font-bold">
              {social.name.charAt(0)}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export const DesktopFooterCopyright = () => {
  return (
    <p className="text-xs text-neutral-500 font-main text-center leading-4">
      © {new Date().getFullYear()} Senpai Learn. All rights reserved.
    </p>
  )
}

export function DesktopFooter() {
  return (
    <footer className="hidden lg:flex bg-neutral-900 w-full px-16 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-around items-start mb-8">
          <DesktopFooterSummaryInfo />
          <DesktopFooterLinks />
          <DesktopFooterSocials />
        </div>

        <DesktopFooterCopyright />
      </div>
    </footer>
  )
}
