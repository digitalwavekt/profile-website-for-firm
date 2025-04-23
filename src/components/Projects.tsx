import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'NextGen Healthcare Platform',
      description: 'An innovative healthcare management system with patient portals, telemedicine capabilities, and integrated EHR functionality. Coming soon to transform healthcare delivery.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg',
      link: '#',
    },
    {
      id: 2,
      title: 'Smart City Dashboard',
      description: 'A comprehensive IoT-based dashboard for monitoring and managing smart city infrastructure, including traffic, lighting, and environmental sensors.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      link: '#',
    },
  ];
  
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Upcoming <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Get a sneak peek at exciting projects we're currently working on.
          </p>
        </div>
        
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 last:mb-0"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {index % 2 === 0 ? (
              <>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary font-poppins">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-secondary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4 text-primary font-poppins">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-secondary font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;