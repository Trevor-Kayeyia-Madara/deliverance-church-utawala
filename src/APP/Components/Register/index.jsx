import React, { useState } from 'react';
import axios from 'axios';

const AttendeeForm = () => {
  const [attendeeData, setAttendeeData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    micro_church: '',
    business_name: '',
    business_industry: '',
    duration: '',
    already_in_business: false,
    aspiring_to_start_business: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setAttendeeData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure only one checkbox is selected
    if (attendeeData.already_in_business && attendeeData.aspiring_to_start_business) {
      setError('Please select only one option.');
      return;
    }

    setError('');

    // Prepare the data to be sent in the POST request
    const postData = {
      ...attendeeData,
      already_in_business: attendeeData.already_in_business ? 'Yes' : '',
      aspiring_to_start_business: attendeeData.aspiring_to_start_business ? 'Aspiring' : '',
    };

    axios
      .post('/attendees', postData) // Use the correct API endpoint here ('/attendees')
      .then((response) => {
        // Handle successful response
        console.log('Attendee registration successful!', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error registering attendee:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <select
            name="title"
            value={attendeeData.title}
            onChange={handleChange}
            required
          >
            <option value="">Select Title</option>
            <option value="Mr">MR</option>
            <option value="Mrs">MRS</option>
            <option value="Miss">MISS</option>
            <option value="Pastor">PASTOR</option>
            <option value="Reverend">REVEREND</option>
            <option value="Bishop">BISHOP</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={attendeeData.first_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={attendeeData.last_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={attendeeData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Telephone Number:
          <input
            type="text"
            name="telephone_number"
            value={attendeeData.telephone_number}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Micro Church:
          <input
            type="text"
            name="micro_church"
            value={attendeeData.micro_church}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Already in Business:
          <input
            type="checkbox"
            name="already_in_business"
            checked={attendeeData.already_in_business}
            onChange={handleChange}
          />
        </label>
      </div>
      {attendeeData.already_in_business && (
        <div>
          <label>
            Business Name:
            <input
              type="text"
              name="business_name"
              value={attendeeData.business_name}
              onChange={handleChange}
              required={attendeeData.already_in_business}
            />
          </label>
        </div>
      )}
      {attendeeData.already_in_business && (
        <div>
          <label>
            Business Industry:
            <input
              type="text"
              name="business_industry"
              value={attendeeData.business_industry}
              onChange={handleChange}
              required={attendeeData.already_in_business}
            />
          </label>
        </div>
      )}
      {attendeeData.already_in_business && (
        <div>
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={attendeeData.duration}
              onChange={handleChange}
              required={attendeeData.already_in_business}
            />
          </label>
        </div>
      )}
      <div>
        <label>
          Aspiring to Start a Business:
          <input
            type="checkbox"
            name="aspiring_to_start_business"
            checked={attendeeData.aspiring_to_start_business}
            onChange={handleChange}
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default AttendeeForm;
