import { Link } from '@tanstack/react-router'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-neutral-50 bg-neutral-900 text-neutral-0 base-horizontal-padding base-vertical-padding">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold hover:text-neutral-300 transition-colors"
          >
            SENPAI LEARN
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <nav className="space-y-2">
            <Link
              to="/aboutus"
              className="block hover:text-neutral-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/people"
              className="block hover:text-neutral-300 transition-colors"
            >
              People
            </Link>
            <Link
              to="/projects"
              className="block hover:text-neutral-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/publications"
              className="block hover:text-neutral-300 transition-colors"
            >
              Publications
            </Link>
            <Link
              to="/partners"
              className="block hover:text-neutral-300 transition-colors"
            >
              Partners
            </Link>
            <Link
              to="/news"
              className="block hover:text-neutral-300 transition-colors"
            >
              News
            </Link>
            <Link
              to="/contactus"
              className="block hover:text-neutral-300 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Connect With Us</h3>
          <div className="space-y-2">
            <a
              href="https://twitter.com/SenpaiLearn"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-neutral-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:funman.fung@ucd.ie"
              className="block hover:text-neutral-300 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.youtube.com/channel/UCFC-48DLa41s1etnnTCnqkw"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-neutral-300 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
        <p className="text-sm opacity-80">© SENPAI LEARN {currentYear}</p>
      </div>
    </footer>
  )
}
