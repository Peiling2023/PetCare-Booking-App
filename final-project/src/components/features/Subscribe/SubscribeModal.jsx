import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import './subscribe.css';

const SubscribeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSuccessMessage(`Thank you for subscribing, ${email}!`);
    setIsModalOpen(false);
    setEmail('');
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="subscribe-button">
        Subscribe to Newsletter
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="subscribe-form">
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="yourname@example.com"
          />
          <button type="submit" className="submit-button">Subscribe</button>
        </form>
      </Modal>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default SubscribeModal;
