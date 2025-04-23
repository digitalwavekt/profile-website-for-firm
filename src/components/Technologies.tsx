import React from 'react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      id: 1,
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Building dynamic user interfaces with the latest React features',
    },
    {
      id: 2,
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Server-side JavaScript for scalable backend solutions',
    },
    {
      id: 3,
      name: 'Flutter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      description: 'Cross-platform mobile app development with native performance',
    },
    {
      id: 4,
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Advanced data analysis and machine learning solutions',
    },
    {
      id: 5,
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      description: 'Cloud infrastructure for reliable and scalable applications',
    },
    {
      id: 6,
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      description: 'NoSQL database solutions for flexible data storage',
    },
    {
      id: 7,
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      description: 'Collaborative UI/UX design and prototyping',
    },
    {
      id: 8,
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Containerization for consistent development and deployment',
    },
  ];
  
  return (
    <section id="technologies" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Technologies We <span className="text-secondary">Work With</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We leverage cutting-edge technologies to deliver innovative solutions that meet your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="tech-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img src={tech.icon} alt={tech.name} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-primary font-poppins">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;