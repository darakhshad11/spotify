import React from 'react';
import { Search } from '@material-ui/icons';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();  

  return (
    <div className='header'>
      <div className='header__left'>
        <Search />
        <input 
          placeholder='Search...' 
          type='text' 
          className='header__searchInput' 
        />
      </div>    
      <div className='header__right'>
        <Avatar 
          src={user?.images[0]?.url} 
          alt={user?.display_name} 
          className='header__avatar'
        />
        <h4 className='header__userName'>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
