import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (

    //BEM naming convention
    <div className="app">
     <div className="app__top">
        {/* image at top - logo */}
        {/* Reels text */}
        <img className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
        <h1>Reels</h1>
      </div>
     
      <div className="app__videos">
        {/* container of app__videos (scrollable container) */}

        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}


        <VideoCard 
          channel='cleverqazi'
          avatarSrc=''
          song='Test song - ssssangha'
          url='./Videos/sample-mp4-file.mp4'
          likes={950}
          shares={300}
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> 

      </div>
    </div>
  );
}

export default App;
