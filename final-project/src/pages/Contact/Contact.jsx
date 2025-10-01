import React, { useState } from 'react';
import './contact.css';

const Contact = ({ setCurrentPage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000); 
  };

  return (
    <main className="contact-page">
      {/* Contact Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Email: <a href="mailto:info@pawfectstay.com">info@pawfectstay.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        <p>
          Follow us on:
          <a
            href="https://www.xiaohongshu.com/user/profile/645b55cc000000001f033d0e?xhsshare=WeixinSession&appuid=55d9e322e4b1cf49ec01a86e&apptime=1733829455&share_id=b033bbad28d14595a6a3ea7cab14c97b&wechatWid=1add328c487b19d887739582d8b29215&wechatOrigin=menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xiaohongshu
          </a>
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>
        {formSubmitted && (
          <p className="success-message">Your message has been successfully submitted!</p>
        )}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>What services do you offer?</h3>
            <p>We offer dog boarding, cat sitting, and in-home pet sitting services.</p>
          </div>
          <div className="faq-item">
            <h3>How can I book a service?</h3>
            <p>
              You can book a service through our{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => setCurrentPage('booking')}
              >
                Booking
              </button>{' '}
              page.
            </p>
          </div>
          <div className="faq-item">
            <h3>What are your holiday arrangements?</h3>
            <p>
              For holidays like Christmas or Thanksgiving, we recommend booking in advance to secure
              a spot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
