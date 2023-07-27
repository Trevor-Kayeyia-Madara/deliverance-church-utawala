import React, { useState, useEffect } from 'react';
import './style.css';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-css';

function Young() {
  const [photos, setPhotos] = useState([]);

  const pageTitle = 'Young Adults-Deliverance Church Utawala | The Church Of Choice';
  const metaDescription = 'We are a group of young beautiful and handsome young people yearning for Christ, worshipping Him and striving to influence our...';

  useEffect(() => {
    // Fetch photos or use any other method to populate the `photos` state
    const fetchedPhotos = [
      'https://example.com/photo1.jpg',
      'https://example.com/photo2.jpg',
      'https://example.com/photo3.jpg',
      // Add more photo URLs as needed
    ];
    setPhotos(fetchedPhotos);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <section className="young">
        <div className="young-container">
          <p>
            We are a group of young beautiful and handsome young people yearning for Christ, worshipping Him and striving to influence our fellow peers to follow Him through our Ministry. Our mission is to:
            To Equip Young Adults For The Mission Of God.
            Our Service runs every Sunday From 2:00PM-4:00PM We urge everyone to come and experience 2 hours of praise and worship.
          </p>
          <p>
            Apart from Sunday Services, we also host other events such as; Quiz Night, Seminars, Coffee Sunday, Movie Sunday, Christian Concerts
          </p>
        </div>

        <h2>Worship Experience Gallery</h2>
        <div className="gallery">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`church ${index + 1}`} />
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}

export default Young;