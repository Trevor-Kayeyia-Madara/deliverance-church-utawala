import React, { useState } from 'react';
import axios from 'axios';

const CreateRegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    business_name: '',
    years_in_business: '',
    fellowship: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate the API request
    axios.post('/users', formData)
      .then((response) => {
        console.log('Registered successfully:', response.data);
        // Handle the successful response, show a success message, etc.
      })
      .catch((error) => {
        console.error('Error while registering:', error);
        // Handle the error, show an error message, etc.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Telephone Number:</label>
        <input type="tel" name="telephone_number" value={formData.telephone_number} onChange={handleChange} />
      </div>
      <div>
        <label>Business Name:</label>
        <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} />
      </div>
      <div>
        <label>Years in Business:</label>
        <input type="number" name="years_in_business" value={formData.years_in_business} onChange={handleChange} />
      </div>
      <div>
        <label>Fellowship:</label>
        <input type="text" name="fellowship" value={formData.fellowship} onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default CreateRegistrationForm;
