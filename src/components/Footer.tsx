import React from 'react';
import { Waves, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const companyInfo = {
    name: 'Digital Wave IT Solutions Pvt Ltd',
    bio: 'Transforming ideas into digital reality with innovative solutions for businesses worldwide.',
    address: '39 Mitra Nagar, Khirni Phatak, Jhotwara, Jaipur - 302012',
    email: 'contact@digitalwaveitsolutions.com',
    phone: '+91-1413181323',
  };
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, link: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, link: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, link: 'https://instagram.com' },
  ];
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Partners', href: '#partners' },
    { name: 'Blog', href: '#blog' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Waves className="h-8 w-8 text-secondary mr-2" />
              <h3 className="text-xl font-bold font-poppins">Digital Wave IT</h3>
            </div>
            <p className="text-gray-300 mb-4">{companyInfo.bio}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 font-poppins">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/admin"
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <div className="text-gray-300">
                  <a
                    href="tel:+91-1413181323"
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    +91-1413181323
                  </a>
                  <br />
                  <a
                    href="tel:+91-8764749125"
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    +91-8764749125
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                <a
                  href="mailto:contact@digitalwaveitsolutions.com"
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {companyInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;