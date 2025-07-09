import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownOpen = () => {
    setIsOpen(true);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 960) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Deliverance Church Utawala Logo" />
        </div>
        <Link className="text" to="/" onClick={handleMenuItemClick}>
          <h5>Deliverance Church Utawala</h5>
          <p>The Church Of Choice</p>
        </Link>
        <div className="menu-icon" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/Live/livestream" className="nav-links" onClick={handleMenuItemClick}>
              Live
            </Link>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <div className="nav-links">
              About Us <FaCaretDown />
            </div>
            <ul className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
              <li>
                <Link
                  to="/About/History"
                  className="dropdown-links"
                  onClick={handleMenuItemClick}
                >
                  Our History
                </Link>
              </li>
              <li>
                <Link
                  to="/About/Mission/"
                  className="dropdown-links"
                  onClick={handleMenuItemClick}
                >
                  Our Mission and Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/About/Pastoral"
                  className="dropdown-links"
                  onClick={handleMenuItemClick}
                >
                  Our Pastoral Team
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/Ministries" className="nav-links" onClick={handleMenuItemClick}>
              Our Ministries
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-links" onClick={handleDropdownOpen}>
              Media <FaCaretDown />
            </div>
            <ul className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
              <li>
                <Link to="/Sermons/" className="dropdown-links" onClick={handleMenuItemClick}>
                  Latest Sermons
                </Link>
              </li>
              <li>
                <Link to="/events/" className="dropdown-links" onClick={handleMenuItemClick}>
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="dropdown-links" onClick={handleMenuItemClick}>
                  Our Gallery
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={handleMenuItemClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
