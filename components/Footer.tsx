
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">HealthPoint</h3>
                        <p className="text-gray-300">Providing compassionate care with cutting-edge technology. Your health is our priority.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-300">123 Health St, Wellness City, 12345</p>
                        <p className="text-gray-300">Email: info@healthpoint.com</p>
                        <p className="text-gray-300">Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} HealthPoint. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
   