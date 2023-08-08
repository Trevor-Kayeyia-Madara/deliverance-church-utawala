import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import microchurchesData from '../../../../assets/microchurches.json';

const Registration = () => {
  const backendApiUrl = 'https://microchurch.onrender.com';
  const [memberInfo, setMemberInfo] = useState({
    memberName: '',
    memberEmail: '',
    contactNo: '',
    residence: '',
    microchurchId: '',
    zoneId: '', // Add zoneId property
  });

  const microchurches = microchurchesData;

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Check if the selected value is a valid microchurch ID
    const selectedMicrochurch = microchurches.find(
      (microchurch) => microchurch.MICROID.toString() === value
    );

    // Update both microchurchId and zoneId properties
    if (selectedMicrochurch) {
      setMemberInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
        zoneId: selectedMicrochurch.ZONEID, // Update zoneId
      }));
    } else {
      setMemberInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${backendApiUrl}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          memberName: memberInfo.memberName,
          memberEmail: memberInfo.memberEmail,
          contactNo: memberInfo.contactNo,
          residence: memberInfo.residence,
          microchurchId: memberInfo.microchurchId,
        }),
      });

      const data = await response.json();
      console.log('Registration response:', data);

      // Show success toast
      toast.success('You have registered to a microchurch successfully');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100%">
      <div className="col-md-6">
        <h2 className="mb-4">Member Registration</h2>
        <form onSubmit={handleRegistration}>
          <label>
            Member Name:
            <input
              type="text"
              name="memberName"
              value={memberInfo.memberName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Member Email:
            <input
              type="email"
              name="memberEmail"
              placeholder="abc@gmail.com"
              value={memberInfo.memberEmail}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact No:
            <input
              type="tel"
              name="contactNo"
              placeholder="07xxxxxxxx"
              value={memberInfo.contactNo}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Residence:
            <input
              type="text"
              name="residence"
              value={memberInfo.residence}
              onChange={handleChange}
              required
            />
          </label>
          <div className="form-group">
            <label>Select Microchurch:</label>
            <select
              className="form-control"
              name="microchurchId"
              value={memberInfo.microchurchId}
              onChange={handleChange}
              required
            >
              <option value="">Select Microchurch</option>
              {microchurches.map((microchurch) => (
                <option key={microchurch.MICROID} value={microchurch.MICROID}>
                  {microchurch.MICROCHURCH}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Selected Zone ID: {memberInfo.zoneId}</p>
          </div>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Registration;
