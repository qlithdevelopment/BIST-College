import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:flex justify-between items-center px-6 py-2 bg-primary text-white border-b border-gray-200 text-sm font-medium">
      
      {/* Left Side: Contact Info + Social Links */}
      <div className="flex items-center flex-wrap gap-4">
        
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <Link to="/contact" className="hover:underline">
            info@bistbbsr.com
          </Link>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <Link to="/contact" className="hover:underline">
            +91 9778083300
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 pl-4">
          <a
            href="https://www.instagram.com/bist_bbsr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.facebook.com/BISTCollege/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://linkedin.com/company/qlithinnovation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://youtube.com/@qlithinnovation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>

      {/* Center: Admission Open */}
      <div className="animate-bg-blink text-white px-6 py-1 rounded hover:opacity-90 transition duration-300">
        <Link to="/admission">Admission Open</Link>
      </div>

      {/* Right Side: Date & Time */}
      <div>
        {dateTime.toLocaleDateString(undefined, {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        | {dateTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default TopBar;


