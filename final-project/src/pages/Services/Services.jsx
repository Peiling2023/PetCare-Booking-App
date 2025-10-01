import React from 'react';
import './services.css';
import Card from '../../components/common/Card/Card';

const Services = () => {
  const servicesData = [
    {
      title: 'Dog Boarding',
      description: 'Safe boarding for small, medium, and large dogs.',
      details: [
        { label: 'Rules', text: 'Vaccinations required; Socialized pets preferred.' },
        { label: 'Price', text: 'Small: $40/day, Medium: $50/day, Large: $60/day.' },
        { label: 'FAQ', text: 'Can I bring my pet’s favorite toy? Yes, we encourage it!' },
      ],
    },
    {
      title: 'Cat Boarding',
      description: 'Loving care for your feline friends.',
      details: [
        { label: 'Rules', text: 'Litter-trained cats only; Vaccinations required.' },
        { label: 'Price', text: '$35/day per cat.' },
        { label: 'FAQ', text: 'Do you provide cat litter? Yes, we provide clumping litter.' },
      ],
    },
    {
      title: 'In-Home Pet Sitting',
      description: 'Personalized care for pets in their own home.',
      details: [
        { label: 'Rules', text: 'Visits available in service area only.' },
        { label: 'Price', text: '$30/hour.' },
        { label: 'FAQ', text: 'Can I schedule multiple visits per day? Yes, based on availability.' },
      ],
    },
    {
      title: 'Pet Errand Service',
      description: 'Transportation to pet salons, hospitals, and more.',
      details: [
        { label: 'Rules', text: 'Available in service area only; Advance booking required.' },
        { label: 'Price', text: '$30/hour (minimum 1 hour).' },
        { label: 'FAQ', text: 'Can you pick up supplies? Yes, we can shop for pet essentials.' },
      ],
    },
  ];

  return (
    <div className="services-page">
      <header>
        <h1>Our Services</h1>
      </header>

      {/* Services Cards */}
      <section className="card-container">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </section>

      {/* Full-width Service Area Section */}
      <section className="service-area">
        <h2>Our Service Area</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255965.89039338962!2d-122.08942714361649!3d37.477083245285804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1733822203683!5m2!1sen!2sus"
            className="full-width-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of our service area"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Services;
