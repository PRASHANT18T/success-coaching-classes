import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Award, 
  Users, 
  BookOpen, 
  Clock, 
  CheckCircle,
  Star,
  TrendingUp,
  Target
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState('')

  const features = [
    { icon: <BookOpen />, title: "Expert Faculty", desc: "IIT/NIT alumni with 10+ years teaching experience" },
    { icon: <Clock />, title: "Flexible Timing", desc: "Morning & evening batches for student convenience" },
    { icon: <Users />, title: "Personal Attention", desc: "Small batch size with individual doubt sessions" },
    { icon: <Award />, title: "Proven Results", desc: "95% success rate in board & competitive exams" },
  ]

  const testimonials = [
    { name: "Rohan Sharma", class: "Class 12 Science", text: "Scored 95% in CBSE Boards. The faculty's guidance was exceptional!", rating: 5 },
    { name: "Priya Patel", class: "Class 10 Student", text: "Improved from 65% to 92% in one year. Best coaching ever!", rating: 5 },
    { name: "Amit Kumar", class: "JEE Aspirant", text: "Cleared JEE Main with AIR 1500. The test series was incredibly helpful.", rating: 5 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Empowering Future 
                  <span className="block text-yellow-300">Leaders & Top Achievers</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Comprehensive coaching for Classes 4-12 with foundation for JEE, NEET & Olympiads. 
                  Join 2500+ successful students on their academic journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/admissions">
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl">
                      Join Now
                    </button>
                  </Link>
                  <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
                    <Play size={20} />
                    Watch Success Story
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop" 
                    alt="Students learning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Turning Dreams into Reality
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" />
                        <span>Personalized attention in small batches</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" />
                        <span>Regular tests & performance analysis</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" />
                        <span>Digital learning resources & app access</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-70"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Success Coaching?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide holistic education focusing on conceptual understanding, 
              problem-solving skills, and overall personality development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Comprehensive Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From foundation classes to competitive exam preparation, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Foundation (4-8)", desc: "Build strong basics", color: "from-blue-500 to-cyan-500" },
              { title: "Boards (9-10)", desc: "Excel in CBSE/ICSE", color: "from-purple-500 to-pink-500" },
              { title: "Senior (11-12)", desc: "JEE/NEET/Commerce", color: "from-green-500 to-emerald-500" },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${program.color} text-white p-8 rounded-2xl shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="mb-6 opacity-90">{program.desc}</p>
                <Link to="/courses">
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-colors duration-300">
                    Explore Courses →
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from our successful students and their parents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.class}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Success Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free demo class today and experience our teaching methodology
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow duration-300"
              >
                Get Free Demo
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">
              We'll contact you within 24 hours to schedule your demo class
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home