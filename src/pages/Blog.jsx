import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Prepare for Class 10 Board Exams",
      excerpt: "Effective strategies and timetable for CBSE/ICSE board exam preparation",
      category: "Study Tips",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "JEE vs NEET: Choosing the Right Path",
      excerpt: "Comparative analysis to help students make informed career decisions",
      category: "Career Guidance",
      date: "Mar 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Time Management for School Students",
      excerpt: "Balancing school, coaching, and personal life effectively",
      category: "Productivity",
      date: "Mar 5, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Olympiad Preparation Guide 2024",
      excerpt: "Complete roadmap for Science and Math Olympiad success",
      category: "Competitive Exams",
      date: "Feb 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Parent's Role in Student Success",
      excerpt: "How parents can support their children's academic journey",
      category: "Parenting",
      date: "Feb 20, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Digital Learning Tools for Students",
      excerpt: "Best apps and resources for online learning and revision",
      category: "Technology",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    }
  ]

  const categories = [
    "All Posts",
    "Study Tips",
    "Career Guidance",
    "Competitive Exams",
    "Parenting",
    "Success Stories",
    "Technology"
  ]

  const featuredPost = posts[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Insights, tips, and guidance for academic excellence and career success
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold">
                  Read Full Article
                  <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                  <Clock size={14} className="ml-4 mr-2" />
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Tag className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get weekly study tips, exam updates, and success stories directly in your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Blog