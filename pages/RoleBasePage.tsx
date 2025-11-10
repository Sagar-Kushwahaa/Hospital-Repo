import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface RoleBasePageProps {
  title: string;
  children: React.ReactNode;
}

const RoleBasePage: React.FC<RoleBasePageProps> = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen bg-lightgray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-primary">{title}</h1>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => navigate('/login')}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition"
                >
                    Logout
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>
            </div>

          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </motion.div>
  );
};

export default RoleBasePage;