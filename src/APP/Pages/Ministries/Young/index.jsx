import React, {useState,useEffect} from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


function Young() {
    const [photos, setPhotos] = useState([]);
  const pageTitle = 'Young Adults-Deliverance Church Utawala | The Church Of Choice';
  const metaDescription = 'We are a group of young beautiful and handsome young people yearning for Christ, worshipping Him and striving to influence our...';

  const clientId = '552500022152-jgr8lv00skcm9g1b0ambf1klirp11fr1.apps.googleusercontent.com';
  const albumId = 'AF1QipOSIJXlWqADdvZ-LruiecsDEV--FgMeFJJXhERU';

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://photoslibrary.googleapis.com/v1/mediaItems:search?key=${clientId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              albumId: albumId,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPhotos(data.mediaItems);
        } else {
          throw new Error('Failed to fetch photos');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

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
          {photos.map((photo) => (
            <img key={photo.id} src={photo.baseUrl} alt={photo.filename} className="gallery-image" />
          ))}
        </div>
      </section>
    </>
  );
}

export default Young;
