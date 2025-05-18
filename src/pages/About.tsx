import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About LinkSnap
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-3xl text-xl text-indigo-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We're on a mission to make the web more accessible by providing
            simple, fast, and reliable link shortening services.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-indigo-500"></div>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                How It All Started
              </h3>
              <p className="mb-4 text-gray-600">
                LinkSnap was born from a simple idea: to make sharing links
                easier and more efficient. In the digital age where attention
                spans are short and character counts matter, we saw the need for
                a reliable link shortening service.
              </p>
              <p className="text-gray-600">
                Founded in 2025, our small team of developers and designers set
                out to create a platform that not only shortens URLs but also
                provides valuable insights and analytics to our users.
              </p>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex h-64 items-center justify-center bg-indigo-100">
                <span className="text-6xl">🔗</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-indigo-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Trust</h3>
              <p className="text-gray-600">
                Building a secure and reliable platform that users can trust
                with their links and data.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
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
              <h3 className="mb-2 text-xl font-semibold">Simplicity</h3>
              <p className="text-gray-600">
                Creating an intuitive experience that makes link shortening
                quick and hassle-free.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
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
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our platform with new features that help
                users get more from their links.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-indigo-500"></div>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Meet the passionate individuals behind LinkSnap who are dedicated
              to building the best link shortening experience for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-gray-200">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="mx-auto mb-4 h-48 w-48 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Milan Sachani </h3>
              <p className="text-indigo-600">Co-Founder & Developer</p>
              <p className="mt-2 text-gray-600">
                Passionate about creating intuitive and useful web applications.
              </p>
            </div>
            {/* {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-gray-200"></div>
                <h3 className="text-xl font-semibold">Team Member {i}</h3>
                <p className="text-indigo-600">Co-Founder & Developer</p>
                <p className="mt-2 text-gray-600">
                  Passionate about creating intuitive and useful web
                  applications.
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-indigo-100">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="mt-8">
            <a
              href="mailto:info@linksnap.com"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
