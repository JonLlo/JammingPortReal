
import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist'

function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks = {this.props.SearchResults}/>
    
    </div>
  );
}

export default SearchResults;
