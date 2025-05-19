import React from "react";
import {
  Building2,
  Leaf,
  BookOpen,
  Bus,
  BedDouble,
  Settings,
  Users,
  HeartPulse,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

export default function Facilities() {
  const facilities = [
    {
      icon: <Leaf className="text-green-600 w-6 h-6" />,
      title: "Green Campus",
      description:
        "Experience learning in a serene, eco-friendly environment surrounded by nature.",
    },
    {
      icon: <Building2 className="text-blue-600 w-6 h-6" />,
      title: "Ventilated Classrooms",
      description:
        "Spacious, well-lit classrooms with proper airflow for enhanced focus and comfort.",
    },
    {
      icon: <BookOpen className="text-indigo-600 w-6 h-6" />,
      title: "Books & Library",
      description:
        "Access to a rich collection of academic and non-academic resources.",
    },
    {
      icon: <Settings className="text-yellow-600 w-6 h-6" />,
      title: "Laboratory",
      description:
        "Fully equipped labs supporting practical and experimental learning.",
    },
    {
      icon: <Bus className="text-orange-600 w-6 h-6" />,
      title: "Transportation",
      description:
        "Safe and reliable transportation facilities for students from nearby areas.",
    },
    {
      icon: <HeartPulse className="text-red-600 w-6 h-6" />,
      title: "Medical Facility",
      description:
        "On-campus medical support and tie-ups with nearby hospitals for emergencies.",
    },
    {
      icon: <BedDouble className="text-purple-600 w-6 h-6" />,
      title: "Hostel",
      description:
        "Comfortable and secure accommodation for both boys and girls.",
    },
    {
      icon: <Users className="text-pink-600 w-6 h-6" />,
      title: "Training & Placement",
      description:
        "Dedicated cell for skill development and job placements in top companies.",
    },
  ];

  return (
    <section className="bg-primary/10 pb-10">
      {/* Full-width Video */}
      <MotionWrapper type="fadeDown" className="w-full mb-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-64 md:h-[400px] object-cover"
          src="https://videos.pexels.com/video-files/2002527/2002527-hd_1920_1080_30fps.mp4" // Replace with your actual video
        />
      </MotionWrapper>

      {/* Title */}
      <div className="text-center mb-10 px-5 md:px-10 lg:px-20">
        <MotionWrapper
          type="flipInX"
          className="text-4xl font-bold text-primary mb-3 flex justify-center items-center gap-3"
        >
          <Building2 className="text-primary w-8 h-8" /> Our Facilities
        </MotionWrapper>
        <MotionWrapper
          type="flipInY"
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Empowering students with a safe, sustainable, and growth-oriented
          campus experience.
        </MotionWrapper>
      </div>

      {/* Facility Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 ">
        {facilities.map((facility, index) => (
          <MotionWrapper
            key={index}
            type={index % 2 == 0 ? "fadeUp" : "fadeLeft"}
          >
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 space-y-3">
              <div className="flex items-center gap-3">
                {facility.icon}
                <h4 className="text-xl font-semibold text-primary">
                  {facility.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600">{facility.description}</p>
            </div>
          </MotionWrapper>
        ))}
      </div>

      {/* View More Button */}
      <MotionWrapper
        type="fadeUp"
        className="text-center mt-12 px-5 md:px-10 lg:px-20"
      >
        <button class="group relative mx-auto px-6 py-2 flex items-center gap-2 border-none bg-transparent cursor-pointer transition-all duration-200 ease-in-out active:scale-95">
          <span class="relative font-ubuntu text-[18px] font-bold tracking-wide text-[#234567] z-10">
            Know More
          </span>

          <svg
            class="stroke-[#234567] stroke-2 transition-all duration-300 ease-in-out transform -translate-x-1 group-hover:translate-x-0 z-10"
            width="15"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>

          <span class="absolute top-0 left-0 h-[45px] w-[45px] bg-primary/20 rounded-full transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
        </button>
      </MotionWrapper>
    </section>
  );
}
