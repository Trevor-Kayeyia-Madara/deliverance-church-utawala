import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const AttendeeForm = () => {
  const backendApiUrl = 'https://node-register.onrender.com';
  const [formData, setFormData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    micro_church: '',
    area_of_residence: '',
    business_interest: '',
    years_in_business: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backendApiUrl}/register`, formData)
      .then((response) => {
        console.log(response.data.message);
        // Show success Toast notification
        toast.success('Form submitted successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset the form after successful submission
        setFormData({
          title: '',
          first_name: '',
          last_name: '',
          email: '',
          telephone_number: '',
          micro_church: '',
          area_of_residence: '',
          business_interest: '',
          years_in_business: '',
        });
      })
      .catch((error) => {
        console.error(error);
        // Show error Toast notification
        toast.error('Failed to submit the form.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <select name="title" value={formData.title} onChange={handleChange}>
          <option value="">Select Title</option>
          <option value="Dr">Dr</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Pastor">Pastor</option>
          <option value="Reverend">Reverend</option>
          <option value="Bishop">Bishop</option>
        </select>
        <br />

        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label>Telephone Number (with Country Code):</label>
        <input
          type="text"
          name="telephone_number"
          value={formData.telephone_number}
          onChange={handleChange}
        />
        <br />

        <label>Micro-Church:</label>
        <input
          type="text"
          name="micro_church"
          value={formData.micro_church}
          onChange={handleChange}
        />
        <br />
        <label>Area of Residence: </label>
        <input
          type="text"
          name="area_of_residence"
          value={formData.area_of_residence}
          onChange={handleChange}
        />
        <br />
        <label>Business Interest: </label>
        <input
          type="text"
          name="business_interest"
          value={formData.business_interest}
          onChange={handleChange}
        />
        <br />
        <label>Years In Business:</label>
        <select name="years_in_business" value={formData.years_in_business} onChange={handleChange}>
          <option value="">Select Years</option>
          <option value="0">0</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="Over 5 years">Over 5 years</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {/* Render the ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default AttendeeForm;
