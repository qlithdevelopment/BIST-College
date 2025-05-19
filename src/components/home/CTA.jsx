import { useState, useEffect, useRef } from "react";
import { ArrowRight, Users, Award, BookOpen, Building } from "lucide-react";

const CTA = ({ isAuthenticated = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    alumni: 0,
    years: 0
  });
  
  const targetNumbers = {
    students: 5000,
    courses: 42,
    alumni: 10000,
    years: 25
  };
  
  const sectionRef = useRef(null);
  
  // Check if section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        startCounters();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Number counter animation
  const startCounters = () => {
    const duration = 2000; // 2 seconds for the counter animation
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function for smooth counting
      
      setCounters({
        students: Math.floor(easeOutQuart * targetNumbers.students),
        courses: Math.floor(easeOutQuart * targetNumbers.courses),
        alumni: Math.floor(easeOutQuart * targetNumbers.alumni),
        years: Math.floor(easeOutQuart * targetNumbers.years)
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className={`absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400 opacity-10 ${isVisible ? 'animate-pulse-slow' : ''}`}></div>
        <div className={`absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-indigo-400 opacity-10 ${isVisible ? 'animate-pulse-slower' : ''}`}></div>
        
        {/* Animated stripes */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`absolute h-0.5 w-full bg-white opacity-10 transform rotate-${i * 6} ${isVisible ? 'animate-pulse-slow' : ''}`}
              style={{
                top: `${10 + i * 10}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white opacity-20 ${isVisible ? 'animate-float' : ''}`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Stats Section */}
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform duration-500" style={{ animationDelay: '0.3s' }}>
            <Users className="mx-auto h-8 w-8 text-blue-100 mb-3" />
            <div className="text-3xl font-bold text-white">{counters.students.toLocaleString()}+</div>
            <div className="text-sm text-blue-100">Students</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform duration-500" style={{ animationDelay: '0.4s' }}>
            <BookOpen className="mx-auto h-8 w-8 text-blue-100 mb-3" />
            <div className="text-3xl font-bold text-white">{counters.courses}+</div>
            <div className="text-sm text-blue-100">Courses</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform duration-500" style={{ animationDelay: '0.5s' }}>
            <Award className="mx-auto h-8 w-8 text-blue-100 mb-3" />
            <div className="text-3xl font-bold text-white">{counters.alumni.toLocaleString()}+</div>
            <div className="text-sm text-blue-100">Alumni</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform duration-500" style={{ animationDelay: '0.6s' }}>
            <Building className="mx-auto h-8 w-8 text-blue-100 mb-3" />
            <div className="text-3xl font-bold text-white">{counters.years}+</div>
            <div className="text-sm text-blue-100">Years of Excellence</div>
          </div>
        </div>
      </div>
      
      {/* CTA Content */}
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join our institution and be part of our growing academic community where excellence meets opportunity.
        </p>
        <div className="relative inline-block group">
          {isAuthenticated ? (
            <a
              href="/dashboard"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 overflow-hidden relative z-10"
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              <span className="relative z-10">Go to Dashboard</span>
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${hoveredButton ? 'transform translate-x-1' : ''}`} />
            </a>
          ) : (
            <a
              href="/login"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 overflow-hidden relative z-10"
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${hoveredButton ? 'transform translate-x-1' : ''}`} />
            </a>
          )}
          
          {/* Button glow effect */}
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 opacity-70 group-hover:opacity-100 blur transition duration-200 group-hover:duration-200"></div>
        </div>
      </div>
    </section>
  );
};

// Add this to your tailwind.config.js
// extend: {
//   animation: {
//     'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//     'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//     'float': 'float 15s ease-in-out infinite',
//     'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
//   },
//   keyframes: {
//     float: {
//       '0%, 100%': { transform: 'translateY(0)' },
//       '50%': { transform: 'translateY(-20px)' },
//     },
//     fadeInUp: {
//       '0%': { opacity: '0', transform: 'translateY(20px)' },
//       '100%': { opacity: '1', transform: 'translateY(0)' },
//     },
//   },
// }

export default CTA;