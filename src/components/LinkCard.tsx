import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type Props = {
  code: string
}

export default function LinkCard({ code }: Props) {
  const shortUrl = `${window.location.origin}/go/${code}`

  return (
    <motion.div
      className="w-full max-w-lg rounded-lg bg-white p-6 text-center shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="mb-2 text-lg font-semibold">Here's your short link 👇</h2>
      <a
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words text-blue-600 underline"
      >
        {shortUrl}
      </a>
      <div className="mt-4">
        <Link to="/" className="text-sm text-gray-500 hover:underline">
          🔁 Shorten another
        </Link>
      </div>
    </motion.div>
  )
}
