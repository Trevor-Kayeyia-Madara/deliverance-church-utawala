import React from 'react'
import './pastoral.css'
import ImageText from '../../../Components/ImageText&Card/ImageText'
import ImageCard from '../../../Components/ImageText&Card/imageCard'
import Pastor from "../../../Images/Reverend Emmanuel and Lucy Kokonyo 2.jpg"
import Isaac from "../../../Images/isaac.jpg";
import Gershon from "../../../Images/Gershon.jpg";
import Dennis from "../../../Images/dennis.jpg";
import James from "../../../Images/james.jpg";
import William from "../../../Images/william.jpg";
import Mercy from "../../../Images/MERCY.jpg";
import noImage from '../../../Images/noImage.png';
import { Helmet } from 'react-helmet'

function Pastoral() {
  const pageTitle = 'Our Pastoral Team-Deliverance Church  Utawala | The Church Of Choice';
  const metaDescription ='Our leadership consists of a Pastoral Team.Together, these men and women oversee God’s work and ministry to the members of DCU. Reverend Emmanuel Kokonyo Senior Pastor is the senior pastor at.'

    const paragraphs = [
        "Thirteen years has been and praise the Lord for His Faithfulness.As a family, we came to Utawala after serving God with Deliverance Church Athi River for nine years. Lucy and I are thankful to the Lord for His Grace that has kept us going. We want to say thank you to Bishop JB and Persiah Masinde who have provided Spiritual blessing,fatherhood and prophetic dimension in our ministry. We shall forever be grateful.",
        "We want to thank our Church Leadership Team who tirelessy have supported Lucy and I. To all members of DC Utawala may God bless you. From Utawala, we have planted churches and supported pastors in Deliverance Church Valley View, Deliverance Church Joyland Ruiru, Deliverance Church Goshen City in Kisaju, Deliverance Church Naivasha,our upcoming churches in Deliverance Church Berea-Katani and Deliverance Church Utawala- Mwanza Tanzania .",
        "Finally, the person I wish to thank is Pastor Ouna, who broke the furrow grounds of DC-Utawala before I become the Senior Pastor. Our the years Our Church has received ministry from both local and international.Likewise, our church has touched many lives in Kenya,Africa,Europe and USA. I am convinced that God has greater things in store for DC-Utawala.The best is yet to come",
      ];
      const cardData = [
        { imageSrc: `${noImage}`, heading: 'Pastor Abubakar' },
        { imageSrc: `${Gershon}`, heading: 'Pastor Gershon & Phoebe' },
        { imageSrc: `${Dennis}`, heading: 'Pastor Denis Kirogo' },
        { imageSrc: `${James}`, heading: 'Pastor James and Olive Theuri'},
        { imageSrc: `${William}`, heading: 'Pastor William Ouna'},
        { imageSrc: `${noImage}`, heading: 'Pastors Josiah and Lucy'},
        { imageSrc: `${noImage}`, heading: 'Pastor David and Electina Mnyera'},
        {imageSrc: `${noImage}`, heading: 'Pastor Charles and Mary'},
      ];
    
  return (
    <div>
      <Helmet>
      <title>{pageTitle}</title>
      <meta name = "description" content={metaDescription} />
    </Helmet>
       <ImageText
        name="Reverend Emmanuel and Lucy Kokonyo"
        line="Senior Pastors"
        imagePath={Pastor}
        paragraphs={paragraphs}
      />
         <h4>Our Pastoral Team</h4>
      <div className='cards'>
      <div className="card-container">
        {cardData.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Pastoral