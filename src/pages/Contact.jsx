import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentClass: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      studentClass: '',
      message: ''
    })
  }

  const contactInfo = [
    { icon: <Phone />, title: "Phone Number", details: ["+91 98765 43210", "+91 87654 32109"], action: "tel:+919876543210" },
    { icon: <Mail />, title: "Email Address", details: ["info@successcoaching.com", "admissions@successcoaching.com"], action: "mailto:info@successcoaching.com" },
    { icon: <MapPin />, title: "Our Location", details: ["First Floor, Edu Complex", "Sector 15, Kharghar", "Navi Mumbai - 410210"], action: "https://maps.google.com" },
    { icon: <Clock />, title: "Office Hours", details: ["Mon-Sat: 7:00 AM - 8:00 PM", "Sunday: 9:00 AM - 2:00 PM"], action: null },
  ]

  const branches = [
    { location: "Kharghar", address: "Sector 15, Near Railway Station", phone: "+91 98765 43210" },
    { location: "Vashi", address: "Sector 17, Near APMC Market", phone: "+91 87654 32109" },
    { location: "Panvel", address: "Sector 10, Near City Center", phone: "+91 76543 21098" },
  ]

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
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for admission inquiries, demo classes, or any questions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you with your academic journey. 
                  Reach out to us for any queries or schedule a free demo class.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        {info.action && (
                          <a 
                            href={info.action}
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mt-2"
                          >
                            Contact Now →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Branches */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Branches</h3>
                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-bold text-gray-800">{branch.location}</h4>
                      <p className="text-gray-600 text-sm">{branch.address}</p>
                      <p className="text-blue-600 font-medium">{branch.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-4">
                  <MessageSquare />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Student's Class *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                      value={formData.studentClass}
                      onChange={(e) => setFormData({...formData, studentClass: e.target.value})}
                    >
                      <option value="">Select Class</option>
                      <option value="4-5">Class 4-5</option>
                      <option value="6-8">Class 6-8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>We respect your privacy and will never share your information</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl"
                >
                  <Send className="mr-2" />
                  Send Message
                </button>
              </form>

              {/* Quick Actions */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a 
                    href="tel:+919876543210" 
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-xl text-center transition-colors duration-300"
                  >
                    <div className="font-bold mb-1">Call Now</div>
                    <div className="text-sm">For Immediate Assistance</div>
                  </a>
                  <a 
                    href="#" 
                    className="bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-xl text-center transition-colors duration-300"
                  >
                    <div className="font-bold mb-1">Book Demo</div>
                    <div className="text-sm">Free Trial Class</div>
                  </a>
                  <a 
                    href="#" 
                    className="bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-xl text-center transition-colors duration-300"
                  >
                    <div className="font-bold mb-1">Visit Center</div>
                    <div className="text-sm">Schedule Campus Tour</div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact