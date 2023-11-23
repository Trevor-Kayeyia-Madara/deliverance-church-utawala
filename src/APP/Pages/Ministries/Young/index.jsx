import React  from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


function Young() {
  const pageTitle = 'Young Adults-Deliverance Church Utawala | The Church Of Choice';
  const metaDescription = 'We are a group of young beautiful and handsome young people yearning for Christ, worshipping Him and striving to influence our...';
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

      
      </section>
    </>
  );
}

export default Young;