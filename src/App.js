import React from 'react';
import './App.css';

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
      </div>
    </div>
  );
}

export default App;
