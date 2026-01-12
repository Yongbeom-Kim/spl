import { Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/page-layout/PageLayout'

export function NotFoundComponent() {
  return (
    <PageLayout headerLinksToHomePage={false}>
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-16">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl font-bold md:text-6xl">Page Not Found</h1>
          <p className="mt-6 text-lg md:text-xl">
            The page you requested doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-1 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-blue-600 hover:bg-accent-blue-700 transition-colors duration-200"
          >
            Go home
          </Link>
        </div>
      </main>
    </PageLayout>
  )
}
