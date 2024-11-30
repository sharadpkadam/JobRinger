import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedJobs from '../components/FeaturedJobs';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Categories />
      <FeaturedJobs />
    </div>
  );
};

export default HomePage;
