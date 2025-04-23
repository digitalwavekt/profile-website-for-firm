import React from 'react';
import { Globe, Smartphone, PenTool, BarChart, Briefcase, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to ensure high performance, security, and scalability.',
      icon: Globe,
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create engaging and intuitive user experiences.',
      icon: PenTool,
    },
    {
      id: 4,
      title: 'Data Analysis',
      description: 'Transform your raw data into actionable insights with our advanced analytics solutions and business intelligence tools.',
      icon: BarChart,
    },
    {
      id: 5,
      title: 'CRM Development',
      description: 'Custom CRM solutions tailored to your specific business needs to improve customer relationships and drive growth.',
      icon: Briefcase,
    },
    {
      id: 6,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
      icon: Cloud,
    },
  ];
  
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Our <span className="text-secondary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card p-6 transition-all duration-300 hover:border-secondary"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
                <service.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary font-poppins">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;