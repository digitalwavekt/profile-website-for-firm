import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      bio: 'With 15+ years of experience in IT, Rajesh leads our vision and strategic direction.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:rajesh@digitalwaveit.com',
      },
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'Priya oversees our technical operations and ensures we stay at the cutting edge of technology.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:priya@digitalwaveit.com',
      },
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Lead Developer',
      bio: 'Amit brings extensive experience in full-stack development to create robust solutions.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:amit@digitalwaveit.com',
      },
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      role: 'UX/UI Designer',
      bio: 'Sneha creates beautiful, user-centered designs that delight our clients and their customers.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:sneha@digitalwaveit.com',
      },
    },
  ];
  
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Our <span className="text-secondary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Meet the talented professionals behind our successful projects and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="card text-center overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <div className="w-32 h-32 mx-auto mt-8 mb-4 rounded-full overflow-hidden border-4 border-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors duration-300"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors duration-300"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.email}
                      className="text-white hover:text-secondary transition-colors duration-300"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-primary font-poppins">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;