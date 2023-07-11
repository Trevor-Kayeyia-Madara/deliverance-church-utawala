import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-use-history';

const Video = ({ channelId, apiKey}) => {
    const [liveVideo, setLiveVideo] = useState(null);
    const history = useHistory();
  useEffect(() => {
    const fetchLiveStream = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&eventType=live&maxResults=1`
      );
      const data = await response.json();
      if (data.items.length > 0) {
        setLiveVideo(data.items[0]);
      }
    };
    fetchLiveStream();
  }, [channelId, apiKey]);
  
  const redirectToSermonsPage = () => {
    history.push('/Sermons/');
  };


  return (
    <div className='video-iframe'>
      {liveVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${liveVideo.id.videoId}`}
          title={liveVideo.snippet.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <button className="sermons-button" onClick={redirectToSermonsPage}>Go to Sermons</button>
      )}
    </div>
  );
};
export default Video;
