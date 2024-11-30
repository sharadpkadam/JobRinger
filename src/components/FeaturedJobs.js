import React from 'react';
import '../styles/FeaturedJobs.css';

const FeaturedJobs = () => {
  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'Remote' },
    { id: 2, title: 'Product Manager', company: 'BizCo', location: 'New York' },
    { id: 3, title: 'Web Developer', company: 'WebWorks', location: 'San Francisco' },
  ];

  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="job-list">
        {featuredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
