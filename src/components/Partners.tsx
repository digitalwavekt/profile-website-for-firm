import React from 'react';
import Slider from 'react-slick';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'TechNova Solutions',
      logo: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg',
      description: 'Enterprise software solutions provider partnering with us for web development projects.',
    },
    {
      id: 2,
      name: 'GlobalConnect Systems',
      logo: 'https://images.pexels.com/photos/5915202/pexels-photo-5915202.jpeg',
      description: 'International telecommunications company utilizing our mobile app development services.',
    },
    {
      id: 3,
      name: 'BrightSpark Analytics',
      logo: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
      description: 'Data science firm collaborating with us on advanced analytics solutions.',
    },
    {
      id: 4,
      name: 'EcoTech Innovations',
      logo: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
      description: 'Green technology startup leveraging our IoT expertise for sustainable solutions.',
    },
    {
      id: 5,
      name: 'MediSync Health',
      logo: 'https://images.pexels.com/photos/5752255/pexels-photo-5752255.jpeg',
      description: 'Healthcare provider utilizing our custom CRM solutions for patient management.',
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-poppins" data-aos="fade-up">
            Our Trusted <span className="text-secondary">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We're proud to collaborate with leading organizations across various industries.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <Slider {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-4">
                <div className="card h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;