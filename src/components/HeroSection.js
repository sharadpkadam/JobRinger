import React, { useState } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>
        <p>Explore thousands of job opportunities that match your skills.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for jobs, companies, or locations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
