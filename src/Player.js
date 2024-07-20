import React from 'react'
import './Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({sp}) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar />
        <Body spotify={sp}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Player;
