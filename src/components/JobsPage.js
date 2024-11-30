import React from 'react';
import '../styles/JobListing.css'; 

const JobsPage = () => {
  const jobs = [
    { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote", description: "Develop and maintain web applications.", type: "Full-time" },
    { id: 2, title: "Product Manager", company: "BizCo", location: "New York", description: "Manage the product lifecycle from ideation to launch.", type: "Part-time" },
    { id: 3, title: "Web Developer", company: "WebWorks", location: "San Francisco", description: "Build and optimize websites for clients.", type: "Contract" },
    { id: 4, title: "Data Scientist", company: "DataPlus", location: "Remote", description: "Analyze and interpret complex data to help businesses.", type: "Full-time" },
    { id: 5, title: "UI/UX Designer", company: "DesignPro", location: "Chicago", description: "Design intuitive user interfaces for mobile and web.", type: "Freelance" },
    { id: 6, title: "Digital Marketer", company: "MarketGenius", location: "Los Angeles", description: "Develop and execute online marketing campaigns.", type: "Full-time" },
    { id: 7, title: "DevOps Engineer", company: "CloudTech", location: "Austin", description: "Maintain and improve cloud infrastructure.", type: "Full-time" },
    { id: 8, title: "Graphic Designer", company: "CreativeAgency", location: "New York", description: "Create visuals and branding materials.", type: "Contract" },
    { id: 9, title: "Content Writer", company: "WriteRight", location: "Remote", description: "Produce engaging content for blogs and websites.", type: "Part-time" },
    { id: 10, title: "IT Support Specialist", company: "TechFix", location: "Seattle", description: "Provide technical support to users.", type: "Full-time" },
    { id: 11, title: "AI Engineer", company: "FutureTech", location: "Boston", description: "Design and deploy AI-powered solutions.", type: "Full-time" },
    { id: 12, title: "Systems Analyst", company: "InfoSys", location: "Dallas", description: "Analyze and improve IT systems.", type: "Full-time" },
    { id: 13, title: "Mobile App Developer", company: "AppVentures", location: "San Diego", description: "Develop mobile applications for Android and iOS.", type: "Full-time" },
    { id: 14, title: "Cybersecurity Analyst", company: "SecureNet", location: "Washington D.C.", description: "Protect systems and networks from cyber threats.", type: "Full-time" },
    { id: 15, title: "SEO Specialist", company: "RankUp", location: "Miami", description: "Improve website rankings on search engines.", type: "Part-time" },
    { id: 16, title: "Sales Executive", company: "BizGrow", location: "Houston", description: "Drive sales and build client relationships.", type: "Full-time" },
    { id: 17, title: "HR Manager", company: "PeopleFirst", location: "Atlanta", description: "Manage recruitment and employee relations.", type: "Full-time" },
    { id: 18, title: "Accountant", company: "FinServe", location: "Phoenix", description: "Handle company finances and taxes.", type: "Full-time" },
    { id: 19, title: "Video Editor", company: "MediaMasters", location: "Los Angeles", description: "Edit and produce high-quality videos.", type: "Freelance" },
    { id: 20, title: "Backend Developer", company: "CodeBase", location: "San Jose", description: "Develop server-side logic and databases.", type: "Full-time" },
    { id: 21, title: "Frontend Developer", company: "BrightCode", location: "Remote", description: "Build responsive web interfaces.", type: "Full-time" },
    { id: 22, title: "Machine Learning Engineer", company: "AIWorks", location: "Chicago", description: "Build and optimize machine learning models.", type: "Full-time" },
    { id: 23, title: "Operations Manager", company: "EfficientOps", location: "New York", description: "Oversee daily business operations.", type: "Full-time" },
    { id: 24, title: "Technical Writer", company: "DocuTech", location: "Remote", description: "Create technical documentation for software.", type: "Contract" },
    { id: 25, title: "Project Manager", company: "PlanIt", location: "Denver", description: "Lead and manage software development projects.", type: "Full-time" },
    { id: 26, title: "Social Media Manager", company: "SocialSphere", location: "Miami", description: "Manage and grow social media presence.", type: "Part-time" },
    { id: 27, title: "Blockchain Developer", company: "CryptoSolutions", location: "Remote", description: "Build blockchain-based applications.", type: "Full-time" },
    { id: 28, title: "Game Developer", company: "PlayGrounds", location: "Seattle", description: "Develop interactive video games.", type: "Full-time" },
    { id: 29, title: "Cloud Architect", company: "SkyNet", location: "Boston", description: "Design and implement cloud-based solutions.", type: "Full-time" },
    { id: 30, title: "Database Administrator", company: "DataSecure", location: "Austin", description: "Maintain and secure company databases.", type: "Full-time" },
  ];

  return (
    <section className="job-listing">
      <h1>Available Jobs</h1>
      <div className="job-cards">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <span>{job.type}</span>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobsPage;
