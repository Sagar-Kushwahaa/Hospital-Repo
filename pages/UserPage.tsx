import React from 'react';
import RoleBasePage from './RoleBasePage';

const UserPage: React.FC = () => {
  return (
    <RoleBasePage title="User Page">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to Your Patient Portal!</h2>
        <p className="mt-4 text-gray-600">Here you can view your upcoming appointments, medical history, and communicate with your doctor.</p>
         <div className="mt-6">
            <img src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=800&auto=format&fit=crop" alt="Patient portal" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </RoleBasePage>
  );
};

export default UserPage;