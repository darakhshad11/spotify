import React from 'react';
import './Login.css';
import { loginUrl } from './Spotify';

const Login = () => {
  return (
    <div className='login'>
      <img 
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" 
        alt='spotify'
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
