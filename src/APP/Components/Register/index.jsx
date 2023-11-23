import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const AttendeeForm = () => {
  const backendApiUrl = 'https://node-register.onrender.com';
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    telephone_number: '',
    department: '',
    micro_church: '',
    area_of_residence: '',
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
          first_name: '',
          last_name: '',
          email: '',
          telephone_number: '',
          department: '',
          micro_church: '',
          area_of_residence: '',
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
      <h1>Registration to attend Leadership Summit at PEFA Church Utawala on 02/09/2023.</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label>Telephone Number :</label>
        <input
          type="text"
          name="telephone_number"
          value={formData.telephone_number}
          onChange={handleChange}
          placeholder = "07xxxxxxx"
          required
        />
        <br />
        <label>Department :</label>
        <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
        />
        <label>Micro-Church:</label>
        <input
          type="text"
          name="micro_church"
          value={formData.micro_church}
          onChange={handleChange}
          required
        />
        <br />
        <label>Area of Residence: </label>
        <input
          type="text"
          name="area_of_residence"
          value={formData.area_of_residence}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Render the ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default AttendeeForm;
