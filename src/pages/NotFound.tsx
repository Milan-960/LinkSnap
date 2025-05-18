import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
      <p className="text-lg text-gray-600">
        The page or link you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </section>
  )
}
