import React from 'react';
import './home.css';
import TestimonialsCarousel from '../../components/features/TestimonialsCarousel/Testimonials-Carousel';
import DynamicUpdates from '../../components/features/DynamicUpdates/DynamicUpdates';
import Card from '../../components/common/Card/Card';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title" role="banner">
        <h1 id="hero-title">Welcome to Pawfect Stay</h1>
        <p>Your trusted partner in pet care. Let us take care of your furry friends while you're away!</p>
        <button
          className="cta-button"
          onClick={() => setCurrentPage('booking')}
          aria-label="Book a stay for your pet"
        >
          Book Now
        </button>
      </section>

      {/* Services Section */}
      <section className="services-highlight" aria-labelledby="services-title">
        <h2 id="services-title">Our Services</h2>
        <div className="card-container">
          <Card
            imageSrc="/images/dog-boarding.jpg"
            altText="A happy dog at our boarding facility"
            title="Dog Boarding"
            description="Safe and comfortable boarding for your dogs."
            buttonText="Learn More"
            onClick={() => setCurrentPage('services')}
          />
          <Card
            imageSrc="/images/cat-sitting.jpg"
            altText="A relaxed cat sitting comfortably"
            title="Cat Sitting"
            description="Loving care for your feline friends while you're away."
            buttonText="Learn More"
            onClick={() => setCurrentPage('services')}
          />
          <Card
            imageSrc="/images/pet-sitting.jpg"
            altText="A pet sitter caring for a dog"
            title="In-Home Pet Sitting"
            description="Personalized care in the comfort of your home."
            buttonText="Learn More"
            onClick={() => setCurrentPage('services')}
          />
        </div>
      </section>

      {/* Service Area */}
      <section className="service-area" aria-labelledby="service-area-title">
        <h2 id="service-area-title">Our Service Area</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255965.89039338962!2d-122.08942714361649!3d37.477083245285804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1733822203683!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: '0', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of our service area"
          ></iframe>
        </div>
      </section>

      {/* Dynamic Updates Section */}
      <section className="dynamic-updates-section" aria-labelledby="dynamic-updates-title">
        <h2 id="dynamic-updates-title">Dynamic Updates</h2>
        <DynamicUpdates />
      </section>

      {/* Featured Pets Section */}
      <section className="featured-pets" aria-labelledby="featured-pets-title">
        <h2 id="featured-pets-title">Featured Pets & Success Stories</h2>
        <div className="card-container">
          <Card
            imageSrc="/images/pet-success1.jpg"
            altText="Ember and Rex enjoying their stay"
            title="Ember and Rex's Stay"
            description="Ember and Rex enjoyed a wonderful week with us and made new friends!"
          />
          <Card
            imageSrc="/images/pet-success2.jpg"
            altText="Aki enjoying a cozy environment"
            title="Aki's Vacation"
            description="Aki loved the cozy environment and extra cuddles!"
          />
          <Card
            imageSrc="/images/pet-success3.jpg"
            altText="Lia playing happily"
            title="Lia's Story"
            description="Lia had a great time exploring the play area!"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title">What Our Customers Say</h2>
        <TestimonialsCarousel />
      </section>
    </div>
  );
};

export default Home;
