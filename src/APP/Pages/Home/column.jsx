import React from 'react';
import { Link } from 'react-router-dom';

const ThreeColumnSection = () => {
  return (
    <div className="container mt-5">
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ABOUT US</h5>
            <p className="card-text">We are an Apostolic Church Of Choice that envisions to transform and empower mankind in Africa and beyond.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">JOIN A FELLOWSHIP</h5>
            <p className="card-text">Click the link below to be part of a fellowship where we devote ourselves to the apostles’ teaching, fellowship, sharing in meals, and prayer.</p>
            <Link to="/ministries/micro-churches" className="btn btn-primary mt-3">
              Join a fellowship
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ARE YOU NEW HERE?</h5>
            <p className="card-text">Welcome to Deliverance Church Utawala. Our desire is to nurture and equip every member to be who God called them to be.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
