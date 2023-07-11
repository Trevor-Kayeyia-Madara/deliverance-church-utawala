import React, { useState, useEffect } from 'react';
import './sermons.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Sermons() {
  const pageTitle = 'Sermons - Deliverance Church Utawala | The Church Of Choice';
  const metaDescription ='This are our latest sermons.................'
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet,id",
            channelId: "UCRAdHhMSvLBgFXrJOJinaLA",
            maxResults: 50,
            key:"AIzaSyDYPl4nSgJe5Ya2iI_6Luq8eulPDwoIpFY",
            order: 'date',
            type: 'video',
          },
        }
      );
      setVideos(response.data.items);
    };
    fetchVideos();
  }, []);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="sermons-page">
      <Helmet>
      <title>{pageTitle}</title>
      <meta name = "description" content={metaDescription} />
    </Helmet>
      <h1>Sermons</h1>
      <div className="video-grid">
        {currentVideos.map((video) => (
          <div className="video-card" key={video.id.videoId}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={videos.length}
        paginate={paginate}
      />
    </div>
  );
}

function Pagination({ videosPerPage, totalVideos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sermons;