import React from 'react';
import SEO from '../components/common/SEO';
import AboutContent from '../components/about/About';

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Musab bin Mukhtar - a professional Flutter Developer with 3+ years of experience building scalable mobile applications. Expert in Dart, Firebase, and Clean Architecture."
        keywords="About Musab bin Mukhtar, Flutter Developer, Mobile App Developer, Dart Expert, Firebase Developer, Pakistan Developer"
        path="/"
      />
      <AboutContent />
    </>
  );
};

export default About;

