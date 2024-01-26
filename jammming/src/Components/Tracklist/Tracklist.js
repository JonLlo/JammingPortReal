
import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track'




function Tracklist() {
  return (

    <div className="TrackList">
      {this.tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div> 

  );
}

export default Tracklist;
