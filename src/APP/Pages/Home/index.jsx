import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../Components/BackGround/index'
import Group from '../../Components/Gallery'
import ImageAccordion from '../../Components/ImageAccordion/ImageAccordion'
import image from '../../Images/sunday.jpg'
import Gallery from '../../Components/Masonry-Gallery'



const Home = () => {

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
      <Link to='/entreprenuership/register'>Register Now</Link>
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