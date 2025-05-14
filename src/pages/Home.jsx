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

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
     <HeroSlider/>
     <UpdateBar/>
     <FoundersSection/>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Admissions</h3>
              <p className="text-gray-600 mb-4">
                Start your journey with us. Learn about our admission process and requirements.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Academics</h3>
              <p className="text-gray-600 mb-4">
                Explore our diverse range of academic programs and departments.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Discover Programs <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Campus Life</h3>
              <p className="text-gray-600 mb-4">
                Experience the vibrant community and activities on our campus.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View Activities <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={`https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg`}
                  alt={`Event ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">March 15, 2024</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Annual Technical Symposium</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for our annual technical symposium featuring innovative projects and expert speakers.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our institution and be part of our growing academic community.
          </p>
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;