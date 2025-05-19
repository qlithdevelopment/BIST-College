import React from "react";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const courses = [
  {
    id: 1,
    title: "+2 Science Program",
    description:
      "Comprehensive two-year curriculum covering Physics, Chemistry, Mathematics, and Biology, designed to strengthen academic fundamentals and prepare students for competitive exams.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?semt=ais_hybrid&w=740",
    duration: "2 Years",
    seats: "128 Seats",
  },
  {
    id: 2,
    title: "+2 Commerce Program",
    description:
      "Business-focused education with core subjects like Accountancy, Economics, and Business Studies — perfect for aspiring entrepreneurs, economists, and commerce graduates.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsXhnkQpf6RKgMrb-Da5u8V18ZF5SSo_bMQ&s",
    duration: "2 Years",
    seats: "96 Seats",
  },
];

export default function Courses() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-14">
       <MotionWrapper type="fadeRight" className="text-4xl font-bold text-blue-800 mb-8 text-center">
       Academic Programs We Offer
       </MotionWrapper>
        <MotionWrapper
          className="text-gray-600 text-lg md:text-xl w-full md:w-3/5 mx-auto"
        >
          At BIST, we foster an environment where students thrive academically and personally — building a future rooted in knowledge, curiosity, and ambition.
        </MotionWrapper>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <MotionWrapper
            key={course.id}
            custom={index}
            type={index==0?"fadeLeft":"fadeRight"}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl "
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{course.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-sm mt-4">
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <Users className="w-5 h-5" />
                  <span>{course.seats}</span>
                </div>
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
