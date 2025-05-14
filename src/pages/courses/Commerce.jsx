import React from 'react';

const Commerce = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">+2 Commerce</h1>
          <p className="text-xl text-gray-600">Prepare for a successful career in business and finance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-gray-600 mb-4">
              Our +2 Commerce program offers comprehensive education in business, accounting, and economics. Students develop strong analytical and problem-solving skills essential for the business world.
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
                Accountancy
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Business Studies
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Economics
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Mathematics/Computer Science
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                English
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chartered Accountancy</h3>
              <p className="text-gray-600">Pursue CA after +2 Commerce</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Management</h3>
              <p className="text-gray-600">BBA, MBA opportunities</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Banking & Finance</h3>
              <p className="text-gray-600">Various banking career options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce;