import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FaqSection from '../components/FaqSection';

const Home: React.FC = () => {
    return (
       <>
       <HeroSection/>
       <HowItWorksSection/>
       <FaqSection/>
       </>
    );
};

export default Home;
