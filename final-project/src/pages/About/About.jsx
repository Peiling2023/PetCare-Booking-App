import React from 'react';
import './about.css';
import Card from '../../components/common/Card/Card';

const About = () => {
  const stories = [
    {
      imageSrc: '/images/happy-dog.jpg',
      title: 'Happy Dog Story',
      description: '“Our dog had the best time! Highly recommend.”',
    },
    {
      imageSrc: '/images/relaxed-cat.jpg',
      title: 'Relaxed Cat Story',
      description: '“The care and attention provided were exceptional.”',
    },
  ];

  return (
    <main className="about-page">
      {/* About Header */}
      <section className="about-header">
        <h1>About Us</h1>
        <p>Providing love and care for pets like they are our own.</p>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Our Experience</h2>
        <p>
          With years of experience in pet care, we have provided happy and safe environments for numerous pets while their owners are away.
        </p>
        <img src="/images/pet-care.jpg" alt="Caring for a pet" />
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="card-container">
          {stories.map((story, index) => (
            <Card
              key={index}
              imageSrc={story.imageSrc}
              title={story.title}
              description={story.description}
            />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2>Our Certifications</h2>
        <ul>
          <li>Certified Pet Care Specialist</li>
          <li>Trained in Pet First Aid</li>
          <li>Experienced in managing pets with medical needs</li>
        </ul>
        <p>We prioritize the safety and well-being of every pet in our care.</p>
      </section>
    </main>
  );
};

export default About;
