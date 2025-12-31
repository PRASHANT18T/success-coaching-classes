import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Heart,
  GraduationCap,
  TrendingUp,
  Clock
} from 'lucide-react'

const About = () => {
  const milestones = [
    { year: "2010", title: "Founded", desc: "Started with 50 students" },
    { year: "2013", title: "Expansion", desc: "Opened 2nd branch" },
    { year: "2016", title: "1000+ Students", desc: "Reached milestone" },
    { year: "2019", title: "Digital Platform", desc: "Launched learning app" },
    { year: "2022", title: "2500+ Students", desc: "Current strength" },
    { year: "2024", title: "95% Success", desc: "Record results" },
  ]

  const team = [
    { name: "Prof. Rajesh Kumar", role: "Director & Maths Expert", exp: "15+ years", qual: "M.Tech IIT Delhi" },
    { name: "Dr. Priya Sharma", role: "Academic Head - Science", exp: "12+ years", qual: "Ph.D. in Physics" },
    { name: "Ms. Anjali Mehta", role: "Chemistry HOD", exp: "10+ years", qual: "M.Sc. Chemistry" },
    { name: "Mr. Amit Patel", role: "Biology Expert", exp: "8+ years", qual: "M.Sc. Biotechnology" },
    { name: "Ms. Sneha Singh", role: "English & SST", exp: "7+ years", qual: "MA English" },
    { name: "Mr. Vikram Desai", role: "Commerce Faculty", exp: "9+ years", qual: "CA, M.Com" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Success Coaching Classes
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering students from Class 4 to 12 with quality education since 2010
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To provide affordable, quality education that empowers every student 
                    to achieve academic excellence and develop into confident, responsible individuals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To become the most trusted coaching institute by delivering 
                    exceptional results and nurturing future leaders through innovative 
                    teaching methodologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop" 
              alt="Classroom"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600">From humble beginnings to excellence</p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2"></div>
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white"></div>
                  </div>
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                      <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                      <h3 className="font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Faculty</h2>
          <p className="text-gray-600">Dedicated educators with proven track records</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {member.exp}
                </span>
                <span>{member.qual}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-blue-100">Guiding principles that define our approach</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart />, title: "Student First", desc: "Individual attention and care" },
              { icon: <Award />, title: "Excellence", desc: "Striving for best results" },
              { icon: <BookOpen />, title: "Innovation", desc: "Modern teaching methods" },
              { icon: <Users />, title: "Community", desc: "Supportive learning environment" },
              { icon: <GraduationCap />, title: "Integrity", desc: "Honest and transparent" },
              { icon: <Target />, title: "Growth", desc: "Continuous improvement" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About