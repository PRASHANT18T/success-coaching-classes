import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  BookOpen,
  Users,
  Award,
  Clock
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission Process', path: '/admissions' },
    { name: 'Fee Structure', path: '/admissions#fees' },
    { name: 'Our Results', path: '/about#results' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const courses = [
    'Class 4-5 Foundation',
    'Class 6-8 Middle School',
    'Class 9-10 Board Preparation',
    'Class 11-12 Science (PCM/PCB)',
    'Class 11-12 Commerce',
    'JEE Foundation (8-10)',
    'NEET Foundation (8-10)',
    'Olympiad Preparation',
    'NTSE/KVPY Coaching',
    'Crash Courses'
  ]

  const stats = [
    { icon: <Users />, value: '2500+', label: 'Students Enrolled' },
    { icon: <Award />, value: '95%', label: 'Success Rate' },
    { icon: <BookOpen />, value: '21+', label: 'Courses Offered' },
    { icon: <Clock />, value: '10+', label: 'Years Experience' }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex justify-center text-blue-400 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-10 h-10 text-blue-400" />
              <div>
                <h2 className="text-2xl font-bold">Success Coaching</h2>
                <p className="text-gray-400">Classes</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students from Class 4 to 12 with comprehensive coaching 
              for academic excellence and competitive exam success since 2010.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Our Courses</h3>
            <ul className="space-y-2">
              {courses.slice(0, 6).map((course) => (
                <li key={course}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    • {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">
                  First Floor, Edu Complex, Sector 15, Kharghar, Navi Mumbai - 410210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@successcoaching.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold mb-3">Office Hours</h4>
              <p className="text-gray-400">Mon-Sat: 7:00 AM - 8:00 PM</p>
              <p className="text-gray-400">Sunday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Success Coaching Classes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white">Refund Policy</a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Designed & Developed with ❤️ for student success
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer