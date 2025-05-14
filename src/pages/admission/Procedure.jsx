import React from 'react';

const AdmissionProcedure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admission Procedure</h1>
          <p className="text-xl text-gray-600">Step by step guide to join BCT Bhubaneswar</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <span className="text-white font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Online Application</h3>
                    <p className="mt-2 text-gray-600">
                      Fill out the online application form with accurate personal and academic details. Upload required documents including:
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Recent passport size photograph</li>
                      <li>Class 10 mark sheet</li>
                      <li>Transfer certificate</li>
                      <li>Character certificate</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <span className="text-white font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Document Verification</h3>
                    <p className="mt-2 text-gray-600">
                      Visit the college with original documents for verification. Our admission team will review your application and documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <span className="text-white font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Fee Payment</h3>
                    <p className="mt-2 text-gray-600">
                      Upon successful verification, pay the admission fees through online payment gateway or at the college counter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <span className="text-white font-semibold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Confirmation</h3>
                    <p className="mt-2 text-gray-600">
                      Receive admission confirmation letter and class schedule. Attend the orientation program to learn about college facilities and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Application Start Date</span>
                <span className="font-semibold text-gray-900">March 1, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Application End Date</span>
                <span className="font-semibold text-gray-900">April 30, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Document Verification</span>
                <span className="font-semibold text-gray-900">May 1-15, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Classes Begin</span>
                <span className="font-semibold text-gray-900">June 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedure;