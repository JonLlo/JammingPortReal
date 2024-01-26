
import React from 'react';
import './Track.css';




function Track() {

  const renderAction = () => {

    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  };



  return (

<div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>//-- track artist will go here -- track album will go here </p>
  </div>
  //button class="Track-action"-- + or - will go here --/button
  {renderAction}
</div>
  );
}

export default Track;
