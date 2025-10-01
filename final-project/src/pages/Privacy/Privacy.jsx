import './privacy.css';

const Privacy = () => {
  return (
    <main className="privacy-page">
      {/* Page Header */}
      <section className="privacy-header">
        <h1>Privacy Policy & Terms of Service</h1>
      </section>

      {/* Privacy Policy */}
      <section className="privacy-section">
        <h2>Privacy Policy</h2>
        <p>
          At Pawfect Stay, we value your privacy and are committed to protecting your personal information.
        </p>
        <h3>Information We Collect</h3>
        <ul>
          <li>Your name and contact information</li>
          <li>Pet details, including health records</li>
          <li>Service preferences and booking history</li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process bookings and payments</li>
          <li>Communicate with you</li>
        </ul>
        <h3>Data Security</h3>
        <p>
          We implement industry-standard security measures to protect your personal information from unauthorized access.
        </p>
      </section>

      {/* Terms of Service */}
      <section className="terms-section">
        <h2>Terms of Service</h2>
        <h3>Booking and Cancellation Policy</h3>
        <p>
          Cancellations must be made at least 24 hours in advance. Late cancellations may incur a fee.
        </p>
        <h3>Pet Health Requirements</h3>
        <ul>
          <li>All pets must be up-to-date on vaccinations</li>
          <li>Pets with contagious conditions are not accepted</li>
        </ul>
        <h3>Liability</h3>
        <p>
          Pawfect Stay is not liable for damages or losses unless caused by our negligence.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <p>
          Have questions about our policies? Reach out to us at:
        </p>
        <p>
          Email: <a href="mailto:privacy@pawfectstay.com">privacy@pawfectstay.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
      </section>
    </main>
  );
};

export default Privacy;
