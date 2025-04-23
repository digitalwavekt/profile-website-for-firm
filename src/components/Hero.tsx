import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins">
            Welcome to
            <div className="text-secondary">Digital Wave IT Solutions</div>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-poppins h-16">
            <TypewriterComponent
              options={{
                strings: [
                  'Web Development',
                  'Mobile Applications',
                  'UI/UX Design',
                  'Data Analysis',
                  'CRM Solutions',
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-wrapper',
                cursorClassName: 'typewriter-cursor',
              }}
            />
          </div>
          
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Transforming ideas into digital reality with innovative technology solutions for businesses worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="btn-primary text-base sm:text-lg px-8 py-3"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="btn-secondary text-base sm:text-lg px-8 py-3"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;