import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroSlider from '../components/home/HeroSlider';
import UpdateBar from '../components/home/UpdateBar';
import FoundersSection from '../components/home/FoundersSection';
import AboutUs from '../components/home/AboutUs';
import Courses from '../components/home/Courses';
import Facilities from '../components/home/Facilities';
import CTA from '../components/home/CTA';
import Testimonial from '../components/home/Testimonial';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
     <HeroSlider/>
     <UpdateBar/>
     <FoundersSection/>
     <AboutUs/>
     <Courses/>
<Facilities/>
    <CTA/>
    <Testimonial/>
    </div>
  );
};

export default Home;