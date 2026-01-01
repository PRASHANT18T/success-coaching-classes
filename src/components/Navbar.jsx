import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, GraduationCap, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
    setMobileDropdown(false)
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 transform-gpu ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link 
              to="/" 
              onClick={handleNavClick}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-70"></div>
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white leading-tight">Success</span>
                <span className="text-xs md:text-sm text-blue-100 font-medium leading-tight">Coaching Classes</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`relative font-medium transition-all duration-300 px-2 py-1 rounded-lg ${
                  location.pathname === item.path
                    ? 'text-white bg-white/20'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-white rounded-full -bottom-1"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-3"
          >
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Phone size={16} />
              <span className="font-semibold">Call Now</span>
            </a>
            <Link to="/admissions">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md">
                Free Demo
              </button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={28} className="transform rotate-0 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-gradient-to-b from-blue-600 to-purple-600 rounded-xl shadow-xl p-4 mt-2 border border-white/20">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 text-lg ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white shadow-inner'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="flex flex-col space-y-3 mt-6 p-4 bg-white/10 rounded-xl">
              <a
                href="tel:+919876543210"
                onClick={handleNavClick}
                className="flex items-center justify-center space-x-3 bg-white text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <Phone size={20} />
                <span className="font-semibold text-lg">Call Now</span>
              </a>
              <Link to="/admissions" onClick={handleNavClick}>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300">
                  Free Demo Class
                </button>
              </Link>
            </div>

            {/* Quick Contact Mobile */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 gap-2">
                <a href="https://wa.me/919876543210" className="bg-green-500/20 text-white p-3 rounded-lg text-center hover:bg-green-500/30 transition-colors">
                  WhatsApp
                </a>
                <a href="mailto:info@successcoaching.com" className="bg-red-500/20 text-white p-3 rounded-lg text-center hover:bg-red-500/30 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar