import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Target,
  Award,
  Brain,
  Calculator,
  Microscope,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      category: "Foundation (4-8)",
      courses: [
        { name: "Class 4-5 All Subjects", duration: "1 Year", students: "100+", icon: <Brain /> },
        { name: "Class 6-8 Maths & Science", duration: "1 Year", students: "150+", icon: <Calculator /> },
        { name: "Class 6-8 English & SST", duration: "1 Year", students: "120+", icon: <BookOpen /> },
        { name: "Olympiad Foundation", duration: "1 Year", students: "80+", icon: <Award /> },
      ]
    },
    {
      category: "Boards (9-10)",
      courses: [
        { name: "Class 9 CBSE/ICSE", duration: "1 Year", students: "200+", icon: <Target /> },
        { name: "Class 10 Board Prep", duration: "1 Year", students: "250+", icon: <TrendingUp /> },
        { name: "NTSE Preparation", duration: "1 Year", students: "50+", icon: <Award /> },
        { name: "Foundation for JEE/NEET", duration: "1 Year", students: "100+", icon: <Microscope /> },
      ]
    },
    {
      category: "Senior (11-12)",
      courses: [
        { name: "Class 11 Science (PCM)", duration: "2 Years", students: "150+", icon: <Calculator /> },
        { name: "Class 11 Science (PCB)", duration: "2 Years", students: "120+", icon: <Microscope /> },
        { name: "Class 11-12 Commerce", duration: "2 Years", students: "100+", icon: <TrendingUp /> },
        { name: "Class 12 Board Special", duration: "1 Year", students: "180+", icon: <Target /> },
      ]
    },
    {
      category: "Competitive",
      courses: [
        { name: "JEE Main & Advanced", duration: "2 Years", students: "80+", icon: <Award /> },
        { name: "NEET UG Preparation", duration: "2 Years", students: "70+", icon: <Microscope /> },
        { name: "MHT-CET Crash Course", duration: "6 Months", students: "60+", icon: <Clock /> },
        { name: "Olympiad Advanced", duration: "1 Year", students: "40+", icon: <Brain /> },
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Courses & Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive coaching programs for Classes 4-12 with specialization in 
            Board Exams, JEE, NEET, Olympiads and other competitive exams
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {courses.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: catIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                {catIndex === 0 ? <Brain /> : 
                 catIndex === 1 ? <Target /> : 
                 catIndex === 2 ? <TrendingUp /> : <Award />}
              </div>
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                      {course.icon}
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">
                      {course.students}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {course.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      Regular Tests
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      Doubt Sessions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      Study Material
                    </li>
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-bold transition-all duration-300">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 my-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What's Included in Every Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Study Material", desc: "Comprehensive notes & question banks" },
              { title: "Test Series", desc: "Regular tests with performance analysis" },
              { title: "Doubt Support", desc: "24/7 doubt resolution via app" },
              { title: "Parent Updates", desc: "Regular progress reports for parents" },
              { title: "Digital Resources", desc: "Access to video lectures & e-books" },
              { title: "Career Guidance", desc: "Expert counseling for future planning" },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Courses