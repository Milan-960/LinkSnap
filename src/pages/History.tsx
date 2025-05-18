import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LinkHistoryItem {
  code: string
  url: string
  date: string
}

export default function History() {
  const [history, setHistory] = useState<LinkHistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copySuccess, setCopySuccess] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'date' | 'code' | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const historyItems: LinkHistoryItem[] = []

      // Loop through localStorage to find shortened links
      for (let i = 0; i < localStorage.length; i++) {
        const code = localStorage.key(i)
        if (code && code.length === 6) {
          // Simple check to filter out other localStorage items
          const url = localStorage.getItem(code)
          if (url && url.startsWith('http')) {
            historyItems.push({
              code,
              url,
              // Just using current date for demo, in a real app you'd store creation dates
              date: new Date().toLocaleDateString(),
            })
          }
        }
      }

      setHistory(historyItems)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const filteredHistory = history.filter(
    (item) =>
      item.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedHistory = [...filteredHistory].sort((a, b) => {
    if (!sortBy) return 0

    if (sortBy === 'date') {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA
    }

    if (sortBy === 'code') {
      return sortDirection === 'asc'
        ? a.code.localeCompare(b.code)
        : b.code.localeCompare(a.code)
    }

    return 0
  })

  const totalPages = Math.ceil(sortedHistory.length / itemsPerPage)
  const paginatedHistory = sortedHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, itemsPerPage])

  const handleCopyLink = (code: string) => {
    const shortUrl = `${window.location.origin}/go/${code}`
    navigator.clipboard.writeText(shortUrl)

    setCopySuccess(code)
    setTimeout(() => setCopySuccess(null), 2000)
  }

  const handleDelete = (code: string) => {
    localStorage.removeItem(code)
    setHistory(history.filter((item) => item.code !== code))
  }

  const handleClearAll = () => {
    // Only clear URL items, not other localStorage data
    history.forEach((item) => {
      localStorage.removeItem(item.code)
    })
    setHistory([])
  }

  const handleSort = (column: 'date' | 'code') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortDirection('desc')
    }
  }

  // Helper function to truncate long URLs
  const truncateUrl = (url: string, maxLength = 40) => {
    if (url.length <= maxLength) return url
    return url.substring(0, maxLength) + '...'
  }

  // Add a max height to the table container when there are many rows
  // const tableMaxHeight = history.length > 8 ? 'max-h-96' : ''

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-700 py-16 text-white shadow-lg">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Link History
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-3xl text-xl text-indigo-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            View and manage all the links you've shortened
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            {history.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Search and Actions Bar */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="relative max-w-xs flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search links..."
                      className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500">
                      {filteredHistory.length}{' '}
                      {filteredHistory.length === 1 ? 'link' : 'links'} found
                    </p>
                    <button
                      onClick={handleClearAll}
                      className="ml-4 inline-flex items-center rounded-md border border-transparent bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1.5 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Table for all screen sizes with horizontal scroll on mobile */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="sticky top-0 z-10 bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="sticky left-0 z-20 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            <button
                              className="flex items-center focus:outline-none"
                              onClick={() => handleSort('code')}
                            >
                              Short Link
                              {sortBy === 'code' && (
                                <span className="ml-1">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </button>
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Original URL
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            <button
                              className="flex items-center focus:outline-none"
                              onClick={() => handleSort('date')}
                            >
                              Created
                              {sortBy === 'date' && (
                                <span className="ml-1">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </button>
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {paginatedHistory?.map((item) => (
                          <motion.tr
                            key={item.code}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layout
                            className="hover:bg-gray-50"
                          >
                            <td className="sticky left-0 z-10 whitespace-nowrap bg-white px-6 py-4">
                              <a
                                href={`/go/${item.code}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                {window.location.host}/go/{item.code}
                              </a>
                            </td>
                            <td className="max-w-xs truncate px-6 py-4">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:underline"
                                title={item.url}
                              >
                                {truncateUrl(item.url)}
                              </a>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              {item.date}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                              <button
                                onClick={() => handleCopyLink(item.code)}
                                className="mr-4 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                              >
                                {copySuccess === item.code ? (
                                  <>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-1 h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    <span className="hidden sm:inline">
                                      Copied!
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-1 h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                      />
                                    </svg>
                                    <span className="hidden sm:inline">
                                      Copy
                                    </span>
                                  </>
                                )}
                              </button>
                              <button
                                onClick={() => handleDelete(item.code)}
                                className="inline-flex items-center text-red-600 hover:text-red-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                                <span className="hidden sm:inline">Delete</span>
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {/* Items per page dropdown */}
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor="itemsPerPage"
                      className="text-sm text-gray-600"
                    >
                      Items per page:
                    </label>
                    <select
                      id="itemsPerPage"
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {[5, 10, 15, 20, 25].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Page navigation */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`rounded-md px-3 py-1 text-sm ${
                            currentPage === page
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="rounded-lg bg-white py-16 text-center shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-medium text-gray-900">
                  No links found
                </h3>
                <p className="mb-6 text-gray-600">
                  You haven't shortened any links yet. Create your first
                  shortened link now!
                </p>
                <a
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create a Short Link
                </a>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
