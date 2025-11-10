import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="home" className="relative h-[calc(100vh-68px)] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Compassionate Care, Advanced Medicine
                </motion.h1>
                <motion.p 
                    className="text-lg md:text-xl max-w-3xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    We are dedicated to providing the highest quality healthcare with a personal touch. Your health and well-being are our top priorities.
                </motion.p>
                <motion.button 
                    onClick={() => navigate('/login')} 
                    className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book an Appointment
                </motion.button>
            </div>
        </section>
    );
}

const ServicesSection: React.FC = () => {
    const services = [
        { icon: '❤️', title: 'Cardiology', description: 'Comprehensive heart care from diagnosis to treatment.' },
        { icon: '👶', title: 'Pediatrics', description: 'Specialized medical care for infants, children, and adolescents.' },
        { icon: '🧠', title: 'Neurology', description: 'Expert care for disorders of the brain, spine, and nervous system.' },
        { icon: '🦴', title: 'Orthopedics', description: 'Treatment for musculoskeletal trauma, spine diseases, and sports injuries.' },
        { icon: '🔬', title: 'Oncology', description: 'Advanced cancer treatment with a compassionate approach.' },
        { icon: '🚨', title: 'Emergency Care', description: '24/7 emergency services for critical medical situations.' },
    ];
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-accent p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-primary-dark mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const AboutSection: React.FC = () => (
    <section id="about" className="py-20 bg-lightgray">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" alt="Hospital Staff" className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">About HealthPoint</h2>
                    <p className="text-gray-700 mb-4 text-lg">
                        Founded on the principles of integrity, compassion, and innovation, HealthPoint has been serving the community for over 50 years. We believe in a patient-centric approach, where every individual receives personalized care tailored to their unique needs.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Our state-of-the-art facilities and a team of highly skilled medical professionals ensure that you receive the best possible care. From routine check-ups to complex surgeries, we are here for you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const ContactSection: React.FC = () => (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Get in Touch</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
                We are here to help. Contact us for appointments, inquiries, or emergencies. Our team is available 24/7.
            </p>
            <div className="bg-accent p-8 rounded-lg shadow-lg inline-block">
                <p className="text-xl font-semibold text-primary-dark">123 Health St, Wellness City</p>
                <p className="text-lg text-gray-700 mt-2">Phone: (123) 456-7890 | Email: info@healthpoint.com</p>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <motion.div 
        className="font-sans"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default HomePage;