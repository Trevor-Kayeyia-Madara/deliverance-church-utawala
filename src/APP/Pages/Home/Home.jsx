import React   from 'react';
import BackgroundImage from '../../Images/BACKGROUND.jpg';
import Video from './Videos/Video';
import './Home.css';
import SocialMediaComponent from './SocialMedia/SocialMediaComponent';
import ImageAccordion from './ImageAccordion/ImageAccordion';
import image from './ImageAccordion/gallery-11.jpg';
import church from '../../images/church.jpg';
import Gallery from '../../Gallery';

function Home() {
  const accordionItems = [
    {
      title: 'MidWeek Services',
      content: 'Micro-Churches Tuesdays 6:30pm-8:00pm \nIgnite Service Fridays 6:30pm-8:00pm',
    },
    {
      title: 'Sunday Service',
      content: 'Morning Prayers 6:30am-6:45am \n First Service 6:45am-9:30am \n Second Service 9:30am-12:30pm',
    },
    {
      title: 'Anchored Service',
      content: 'Wednesday 6:30pm-8:00pm .',
    }
  ];
  const channelId = "UCbN_lHKp1o0zHi8AFL2I1Ig";
  const apiKey = "AIzaSyDYPl4nSgJe5Ya2iI_6Luq8eulPDwoIpFY";
  
  
  return (
    <>
      <BackgroundImage />
      <h4 className='welcome'>Welcome</h4>
        <h2 className='about'>Church of Choice</h2>
      <div className="component">
       
      <div className="church-container">
        <img src={church} alt="church" className="church" />
      </div>
      <div className="paragraph-container">
      <p className="paragraph">
      <span className="prolong-w">W</span>elcome to Deliverance Church Utawala. We are an Apostolic Church Of Choice that Vision to Transform and Empower Mankind in Africa and Beyond and Aim at Equipping Mankind for the Mission of God.
</p>
      </div>
    </div>
      <ImageAccordion
        imageSrc={image}
        accordionItems={accordionItems}
      />
       <Gallery />
      <div className="video-content">
       
      <div className="video">
        <Video channelId={channelId} apiKey={apiKey} />
      </div>
      <div className="text-right">
      <p>Join Us today and every Weekly and Sunday Services for inspiring and innovative
            sermons and special events...
           </p>
           <SocialMediaComponent />
      </div>
    </div>
    </>
  )
}

export default Home;