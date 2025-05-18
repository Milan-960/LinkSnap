import { motion } from 'framer-motion'
import ShortenerForm from '../components/ShortenerForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
      {/* Hero Section */}
      <section className="px-4 pt-16 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
              Make Your Links Shorter
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              Create shortened URLs that are easy to share, track, and manage
              with our powerful link shortening platform.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-md">
            <ShortenerForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-extrabold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Why Choose LinkSnap?
            </motion.h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Our simple yet powerful URL shortener provides everything you need
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center justify-center rounded-md bg-indigo-100 p-3 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Lightning Fast
                </h3>
                <p className="mt-2 text-gray-500">
                  Generate short links in milliseconds. Share them instantly on
                  any platform or device.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-flex items-center justify-center rounded-md bg-indigo-100 p-3 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Secure & Private
                </h3>
                <p className="mt-2 text-gray-500">
                  Your data is securely stored and never shared with third
                  parties. We respect your privacy.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="inline-flex items-center justify-center rounded-md bg-indigo-100 p-3 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Link Analytics
                </h3>
                <p className="mt-2 text-gray-500">
                  Track your link performance with detailed statistics and
                  analytics on every click.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to shorten your links?
          </motion.h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Join thousands of users who trust LinkSnap for their link shortening
            needs.
          </p>
          <div className="mt-8">
            <motion.a
              href="#top"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
