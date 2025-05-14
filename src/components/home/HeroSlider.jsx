import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';

const HeroSlider = () => {
  const slides = [
    {
      title: 'Welcome to BCT Bhubaneswar',
      subtitle: 'Empowering minds through quality education and innovative learning',
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      buttonText: 'Explore Programs',
    },
    {
      title: 'Excellence in Education',
      subtitle: 'Shaping future leaders through comprehensive academic programs',
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      buttonText: 'Learn More',
    },
    {
      title: 'Excellence in Education',
      subtitle: 'Shaping future leaders through comprehensive academic programs',
      image: 'https://bistbbsr.com/wp-content/uploads/elementor/thumbs/Untitled-design-34-qnwnd8lu8onhosjio69h6zzqm8ntdvg1ixepj7pwhw.jpg',
      buttonText: 'Learn More',
    },
    {
      title: 'Excellence in Education',
      subtitle: 'Shaping future leaders through comprehensive academic programs',
      image: 'https://bistbbsr.com/wp-content/uploads/elementor/thumbs/Untitled-design-37-qnwnhpc8pcriu421llqojdfk74nky46550yqlj3kxw.jpg',
      buttonText: 'Learn More',
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/',
      color: 'bg-pink-500',
    },
    {
      icon: <Facebook size={20} />,
      url: 'https://facebook.com/',
      color: 'bg-blue-600',
    },
    {
      icon: <Youtube size={20} />,
      url: 'https://youtube.com/',
      color: 'bg-red-600',
    },
    {
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/',
      color: 'bg-sky-500',
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/',
      color: 'bg-blue-800',
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex">
                {/* Social Sidebar */}
                <div className="hidden md:flex flex-col justify-center gap-4 px-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${link.color} hover:scale-110 transition-transform`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                {/* Hero Content */}
                <div className="flex-1 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.subtitle}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
