import React from "react";

const MiddleNav = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white">
      
      {/* Left & Center: Logo + Names */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src="https://bistbbsr.com/wp-content/uploads/2022/04/Untitled-design-35.png"
          alt="Qlith Logo"
          className="w-20 h-20 object-contain"
        />

        {/* Names */}
        <div className="text-left">
          <h1 className="text-2xl font-bold text-primary">
            Bharat Institute of Science & Technology
          </h1>
          <p className="text-md font-bold text-gray-700 mt-2">
          ଭାରତ ଇନ୍‌ଷ୍ଟିଟ୍ୟୁଟ ଅଫ୍ ସାଇଏନ୍ସ ଏଣ୍ଡ ଟେକ୍ନୋଲୋଜି
          </p>
        </div>
      </div>

      {/* Right: Certifications */}
      <div className="flex items-center space-x-4">
        <img
          src="https://bistbbsr.com/wp-content/uploads/2022/04/Untitled-design-35.png"
          alt="ISO Certified"
          className="w-14 h-14 object-contain"
        />
        <img
          src="https://bistbbsr.com/wp-content/uploads/2022/04/Untitled-design-35.png"
          alt="Skill India Certified"
          className="w-14 h-14 object-contain"
        />
      </div>
    </div>
  );
};

export default MiddleNav;
