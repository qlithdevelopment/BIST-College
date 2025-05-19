import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Events", href: "#" },
    { name: "News", href: "#" },
    { name: "Gallery", href: "#" }
  ];
  
  const courses = [
    { name: "B.Sc Computer Science", href: "#" },
    { name: "M.Sc Data Science", href: "#" },
    { name: "BCA", href: "#" },
    { name: "MCA", href: "#" },
    { name: "B.Tech Computer Engineering", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* College Description */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">B</span>
              </div>
              <h2 className="text-2xl font-bold">BIST College</h2>
            </div> */}
            <img src="https://bistbbsr.com/wp-content/uploads/2022/04/Untitled-design-35.png" alt="logo" className="w-20"/>
            <p className="text-gray-300 text-sm leading-relaxed">
              BIST College is dedicated to providing quality education and
              fostering academic excellence through innovation and discipline,
              preparing students for global challenges.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                onMouseEnter={() => setHoveredLink('facebook')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Facebook size={18} className={hoveredLink === 'facebook' ? 'animate-pulse' : ''} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                onMouseEnter={() => setHoveredLink('instagram')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Instagram size={18} className={hoveredLink === 'instagram' ? 'animate-pulse' : ''} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                onMouseEnter={() => setHoveredLink('linkedin')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Linkedin size={18} className={hoveredLink === 'linkedin' ? 'animate-pulse' : ''} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:h-5 before:w-1 before:bg-blue-600 before:rounded">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-1 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:h-5 before:w-1 before:bg-blue-600 before:rounded">
              Courses
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href} 
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    onMouseEnter={() => setHoveredLink(`course-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-1 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:h-5 before:w-1 before:bg-blue-600 before:rounded">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li 
                className="flex items-center gap-3 hover:text-blue-400 transition-all duration-300"
                onMouseEnter={() => setHoveredLink('phone')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone size={16} className={`text-blue-500 ${hoveredLink === 'phone' ? 'animate-pulse' : ''}`} />
                </div>
                +91 12345 67890
              </li>
              <li 
                className="flex items-center gap-3 hover:text-blue-400 transition-all duration-300"
                onMouseEnter={() => setHoveredLink('mail')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail size={16} className={`text-blue-500 ${hoveredLink === 'mail' ? 'animate-pulse' : ''}`} />
                </div>
                info@bistcollege.edu.in
              </li>
              <li 
                className="flex items-center gap-3 hover:text-blue-400 transition-all duration-300"
                onMouseEnter={() => setHoveredLink('address')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin size={16} className={`text-blue-500 ${hoveredLink === 'address' ? 'animate-pulse' : ''}`} />
                </div>
                123 College Road, Tech City, India
              </li>
              <li 
                className="flex items-center gap-3 hover:text-blue-400 transition-all duration-300"
                onMouseEnter={() => setHoveredLink('hours')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Clock size={16} className={`text-blue-500 ${hoveredLink === 'hours' ? 'animate-pulse' : ''}`} />
                </div>
                Mon-Sat: 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold">Subscribe to Newsletter</h4>
              <p className="text-gray-400 text-sm mt-1">Stay updated with our latest news and events</p>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400 space-y-1">
          <p>© {new Date().getFullYear()} BIST College. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.qlith.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              onMouseEnter={() => setHoveredLink('qlith')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Qlith Innovation Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;