import React  from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './style.css'; // Import your CSS file for styling


function ContactUs() {
  return (
    <section className="hero">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <section className="info">
         <h3 className="title">Contact Details</h3>
        <div className="cardContainer">
          <div className="card">
            <FaPhone className="icon" />
            <p>Office Phone</p>
            <p>+254755637745</p>
          </div>
          <div className="card">
            <FaEnvelope className="icon" />
            <p>Email</p>
            <p>info@dcutawala.org</p>
            <p>utawaladc@gmail.com</p>
          </div>
          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <p>Location</p>
            <p>300m from ACK St. Monica, Utawala, Nairobi</p>
          </div>
        </div>
    
    </section>
  );
}

function SocialMedia() {
    return (
      <section className="part">
        <div className="part-image">
          <div className="part-text">
            <h1>
              Follow Us On <span>Social Media</span>
            </h1>
            <div className="social">
              <a href="https://www.facebook.com/DeliveranceChurchUtawala/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/DCUtawala?s=20&t=cuBMumYYsnf82KK025RrAw">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/dcutawala?igshid=YmMyMTA2M2Y=">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCbN_lHKp1o0zHi8AFL2I1Ig">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
function Contact() {
  return (
    <div>
      <ContactUs />
      <ContactDetails />
      <SocialMedia />
    </div>
  );
}

export default Contact;
