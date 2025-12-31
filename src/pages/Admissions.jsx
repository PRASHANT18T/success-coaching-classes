import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Clock,
  Users,
  BookOpen,
  DollarSign,
  CheckCircle,
  FileText,
  Award
} from 'lucide-react'

const Admissions = () => {
  const [selectedBatch, setSelectedBatch] = useState('')

  const admissionProcess = [
    { step: 1, title: "Inquiry", desc: "Contact us or fill inquiry form" },
    { step: 2, title: "Counseling", desc: "Academic counseling session" },
    { step: 3, title: "Demo Class", desc: "Attend free demo class" },
    { step: 4, title: "Registration", desc: "Submit required documents" },
    { step: 5, title: "Fee Payment", desc: "Complete admission formalities" },
    { step: 6, title: "Orientation", desc: "Attend orientation program" },
  ]

  const batches = [
    { time: "Morning", schedule: "7:00 AM - 9:00 AM", available: true },
    { time: "School Hours", schedule: "10:00 AM - 1:00 PM", available: true },
    { time: "Evening", schedule: "4:00 PM - 7:00 PM", available: true },
    { time: "Weekend", schedule: "8:00 AM - 12:00 PM", available: true },
  ]

  const documents = [
    "Student's Aadhar Card",
    "Previous Year Marksheet",
    "2 Passport Size Photos",
    "Parent's ID Proof",
    "Address Proof",
    "Transfer Certificate (if applicable)"
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
            Admissions Open 2024-25
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Limited seats available for Classes 4-12. Register now for academic excellence!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Process */}
          <div className="lg:col-span-2">
            {/* Process Steps */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission Process</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {admissionProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Batch Timings */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Batch Timings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {batches.map((batch, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedBatch === batch.time
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedBatch(batch.time)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-600 mr-3" />
                        <h3 className="font-bold text-gray-800">{batch.time}</h3>
                      </div>
                      {batch.available && (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                          Available
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{batch.schedule}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Max 25 students per batch</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Documents Required</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">Note:</span> Bring original documents for verification along with one set of photocopies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Fee & CTA */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              {/* Fee Structure */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Fee Structure</h2>
                    <p className="text-gray-600">Affordable quality education</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { class: "4-8", fee: "₹15,000/year" },
                    { class: "9-10", fee: "₹25,000/year" },
                    { class: "11-12", fee: "₹35,000/year" },
                    { class: "JEE/NEET", fee: "₹45,000/year" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-700">Class {item.class}</span>
                      <span className="font-bold text-gray-800">{item.fee}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Scholarship Available:</span> 
                    For meritorious students and siblings
                  </p>
                </div>
              </div>

              {/* Quick Admission Form */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Quick Admission Inquiry</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:border-white focus:outline-none">
                    <option value="">Select Class</option>
                    <option value="4-5">Class 4-5</option>
                    <option value="6-8">Class 6-8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 rounded-lg transition-colors duration-300"
                  >
                    Request Call Back
                  </button>
                </form>
                <p className="text-white/80 text-sm mt-4 text-center">
                  We'll contact you within 2 hours
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-6">Admission Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Free Study Material Kit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Welcome Kit Worth ₹2000</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Free Demo Classes (3)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Scholarship Test Opportunity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scholarship Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <Award className="w-16 h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Merit-Based Scholarships</h2>
              <p className="mb-6">
                We offer up to 100% scholarship for exceptional students based on 
                scholarship test performance and previous academic records.
              </p>
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors duration-300">
                Apply for Scholarship
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { percent: "100%", desc: "For State/National Rankers" },
                { percent: "75%", desc: "90%+ in Previous Class" },
                { percent: "50%", desc: "85-90% in Previous Class" },
                { percent: "25%", desc: "Sibling Discount" },
              ].map((scholarship, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold mb-2">{scholarship.percent}</div>
                  <div className="text-sm">{scholarship.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Admissions