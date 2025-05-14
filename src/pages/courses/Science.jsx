import React from 'react';

const Science = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">+2 Science</h1>
          <p className="text-xl text-gray-600">Explore our comprehensive science program</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-gray-600 mb-4">
              Our +2 Science program provides a strong foundation in physics, chemistry, mathematics, and biology. The curriculum is designed to prepare students for competitive examinations and higher education in science and technology.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Duration: 2 years</li>
              <li>Medium of Instruction: English</li>
              <li>Board: State Board of Secondary Education</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Offered</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Physics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Chemistry
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Mathematics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Biology
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                English
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Experienced teachers with proven track record</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Labs</h3>
              <p className="text-gray-600">Well-equipped laboratories for practical learning</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Library Resources</h3>
              <p className="text-gray-600">Extensive collection of study materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;