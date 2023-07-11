import React  from 'react';
import './live.css'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import CHANNEL_ID from '../../../assets/channel'
import API_KEY from '../../../assets/config'
import { Helmet } from 'react-helmet';
import SocialMediaComponent from '../Home/SocialMedia/SocialMediaComponent';

function Live() {
  const pageTitle = 'Livestream - Deliverance Church Utawala | The Church Of Choice';
  const metaDescription ='Join Us today and every Weekly and Sunday Services for inspiring and innovative sermons and special events...'

  return (
    <div>
       <Helmet>
      <title>{pageTitle}</title>
      <meta name = "description" content={metaDescription} />
    </Helmet>
       <h3 className="title">Live</h3>
       <div className="video-content">
       <div className="video">
      <VideoPlayer channelId={CHANNEL_ID} apiKey={API_KEY} />
      </div>
      <div className="text-right">
      <p>Join Us today and every Weekly and Sunday Services for inspiring and innovative
            sermons and special events...
           </p>
      <SocialMediaComponent />
      </div>
    </div>
    </div>
  )
}

export default Live