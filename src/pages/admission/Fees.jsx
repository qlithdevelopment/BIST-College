import React from 'react';

const AdmissionFees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h1>
          <p className="text-xl text-gray-600">Comprehensive fee details for academic year 2024-25</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-blue-600">
              <h2 className="text-xl font-semibold text-white">+2 Science</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Admission Fee</span>
                  <span className="font-semibold text-gray-900">₹5,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Tuition Fee (Per Year)</span>
                  <span className="font-semibold text-gray-900">₹30,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Laboratory Fee</span>
                  <span className="font-semibold text-gray-900">₹8,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Library Fee</span>
                  <span className="font-semibold text-gray-900">₹3,000</span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">₹46,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-green-600">
              <h2 className="text-xl font-semibold text-white">+2 Commerce</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Admission Fee</span>
                  <span className="font-semibold text-gray-900">₹5,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Tuition Fee (Per Year)</span>
                  <span className="font-semibold text-gray-900">₹25,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Computer Lab Fee</span>
                  <span className="font-semibold text-gray-900">₹5,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Library Fee</span>
                  <span className="font-semibold text-gray-900">₹3,000</span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-green-600">₹38,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Online Payment (Net Banking, UPI, Credit/Debit Card)</li>
                  <li>Demand Draft in favor of "BCT Bhubaneswar"</li>
                  <li>Cash Payment at College Counter</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Important Notes</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Fees once paid are non-refundable</li>
                  <li>Late payment fees will be charged after due date</li>
                  <li>Installment facility available on request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFees;