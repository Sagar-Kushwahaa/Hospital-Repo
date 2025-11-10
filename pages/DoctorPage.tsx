import React from 'react';
import RoleBasePage from './RoleBasePage';

const DoctorPage: React.FC = () => {
  return (
    <RoleBasePage title="Doctor Page">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome, Doctor!</h2>
        <p className="mt-4 text-gray-600">Here you can view your appointments, manage patient records, and more.</p>
        <div className="mt-6">
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" alt="Doctor workspace" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </RoleBasePage>
  );
};

export default DoctorPage;