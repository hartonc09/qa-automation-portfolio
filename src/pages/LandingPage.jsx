import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <main data-testid="landing-page" className="bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Test Automation <span className="text-indigo-600">Portfolio</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Showcasing my test automation expertise, projects, and learnings. Explore real-world testing strategies, automation frameworks, and insights from my experience building robust testing solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  Explore Test Area
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Read My Learnings
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="h-3 w-24 bg-indigo-300 rounded"></div>
                    <div className="h-3 w-32 bg-indigo-200 rounded"></div>
                    <div className="space-y-3 pt-4">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                        <div className="h-3 flex-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                        <div className="h-3 flex-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                        <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What I've Built</h2>
            <p className="mt-4 text-lg text-gray-600">Demonstrating my testing automation capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Automation Frameworks</h3>
              <p className="mt-2 text-gray-600">Experience with Playwright, Selenium, Jest, and more</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Test Automation Showcase</h3>
              <p className="mt-2 text-gray-600">Interactive test area demonstrating my automation skills</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Testing Strategy</h3>
              <p className="mt-2 text-gray-600">My approach to building effective test suites</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Continuous Learning</h3>
              <p className="mt-2 text-gray-600">Sharing my journey and discoveries in testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Learnings & Insights</h2>
            <p className="mt-4 text-lg text-gray-600">Documenting my journey through test automation</p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Read My Blog
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let's Connect</h2>
          <p className="mt-4 text-lg text-indigo-100">
            Explore my test automation projects, methodologies, and shared learnings. Feel free to reach out with feedback or collaboration opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Link
              to="/store"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              Explore My Work
            </Link>
            <a
              href="mailto:hartonc09@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
