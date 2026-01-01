// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Analytics } from "@vercel/analytics/react"
// import ScrollToTop from "./components/ScrollToTop"
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Courses from './pages/Courses'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Admissions from './pages/Admissions'
// import Blog from './pages/Blog'

// function App() {
//   return (
//     <>   
//       <ScrollToTop />
       
//      <Router>
    
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/admissions" element={<Admissions />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </AnimatePresence>
//         <Footer />
//       </div>
//     </Router>

//      <Analytics />
//     </>

//   )
// }

// export default App




import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Admissions from './pages/Admissions'
import Blog from './pages/Blog'

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  )
}

export default App