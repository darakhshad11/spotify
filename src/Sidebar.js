import React from 'react';
import './Sidebar.css';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img 
        src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
        alt='spotify-logo'
        className='sidebar-logo'
      />
      <SideBarOption title='Home' Icon={HomeIcon} />
      <SideBarOption title='Search' Icon={SearchIcon} />
      <SideBarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SideBarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
