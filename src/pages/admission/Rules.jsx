import React from 'react';

const AdmissionRules = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rules & Regulations</h1>
          <p className="text-xl text-gray-600">Guidelines for students and parents</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-blue-600">
              <h2 className="text-xl font-semibold text-white">General Rules</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Attendance</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Minimum 75% attendance is mandatory</li>
                    <li>Medical certificates required for long absences</li>
                    <li>Parents will be notified for irregular attendance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Discipline</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Students must wear proper uniform</li>
                    <li>ID card is mandatory within campus</li>
                    <li>Maintain decorum in classrooms and laboratories</li>
                    <li>No use of mobile phones during classes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Academic</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Regular submission of assignments</li>
                    <li>Participation in internal assessments</li>
                    <li>Maintain minimum passing grades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="px-6 py-4 bg-green-600">
              <h2 className="text-xl font-semibold text-white">Code of Conduct</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Behavior</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Respect teachers and staff members</li>
                    <li>No ragging or harassment</li>
                    <li>Maintain cleanliness in campus</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Library Rules</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Maintain silence in library</li>
                    <li>Return books within due date</li>
                    <li>No marking or damaging library books</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Laboratory Rules</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Follow safety guidelines</li>
                    <li>Handle equipment with care</li>
                    <li>Report any damage immediately</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Disciplinary Actions</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Violation of college rules may result in:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verbal warning</li>
                <li>Written warning to parents</li>
                <li>Fine or penalty</li>
                <li>Suspension from classes</li>
                <li>Rustication in severe cases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRules;