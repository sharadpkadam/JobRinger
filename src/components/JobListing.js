import React from 'react';
import '../styles/JobListing.css';

const JobListing = () => {
  const jobs = [
    { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote", type: "Full-time" },
    { id: 2, title: "Product Manager", company: "BizCo", location: "New York", type: "Part-time" },
    { id: 3, title: "Web Developer", company: "WebWorks", location: "San Francisco", type: "Contract" },
  ];

  return (
    <section className="job-listing">
      <h1>Featured Jobs</h1>
      <div className="job-cards">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <span>{job.type}</span>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobListing;
