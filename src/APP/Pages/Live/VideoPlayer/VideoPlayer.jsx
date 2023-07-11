import React, { useEffect, useState } from 'react';
import '../live.css';

const VideoPlayer = ({ channelId, apiKey }) => {
  const [liveVideo, setLiveVideo] = useState(null);

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
    window.location.href = '/Sermons';
  };

  return (
    <div className='video-iframe'>
      {liveVideo ? (
        <iframe
          width="500px"
          height="315px"
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

export default VideoPlayer;
