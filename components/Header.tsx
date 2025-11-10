import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>
                    HealthPoint
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">Home</a>
                    <a onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">Services</a>
                    <a onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">About Us</a>
                    <a onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">Contact</a>
                </nav>
                <motion.button
                    onClick={() => navigate('/login')}
                    className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    Login / Portal
                </motion.button>
            </div>
        </header>
    );
};

export default Header;