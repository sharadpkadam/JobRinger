import React from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Full-time', count: 120 },
    { name: 'Part-time', count: 45 },
    { name: 'Remote', count: 85 },
    { name: 'Freelance', count: 30 },
  ];

  return (
    <section className="categories">
      <h2>Explore Job Categories</h2>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.count} Jobs Available</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
