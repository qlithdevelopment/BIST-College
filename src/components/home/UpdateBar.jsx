import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UpdateBar = () => {
  const content = [
    "2025 batch admission open now",
    "Limited seats available for CS & IT branches",
    "Scholarship test registrations closing soon",
    "Campus placement training starts from June",
    "New hostel facilities available",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className="bg-primary text-white flex items-center gap-4 lg:px-20 md:px-10 px-5 overflow-hidden">
      <button className="bg-red-500 py-3 px-6 text-sm font-medium">Notice</button>
      <div className="relative h-full flex items-center w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base"
          >
            {content[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UpdateBar;
