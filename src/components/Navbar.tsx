import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'History', path: '/link-history' },
  ]

  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
                className="mr-2 text-2xl"
              >
                🔗
              </motion.div>
              <span className="text-xl font-bold">LinkSnap</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-indigo-900 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={"https://github.com/yourusername/react-link-shortener"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-600"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-indigo-100 hover:bg-indigo-600 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-indigo-900 text-white'
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://github.com/yourusername/react-link-shortener"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-base font-medium text-indigo-100 hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
