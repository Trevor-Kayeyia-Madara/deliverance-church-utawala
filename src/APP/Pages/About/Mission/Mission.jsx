import React from 'react'
import './mission.css'
import { Helmet } from 'react-helmet';
function Mission() {
  const pageTitle = 'Our Mission-Deliverance Church  Utawala | The Church Of Choice';
  const metaDescription ='Our Mission As Deliverance Church Utawala is To Equip Mankind For The Mission Of God.'
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
      <meta name = "description" content={metaDescription} />
    </Helmet>
    <div className="hero">
      <div className="hero-image">
        <div className="hero-text">
          <h4>About Us</h4>
          <h1>Our Mission and Vision</h1>
        </div>
      </div>
    </div>
       <section className="mission">
      <div className="mission-container">
        <h2 className="title">Our Mission</h2>
        <p className="quote">
          "Our Mission
          To Equip Mankind For The Mission Of God."
        </p>
        <br />
        <h2 className="title">Our Vision</h2>
        <p className="quote">
          "The Apostolic Church Of Choice transforming & empowering mankind in Africa and beyond."
        </p>
        <h2 className="title">Our Theme</h2>
        <p className="quote">
          Facilitating revelation of ‘all the truths of God’s to mankind in Africa and beyond.
        </p>
        <h2 className="title">Our Core Values</h2>
        <div className="cardContainer">
          <div className="card">
            <p>Excellence</p>
          </div>
          <div className="card">
            <p>Holiness</p>
          </div>
          <div className="card">
            <p>Wisdom</p>
          </div>
          <div className="card">
            <p>Fellowship</p>
          </div>
          <div className="card">
            <p>Love</p>
          </div>
        </div>
        <h2 className="title">Our Purpose</h2>
        <div className="cardContainer">
          <div className="card">
            <p>Teamwork and unity</p>
          </div>
          <div className="card">
            <p>Trustworthy</p>
          </div>
          <div className="card">
            <p>Transparency</p>
          </div>
          <div className="card">
            <p>Accountability</p>
          </div>
          <div className="card">
            <p>Righteousness</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Mission