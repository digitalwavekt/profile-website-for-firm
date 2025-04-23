import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            About <span className="text-secondary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover who we are and the mission that drives our innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4 text-primary font-poppins">
              Transforming Ideas Into Digital Reality
            </h3>
            <p className="text-gray-600 mb-4">
              Founded in 2018, Digital Wave IT Solutions has established itself as a premier technology partner for businesses seeking innovative digital transformation. We specialize in creating cutting-edge solutions that help our clients stay ahead in the rapidly evolving digital landscape.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experienced developers, designers, and consultants work collaboratively to deliver exceptional results that exceed client expectations. We pride ourselves on our ability to understand complex business challenges and develop customized solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600 mb-6">
              With a client-first approach, we ensure that every project we undertake aligns perfectly with our clients' vision and business objectives. Our commitment to quality, innovation, and timely delivery has earned us the trust of numerous businesses across various industries.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-primary mb-2">500+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-primary mb-2">150+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-primary mb-2">20+</h4>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-primary mb-2">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Digital Wave IT Solutions office building"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold font-poppins">Digital Wave IT Solutions</h3>
                <p>Headquarters - Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;