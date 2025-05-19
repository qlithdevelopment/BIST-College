import React, { useState, useEffect } from 'react';
import { Quote, Sparkles } from 'lucide-react';

// Feature Flag Configuration
const featureFlags = {
  enableAnimatedBackground: true,
  enableParticleEffects: true,
  enableTestimonialCards3D: true,
  enableSmoothTransitions: true,
  enableHoverEffects: true,
  enableEnhancedRating: true
};

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    image: "https://i.pinimg.com/236x/4e/5b/12/4e5b12898e4d6b7d881ea8a3cefb8ddd.jpg",
    rating: 5,
    text: "The courses offered here completely transformed my learning experience. The instructors are incredibly knowledgeable and the curriculum is cutting-edge. I landed my dream internship thanks to the skills I gained!",
    color: "from-purple-400 to-indigo-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Graduate",
    image: "https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2021/05/Cha-Eun-woo-Most-Handsome-Korean-Actors-2021.jpg",
    rating: 5,
    text: "Joining this program was the best decision I made for my career. The hands-on projects gave me real-world experience that employers value. Within a month of completing my course, I received multiple job offers.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Web Development Student",
    image: "https://i.pinimg.com/736x/bd/69/65/bd6965e3459b99f5cc2c3dd23cd358a9.jpg",
    rating: 4,
    text: "The mentorship program exceeded my expectations. My mentor provided invaluable guidance and feedback on my projects, which helped me build an impressive portfolio. The community support is amazing too!",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "UI/UX Design Student",
    image: "https://i.pinimg.com/736x/24/8a/23/248a2391711ca20aff8b290309c00bb1.jpg",
    rating: 5,
    text: "As someone switching careers, I was worried about keeping up. The structured learning path and supportive instructors made the transition smooth. Now I'm confidently pursuing design opportunities!",
    color: "from-amber-400 to-orange-500",
  },
];

// Enhanced Star Rating with animation when feature flag is enabled
const StarRating = ({ rating, max = 5 }) => {
  return (
    <div className="flex">
      {[...Array(max)].map((_, index) => (
        <div key={index} className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill={index < rating ? "#FBBF24" : "none"} 
            stroke={index < rating ? "#FBBF24" : "#D1D5DB"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-all duration-300 ${
              featureFlags.enableEnhancedRating && index < rating ? 'scale-110' : ''
            }`}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {featureFlags.enableEnhancedRating && index < rating && (
            <div className="absolute -top-1 -right-1">
              <Sparkles size={8} className="text-yellow-400" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Animated background particles component
const ParticleBackground = () => {
  useEffect(() => {
    if (!featureFlags.enableParticleEffects) return;
    
    // Create particles
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position, size and color
      const size = Math.random() * 15 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      // Generate random color from blue palette
      const hue = 200 + Math.random() * 40;
      const lightness = 70 + Math.random() * 20;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      particle.style.backgroundColor = `hsl(${hue}, 70%, ${lightness}%)`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      particleContainer.appendChild(particle);
      
      // Remove particle after some time to prevent memory issues
      setTimeout(() => {
        particle.remove();
      }, (duration + delay) * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 25; i++) {
      createParticle();
    }
    
    // Add new particles periodically
    const particleInterval = setInterval(() => {
      createParticle();
    }, 3000);
    
    return () => {
      clearInterval(particleInterval);
    };
  }, []);
  
  if (!featureFlags.enableParticleEffects) return null;
  
  return <div id="particle-container" className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

const TestimonialCard = ({ name, role, image, rating, text, color, isActive }) => {
  const cardClasses = `
    bg-white rounded-xl shadow-lg p-6 flex flex-col h-full 
    ${featureFlags.enableTestimonialCards3D ? 'testimonial-card' : ''}
    ${featureFlags.enableSmoothTransitions 
      ? 'transform transition-all duration-700 ease-out' 
      : 'transition-all duration-500'}
    ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full absolute scale-95'}
    ${featureFlags.enableHoverEffects ? 'hover:shadow-xl hover:-translate-y-1' : ''}
  `;

  const gradientOverlay = featureFlags.enableTestimonialCards3D 
    ? `bg-gradient-to-br ${color} opacity-10 absolute inset-0 rounded-xl z-0`
    : '';

  return (
    <div className={cardClasses} >
      {featureFlags.enableTestimonialCards3D && <div className={gradientOverlay}></div>}
      <div className="flex items-start mb-4 relative z-10">
        <div className="relative mr-4">
          <img
            src={image}
            alt={name}
            className={`w-16 h-16 rounded-full object-cover border-2 ${
              featureFlags.enableHoverEffects 
                ? `border-transparent bg-gradient-to-r ${color} p-0.5` 
                : 'border-blue-600'
            }`}
          />
          {featureFlags.enableHoverEffects && (
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${color} blur-sm opacity-70 -z-10`}></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mb-1">{role}</p>
          <StarRating rating={rating} />
        </div>
      </div>
      
      <div className="relative mt-2 flex-grow z-10">
        <Quote size={24} className={`text-blue-100 absolute -top-2 -left-1 ${featureFlags.enableHoverEffects ? 'transition-transform group-hover:scale-110' : ''}`} />
        <p className="text-gray-700 italic pl-6 relative z-10 text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Dynamic background classes based on feature flags
  const bgClasses = featureFlags.enableAnimatedBackground
    ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-white animated-bg'
    : 'bg-gradient-to-b from-blue-50 to-white';

  return (
    <section className={`py-16 relative overflow-hidden ${bgClasses}`}>
      {featureFlags.enableParticleEffects && <ParticleBackground />}
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What Students Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover how our programs have transformed the educational journey of our students
            and prepared them for success in their careers.
          </p>
        </div>
        
        <div 
          className="relative h-[300px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="absolute w-full">
              <TestimonialCard
                {...testimonial}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? `w-6 h-3 bg-blue-600 ${featureFlags.enableHoverEffects ? 'shadow-md shadow-blue-300' : ''}`
                  : `w-3 h-3 bg-blue-200 ${featureFlags.enableHoverEffects ? 'hover:bg-blue-300' : ''}`
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .animated-bg {
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .testimonial-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translate(-20px, -100px) rotate(180deg);
            opacity: 0.2;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(-50px, -200px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

// Feature Flag Management Component
const FeatureFlagManager = ({ flags, setFlags }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium mb-3">Feature Flag Controls</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.entries(flags).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <input
              type="checkbox"
              id={key}
              checked={value}
              onChange={() => setFlags(prev => ({ ...prev, [key]: !prev[key] }))}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={key} className="ml-2 text-sm text-gray-700">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

