import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Shortened from './pages/Shortened'
import Redirect from './pages/Redirect'
import NotFound from './pages/NotFound'
import About from './pages/About'
import History from './pages/History'
import Layout from './layout/Layout'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shortened/:code" element={<Shortened />} />
          <Route path="/go/:code" element={<Redirect />} />
          <Route path="/about" element={<About />} />
          <Route path="/link-history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes without layout */}
        {/* <Route path="/go/:code" element={<Redirect />} /> */}
      </Routes>
    </AnimatePresence>
  )
}
