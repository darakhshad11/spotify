import React from 'react';
import './Songrow.css';

function Songrow({ track }) {
  return (
    <div className='songRow'>
      <img src={track.album.images[0].url} alt="" className='songRow__album' />
      <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songrow;
