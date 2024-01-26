import React, { useState } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults'





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
    
    
    ]
    }

  }


  render(){
  return (
    <div>
      <p>HELLO</p>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* Add a SearchBar component */}
        
        <div className="App-playlist">
          <p></p>
          <SearchResults searchResults={this.state.searchResults}/>
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
  );
}}

export default App;