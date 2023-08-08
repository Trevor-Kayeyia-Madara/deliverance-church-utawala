import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../Components/BackGround/index'
import Group from '../../Components/Gallery'
import ImageAccordion from '../../Components/ImageAccordion/ImageAccordion'
import image from '../../Images/sunday.jpg'
import Gallery from '../../Components/Masonry-Gallery'
import ThreeColumnSection from './column'



const Home = () => {
  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '3px',
  };

  const accordionItems = [
    {
      title: 'MidWeek Servies',
      content: 'Micro-Churches Tuesdays 6:30pm-8:00pm \nIgnite Service Fridays 6:30pm-8:00pm',
    },
    {
      title: 'Main Service',
      content: 'Morning Prayers 6:30am-6:45am \n First Service 6:45am-9:30am \n Second Service 9:30am-12:30pm',
    },
    {
      title: 'Young Adults Service',
      content: 'Sundays 2:00pm-4:00pm .',
    },
    {
      title: 'Anchored Service',
      content: 'Wednesday 6:30pm-8:00pm .',
    }
  ];
  return (
    <div>
      <BackgroundImage />
      <ThreeColumnSection />
      <div style={containerStyle}>
      <p>
        DC Utawala invites you to a day of entrepreneurship and financial training on 9th August 2023 at the ...
        The training will be done by Mr. Tim Abels, a serial entrepreneur, technology disruptor, investor, and global ministry leader.
        Tim has a heart for Christian companies operating as BAMs (Business as Mission) and seeks to connect Christian Entrepreneurs and Investors to multiply Kingdom wealth and impact.
      </p>
      <Link to='/register' style={linkStyle}>Register Now</Link>
    </div>
     <Group />

      <ImageAccordion
        imageSrc={image}
        accordionItems={accordionItems}
      />
      <Gallery />
    </div>
  )
}

export default Home