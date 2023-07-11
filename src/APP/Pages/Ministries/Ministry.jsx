import React from 'react'
import Card from './Cards';
import './style.css';
import music from "../../Images/Naema.jpg"
import ladies from '../../Images/daughters.jpg'
import children from '../../Images/sunday-school.jpg'
import cell from '../../Images/welcome.jpg'
import men from '../../Images/Hehu Evans.jpg'
import young from '../../Images/Aquilla.jpg'
import family from '../../Images/Mr Muasa.jpg'
import media from '../../Images/media-1.jpg'
import hospitality from '../../Images/hospitality.jpg'
import legacy from '../../Images/Gershon.jpg'


const CardColumnLayout = () => {
    const cards = [
      {
        imageSrc: `${music}`, 
        title: 'Worship Ministry',
        description: 'Our quality has grown tremendously to deliver great musical profile, stringent policies and discipline. I would like also to thank...',
        link: '/ministries/worship',
      },
      {
        imageSrc: `${ladies}`, 
        title: 'Daughters Of Faith',
        description: 'What an active and vibrant Daughters of Faith? By Gods Grace...',
        link: '/ministries/ladies',
      },
      {
        imageSrc: `${children}`, 
        title: 'Sunday-School',
        description:'Teach and train a child in the ways of the Lord and they shall not depart from it" Proverbs 22:6. ',
        link: '/ministries/children/',
      },
      {
        imageSrc: `${cell}`,
        title: 'Micro-Churches',
        description: 'I greet you in the name of Our Lord and Savior Jesus Christ. Welcome to the Micro Church page. All the believers devoted themselves ...',
        link: '/ministries/micro-Churches',
      },
      {
        imageSrc: `${men}`,
        title: 'House of Prophets',
        description: 'Welcome to our mens ministry.We convene together to fellowship with God, each other so as to mentor each other both spiritually and family wise..',
        link: '/ministries/men/',
      },
      {
        imageSrc: `${young}`,
        title: 'Young Adults',
        description: 'We are a group of young beautiful and handsome young people yearning for Christ, worshipping Him and striving to influence our fellow peers to follow Him through our Ministry...',
        link: '/ministries/young/',
      },
      {
        imageSrc: `${legacy}`,
        title: 'Legacy Church',
        description: 'An integral part of any growing church is the youth ministry. Deliverance Church Utawala has been imbued with congregants from this group which ..',
        link: '/ministries/legacy',
      },
      {
        imageSrc: `${media}`,
        title: 'Media Team',
        description: 'It is my priviledge to welcome you to DC UTAWALA MEDIA TEAM. From the Camera to Soundteam to the Streaming and Production until to the website IT , we ensure that DC UTAWALA stays connected to global world online...',
        link: '/ministries/media',
      },
      {
        imageSrc: `${family}`,
        title: 'Family Life',
        description: 'The Family Life Ministry wish to thank God for the far he has taken us as a ministry. FLM focuses on people in relationships and .....',
        link: '/ministries/family',
      },
      {
        imageSrc: `${hospitality}`,
        title: 'Hospitality Ministry',
        description: 'The ministry first had seven ushers ministering 30 members at that time in one service. Today we have more than..',
        link: '/ministries/hospitality/',
      },
    ];
  
    return (
      <div className="card-column-layout">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    );
  };
  
  export default CardColumnLayout