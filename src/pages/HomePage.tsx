import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Technologies from '../components/Technologies';
import Partners from '../components/Partners';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Team />
      <Technologies />
      <Partners />
      <Blog />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;