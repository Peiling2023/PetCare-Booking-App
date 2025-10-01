import React, { useState } from 'react';
import './booking.css';

const Booking = () => {
  // State variables
  const [serviceType, setServiceType] = useState('');
  const [petDetails, setPetDetails] = useState({
    name: '',
    breed: '',
    weight: '',
    age: '',
    neutered: '',
  });
  const [contactDetails, setContactDetails] = useState({
    ownerName: '',
    phone: '',
    email: '',
    wechatId: '',
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [visitDates, setVisitDates] = useState(['']);
  const [petType, setPetType] = useState('');

  // Handlers
  const handlePetDetailsChange = (field, value) => {
    setPetDetails({ ...petDetails, [field]: value });
  };

  const handleContactDetailsChange = (field, value) => {
    setContactDetails({ ...contactDetails, [field]: value });
  };

  const handleVisitDateChange = (index, value) => {
    const updatedDates = [...visitDates];
    updatedDates[index] = value;
    setVisitDates(updatedDates);
  };

  const handleAddVisitDate = () => {
    setVisitDates([...visitDates, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your booking request has been submitted. We will contact you soon!');
  };

  return (
    <div className="booking-page">
      <h1>Booking Request</h1>
      <p className="booking-note">
        Fields marked with <span className="required">*</span> are required. 
        Submission does not guarantee availability.
        We will contact you to confirm your request.
      </p>
      <p className="booking-warning">
      Limited spots available during holidays. Apply early to secure a spot.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Section: Contact Details */}
        <fieldset>
          <legend>Contact Information</legend>
          <label htmlFor="owner-name">
            Owner's Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="owner-name"
            value={contactDetails.ownerName}
            onChange={(e) => handleContactDetailsChange('ownerName', e.target.value)}
            required
          />

          <label htmlFor="phone">
            Contact Phone <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={contactDetails.phone}
            onChange={(e) => handleContactDetailsChange('phone', e.target.value)}
            required
          />

          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={contactDetails.email}
            onChange={(e) => handleContactDetailsChange('email', e.target.value)}
            required
          />

          <label htmlFor="wechat-id">WeChat ID</label>
          <input
            type="text"
            id="wechat-id"
            value={contactDetails.wechatId}
            onChange={(e) => handleContactDetailsChange('wechatId', e.target.value)}
          />
        </fieldset>

        {/* Section: Service Details */}
        <fieldset>
          <legend>Service Details</legend>
          <label htmlFor="service-type">
            Service Type <span className="required">*</span>
          </label>
          <select
            id="service-type"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="dog-boarding">Dog Boarding</option>
            <option value="cat-boarding">Cat Boarding</option>
            <option value="in-home">In-Home Pet Sitting</option>
          </select>

          {serviceType === 'in-home' && (
            <>
              <label htmlFor="pet-type">
                Pet Type <span className="required">*</span>
              </label>
              <select
                id="pet-type"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                required
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
                <option value="hamster">Hamster</option>
                <option value="other">Other</option>
              </select>
            </>
          )}
        </fieldset>

        {/* Section: Pet Details */}
        <fieldset>
          <legend>Pet Details</legend>
          <label htmlFor="pet-name">
            Pet Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="pet-name"
            value={petDetails.name}
            onChange={(e) => handlePetDetailsChange('name', e.target.value)}
            required
          />

          <label htmlFor="breed">
            Breed <span className="required">*</span>
          </label>
          <input
            type="text"
            id="breed"
            value={petDetails.breed}
            onChange={(e) => handlePetDetailsChange('breed', e.target.value)}
            required
          />

          <label htmlFor="age">
            Age (Years) <span className="required">*</span>
          </label>
          <input
            type="number"
            id="age"
            value={petDetails.age}
            onChange={(e) => handlePetDetailsChange('age', e.target.value)}
            required
          />

          {petType === 'dog' && (
            <>
              <label htmlFor="weight">
                Weight (kg) <span className="required">*</span>
              </label>
              <input
                type="number"
                id="weight"
                value={petDetails.weight}
                onChange={(e) => handlePetDetailsChange('weight', e.target.value)}
                required
              />
            </>
          )}

          <label htmlFor="neutered">
            Neutered/Spayed? <span className="required">*</span>
          </label>
          <select
            id="neutered"
            value={petDetails.neutered}
            onChange={(e) => handlePetDetailsChange('neutered', e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </fieldset>

        {/* Section: Scheduling */}
        <fieldset>
          <legend>Scheduling</legend>
          <label htmlFor="start-date">
            Start Date <span className="required">*</span>
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <label htmlFor="end-date">
            End Date <span className="required">*</span>
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          {serviceType === 'in-home' && (
            <>
              <label className="form-label">
                Select Visit Dates <span className="required">*</span>
              </label>
              {visitDates.map((date, index) => (
                <input
                  key={index}
                  type="date"
                  value={date}
                  onChange={(e) => handleVisitDateChange(index, e.target.value)}
                  required
                />
              ))}
              <button type="button" onClick={handleAddVisitDate}>
                + Add Another Date
              </button>
            </>
          )}

          <label htmlFor="time-slot">Preferred Time Slot</label>
          <select
            id="time-slot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option value="unsure">Not Sure</option>
            <option value="morning">Morning (8:00 AM - 11:00 AM)</option>
            <option value="noon">Noon (11:00 AM - 1:00 PM)</option>
            <option value="afternoon">Afternoon (1:00 PM - 6:00 PM)</option>
            <option value="night">Night (6:00 PM - 11:59 PM)</option>
          </select>
        </fieldset>

        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Booking;
