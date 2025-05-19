import React from "react";
import NoticeBoard from "./NoticeBoard";

const FoundersSection = () => {
  const notices = [
    {
      date: "25, Mar 2024",
      title:
        "Summer Course Admission for +2 Science going on for the session 2025-2026.",
      detail:
        "For more, please contact: +91 73288 46800 / 9238330915. Hurry, Limited Seats Available.",
    },
    {
      date: "29, May 2024",
      title: "SUBHAM MOHARANA (BCCST Topper) +2 Science Secured 90.02%",
      detail:
        "Total Students of +2 Science - 161 | 1st Division - 139 | 2nd Division - 22 | +2 Commerce all Students 1st Division",
    },
    {
      date: "29, May 2024",
      title: "SUBHAM MOHARANA (BCCST Topper) +2 Science Secured 90.02%",
      detail:
        "Total Students of +2 Science - 161 | 1st Division - 139 | 2nd Division - 22 | +2 Commerce all Students 1st Division",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Left Side - Image */}
      <div className="w-full h-full flex justify-center">
        <img
          src="https://res.cloudinary.com/df9p9f2o2/image/upload/v1747211074/Frame_1000015046_po2ufh.png"
          alt="BCCST Founder"
          className="w-full"
        />
      </div>

      {/* Middle - Combined Message */}
      {/* Middle - Combined Message */}
      <div className="text-gray-800 leading-relaxed text-justify">
        <h2 className="text-2xl font-bold text-primary mb-4">
          From the Founders
        </h2>
        <p>
          No one can take away the power of true learning.” At Bharat Institute
          of Science and Technology (BIST), we believe education is not just
          preparation for life—it is life itself. With a vision to ignite young
          minds, we are committed to providing high-quality, all-round education
          that nurtures discipline, character, and academic excellence. Our
          modern infrastructure, experienced faculty, and value-driven
          environment equip students to thrive in an ever-evolving world. We aim
          to bridge the gap between a student’s potential and their achievements
          by offering personalized support, fostering curiosity, and promoting
          lifelong learning. At BIST, we prepare our students not only for
          successful careers but also to become responsible and enlightened
          citizens of tomorrow.
        </p>
        <div className="mt-4 text-sm italic text-primary">
          – Er. Deepak Kumar Sahoo (Chairman), Er. Anshuman Pattanayak
          (Secretary-Cum-Managing Director), Mr. Ashis Kumar Bhattacharjee
          (Principal)
        </div>
        
      </div>

      {/* Right - Notice Board */}
      <div>
        <NoticeBoard />
      </div>
    </section>
  );
};

export default FoundersSection;
