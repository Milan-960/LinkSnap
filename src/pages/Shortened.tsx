import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { JSX } from 'react'
import { generateUniqueCode } from '../utils/generateCode'

// In-memory URL store for demo (replace with database in production)
const urlStore = new Map<string, string>()

export default function Shortener() {
  const { code } = useParams<{ code: string }>()
  const [longUrl, setLongUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    // Basic URL validation
    try {
      new URL(longUrl)
    } catch {
      setError('Please enter a valid URL')
      return
    }

    // Generate unique code
    const shortCode = generateUniqueCode()
    urlStore.set(shortCode, longUrl) // Store mapping
    navigate(`/go/${shortCode}`) // Redirect to shortened URL page
  }

  const shortUrl: string | null = code
    ? `${window.location.origin}/go/${code}`
    : null
  const originalUrl: string | undefined = code ? urlStore.get(code) : undefined

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <motion.div
        className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-6">
          {!code ? (
            <>
              <h2 className="mb-4 text-center text-2xl font-bold text-indigo-700">
                Shorten Your URL
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="url"
                  value={longUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLongUrl(e.target.value)
                  }
                  placeholder="Enter your URL"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-md transition hover:from-purple-700 hover:to-indigo-700"
                >
                  Shorten URL
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="mb-4 text-center text-2xl font-bold text-indigo-700">
                Your Short Link
              </h2>
              <div className="text-center">
                {shortUrl && (
                  <Link
                    to={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-lg font-medium text-indigo-600 underline"
                  >
                    {shortUrl}
                  </Link>
                )}
                {originalUrl && (
                  <p className="mt-2 text-sm text-gray-600">
                    Redirects to:{' '}
                    <a
                      href={originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      {originalUrl}
                    </a>
                  </p>
                )}
              </div>
              <Link
                to="/"
                className="mt-6 block w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-center font-medium text-white shadow-md transition hover:from-purple-700 hover:to-indigo-700"
              >
                Shorten Another URL
              </Link>
            </>
          )}
        </div>

        <div className="justify酷ܴ flex justify-center space-x-4 bg-gray-50 px-6 py-3 text-sm">
          <Feature icon="secure" label="Secure" />
          <Feature icon="bolt" label="Fast" />
          <Feature icon="clock" label="Reliable" />
        </div>
      </motion.div>
    </div>
  )
}

function Feature({
  icon,
  label,
}: {
  icon: 'secure' | 'bolt' | 'clock'
  label: string
}) {
  const icons: Record<string, JSX.Element> = {
    secure: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 h-4 w-4 text-green-500"
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
    ),
    bolt: (
      <svg
        className="mr-1 h-4 w-4 text-green-500"
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
    ),
    clock: (
      <svg
        className="mr-1 h-4 w-4 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  }

  return (
    <div className="flex items-center">
      {icons[icon]}
      <span>{label}</span>
    </div>
  )
}
