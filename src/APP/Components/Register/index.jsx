import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
const AttendeeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    microChurch: '',
    areaOfResidence:'',
    businessInterest:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/register', formData)
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
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          microChurch: '',
          areaOfResidence:'',
          businessInterest:'',
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
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
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
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />

        <label>Micro-Church:</label>
        <input
          type="text"
          name="microChurch"
          value={formData.microChurch}
          onChange={handleChange}
        />
        <br />
        <label>Area of Residence: </label>
        <input
              type='text'
              name='areaOfResidence'
              value={formData.areaOfResidence}
              onChange={handleChange}
        />
         <label>Business Interest: </label>
        <input
              type='text'
              name='businessInterest'
              value={formData.businessInterest}
              onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Render the ToastContainer */}
      <ToastContainer />
    </div>
  );
};
export default AttendeeForm;
