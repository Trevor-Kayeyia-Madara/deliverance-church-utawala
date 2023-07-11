import React  from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';
import Masonry from 'react-masonry-css';
import children from "../../Images/sunday-school.jpg";
import media from "../../Images/media-1.jpg";
import men from "../../Images/Hehu Evans.jpg";
import ladies from "../../Images/daughters.jpg";
import music from "../../Images/Naema.jpg";
import young from "../../Images/Aquilla.jpg";

const Group = () => {
    const images = [
      { id: 1, src: `${music}`, title: 'Worship Ministry' },
      { id: 2, src: `${ladies}`, title: 'Daughters Of Faith' },
      { id: 3, src:`${children}`, title: 'Sunday-School' },
      { id: 4, src:`${men}`, title: 'House of Prophets' },
      { id: 5, src:`${young}`, title: 'Young Adults' },
      { id: 6, src:`${media}`, title: 'Media Team' },
    ];
  
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
      };
    
      return (
        <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.title} />
              <div className="item-title">{image.title}</div>
            </div>
          ))}
        </Masonry>
        <div className="button">
        <Link to="/ministries" className="button-link">
          All Ministries
        </Link>
      </div>
        </>
      );
    };
    
    export default Group;