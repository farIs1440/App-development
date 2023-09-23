import React from 'react';
import '../styles/genre.css';

const GenrePage = () => {
  return (
    <div className="genre-page">
      <h1>Genres</h1>
      <div className="genre-list">
        <div className="genre-item pop">
          <div className="genre-image">
            
          </div>
          <h2>Pop</h2>
        </div>
        <div className="genre-item rock">
          <div className="genre-image">
            
          </div>
          <h2>Rock</h2>
        </div>
        <div className="genre-item hip-hop">
          <div className="genre-image">
            
          </div>
          <h2>Hip-Hop</h2>
        </div>
        {/* Add more genre items as needed */}
      </div>
    </div>
  );
};

export default GenrePage;
