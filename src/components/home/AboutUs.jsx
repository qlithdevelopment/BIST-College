import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-50 py-16 px-4 md:px-10 overflow-hidden">
      <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        About Us: Nurturing Excellence at BIST
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-gray-700 text-lg mb-6">
            At <strong>BIST</strong>, we believe in a transformative approach to
            learning where curiosity and creativity thrive. Located in the heart
            of Bhubaneswar, our residential campus offers a vibrant and
            collaborative environment, setting the foundation for personal and
            academic growth.
          </p>

          {/* Features with animation */}
          <div className="space-y-6 mb-6">
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              className="flex items-start space-x-6"
            >
              <div className="bg-white p-4 rounded-xl shadow-md hover:bg-primary/10 transition-all duration-300">
                <BookOpen className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">
                  Academic Excellence
                </h4>
                <p className="text-base text-gray-600">
                  Affiliated with Utkal University, we excel in preparing
                  students for a bright future in +2 Science education.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              className="flex items-start space-x-6"
            >
              <div className="bg-white p-4 rounded-xl shadow-md hover:bg-primary/10 transition-all duration-300">
                <Users className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">
                  Residential Campus
                </h4>
                <p className="text-base text-gray-600">
                  Our vibrant campus promotes independence, friendship, and
                  holistic development.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              className="flex items-start space-x-6"
            >
              <div className="bg-white p-4 rounded-xl shadow-md hover:bg-primary/10 transition-all duration-300">
                <Lightbulb className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">
                  Innovation & Growth
                </h4>
                <p className="text-base text-gray-600">
                  Fostering a culture of creativity, leadership, and continuous
                  personal growth.
                </p>
              </div>
            </motion.div>
          </div>

        
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/df9p9f2o2/image/upload/v1747239746/About_pytoxd.png"
            alt="Students at BIST"
            className=" w-full object-cover"
          />
        </motion.div>
      </div>

        {/* Know More Button with hover effect */}
        <motion.div variants={fadeInUp} custom={0.8} className="flex justify-center mt-8">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Know More
            </button>
          </motion.div>
    </section>
  );
}
