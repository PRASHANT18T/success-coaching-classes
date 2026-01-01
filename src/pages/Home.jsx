// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Play, 
//   Award, 
//   Users, 
//   BookOpen, 
//   Clock, 
//   CheckCircle,
//   Star,
//   TrendingUp,
//   Target
// } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   const [email, setEmail] = useState('')

//   const features = [
//     { icon: <BookOpen />, title: "Expert Faculty", desc: "IIT/NIT alumni with 10+ years teaching experience" },
//     { icon: <Clock />, title: "Flexible Timing", desc: "Morning & evening batches for student convenience" },
//     { icon: <Users />, title: "Personal Attention", desc: "Small batch size with individual doubt sessions" },
//     { icon: <Award />, title: "Proven Results", desc: "95% success rate in board & competitive exams" },
//   ]

//   const testimonials = [
//     { name: "Rohan Sharma", class: "Class 12 Science", text: "Scored 95% in CBSE Boards. The faculty's guidance was exceptional!", rating: 5 },
//     { name: "Priya Patel", class: "Class 10 Student", text: "Improved from 65% to 92% in one year. Best coaching ever!", rating: 5 },
//     { name: "Amit Kumar", class: "JEE Aspirant", text: "Cleared JEE Main with AIR 1500. The test series was incredibly helpful.", rating: 5 },
//   ]

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-12 lg:mb-0">
//               <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//                   Empowering Future 
//                   <span className="block text-yellow-300">Leaders & Top Achievers</span>
//                 </h1>
//                 <p className="text-xl text-blue-100 mb-8">
//                   Comprehensive coaching for Classes 4-12 with foundation for JEE, NEET & Olympiads. 
//                   Join 2500+ successful students on their academic journey.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link to="/admissions">
//                     <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl">
//                       Join Now
//                     </button>
//                   </Link>
//                   <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
//                     <Play size={20} />
//                     Watch Success Story
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative"
//               >
//                 <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
//                   <img 
//                     src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop" 
//                     alt="Students learning"
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                       Turning Dreams into Reality
//                     </h3>
//                     <div className="space-y-3">
//                       <div className="flex items-center">
//                         <CheckCircle className="text-green-500 mr-3" />
//                         <span>Personalized attention in small batches</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="text-green-500 mr-3" />
//                         <span>Regular tests & performance analysis</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="text-green-500 mr-3" />
//                         <span>Digital learning resources & app access</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-70"></div>
//                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-70"></div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Why Choose Success Coaching?
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               We provide holistic education focusing on conceptual understanding, 
//               problem-solving skills, and overall personality development.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Preview */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Our Comprehensive Programs
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               From foundation classes to competitive exam preparation, we've got you covered
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {[
//               { title: "Foundation (4-8)", desc: "Build strong basics", color: "from-blue-500 to-cyan-500" },
//               { title: "Boards (9-10)", desc: "Excel in CBSE/ICSE", color: "from-purple-500 to-pink-500" },
//               { title: "Senior (11-12)", desc: "JEE/NEET/Commerce", color: "from-green-500 to-emerald-500" },
//             ].map((program, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//                 className={`bg-gradient-to-r ${program.color} text-white p-8 rounded-2xl shadow-xl`}
//               >
//                 <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
//                 <p className="mb-6 opacity-90">{program.desc}</p>
//                 <Link to="/courses">
//                   <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-colors duration-300">
//                     Explore Courses →
//                   </button>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               What Our Students Say
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Hear from our successful students and their parents
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
//                     <p className="text-blue-600 text-sm">{testimonial.class}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ scale: 0.5, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             className="max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Begin Your Success Journey?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Book a free demo class today and experience our teaching methodology
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow duration-300"
//               >
//                 Get Free Demo
//               </button>
//             </form>
//             <p className="text-blue-200 text-sm mt-4">
//               We'll contact you within 24 hours to schedule your demo class
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   )
// }

// export default Home





import { useState, useEffect } from 'react'
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
  Target,
  Sparkles,
  Shield,
  Brain,
  Trophy,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    { 
      icon: <BookOpen />, 
      title: "Expert Faculty", 
      desc: "IIT/NIT alumni with 10+ years teaching experience",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Clock />, 
      title: "Flexible Timing", 
      desc: "Morning & evening batches for student convenience",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Users />, 
      title: "Personal Attention", 
      desc: "Small batch size with individual doubt sessions",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <Award />, 
      title: "Proven Results", 
      desc: "95% success rate in board & competitive exams",
      color: "from-orange-500 to-red-500"
    },
  ]

  const testimonials = [
    { 
      name: "Rohan Sharma", 
      class: "Class 12 Science", 
      text: "Scored 95% in CBSE Boards. The faculty's guidance was exceptional!", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
    },
    { 
      name: "Priya Patel", 
      class: "Class 10 Student", 
      text: "Improved from 65% to 92% in one year. Best coaching ever!", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop"
    },
    { 
      name: "Amit Kumar", 
      class: "JEE Aspirant", 
      text: "Cleared JEE Main with AIR 1500. The test series was incredibly helpful.", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
    },
  ]

  const stats = [
    { value: "2500+", label: "Students Enrolled", icon: <Users /> },
    { value: "95%", label: "Success Rate", icon: <Trophy /> },
    { value: "50+", label: "Expert Faculty", icon: <Award /> },
    { value: "10+", label: "Years Experience", icon: <Clock /> },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you! We'll contact you at ${email}`)
    setEmail('')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 z-10"></div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-50 blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-30 blur-sm"
        />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full mb-6"
                >
                  <Sparkles size={16} />
                  <span className="font-bold">India's #1 Coaching Institute</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="block">Empowering Future</span>
                  <span className="block gradient-text">Leaders & Achievers</span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                  Comprehensive coaching for Classes 4-12 with foundation for JEE, NEET & Olympiads. 
                  Join 2500+ successful students on their academic journey.
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                    >
                      <div className="flex justify-center text-white mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/admissions">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span>Join Now</span>
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play size={20} />
                    <span>Watch Success Story</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image Gallery */}
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop" 
                    alt="Students in classroom"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Interactive Learning Environment</h3>
                    <p className="text-gray-200">Modern classrooms with smart boards & digital tools</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Safe & Secure</div>
                      <div className="text-sm text-gray-600">CCTV Campus</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Sparkles size={16} />
              <span className="font-semibold">Why Choose Us?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transform Your <span className="gradient-text">Academic Journey</span>
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Learning Environment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Modern infrastructure with state-of-the-art facilities for optimal learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Classrooms",
                desc: "Digital boards & audio-visual aids",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop"
              },
              {
                title: "Science Lab",
                desc: "Fully equipped physics, chemistry & biology labs",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop"
              },
              {
                title: "Library",
                desc: "Extensive collection of reference books",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop"
              },
              {
                title: "Computer Lab",
                desc: "Latest computers with high-speed internet",
                image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop"
              },
              {
                title: "Sports Facilities",
                desc: "Indoor & outdoor sports activities",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop"
              },
              {
                title: "Cafeteria",
                desc: "Healthy & hygienic food options",
                image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Star size={16} />
              <span className="font-semibold">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="gradient-text">Students Say</span>
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{testimonial.class}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4 relative pl-4">
                  <span className="absolute left-0 top-0 text-3xl text-blue-200">"</span>
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Parent of {testimonial.name.split(' ')[0]}</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    Verified Student
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Brain size={16} />
              <span className="font-semibold">Start Your Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your <span className="text-yellow-300">Success Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free demo class today and experience our teaching methodology
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 shadow-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                Get Free Demo
              </motion.button>
            </form>
            
            <p className="text-blue-200 text-sm mt-4">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              We'll contact you within 24 hours to schedule your demo class
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
