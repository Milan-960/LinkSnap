import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Redirect() {
  const { code } = useParams<{ code: string }>()
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const storedUrl = code ? localStorage.getItem(code) : null
    if (storedUrl) {
      window.location.href = storedUrl
    } else {
      setNotFound(true)
    }
  }, [code])

  if (notFound) {
    return (
      <div className="mt-20 text-center text-red-600">
        <h1 className="text-2xl font-bold">404 - Link not found</h1>
        <p className="mt-2">
          The shortened link you tried to access does not exist.
        </p>
      </div>
    )
  }

  return null // While redirecting
}
