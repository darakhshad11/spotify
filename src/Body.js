import React from 'react';
import './Body.css';
import Songrow from './Songrow';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import { PlayCircleFilled, Favorite,MoreHoriz } from '@material-ui/icons';


function Body({spotify}) {
 const [{discover_weekly}, dispatch] =useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>
      <div className='body_info'>
            <img src ={discover_weekly?.image[0]?.url} alt=''/>
        <div className='body_infoText'>
          <strong>PLAYLISTS</strong>
          <h2>discover_weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
            <PlayCircleFilled className='body_shullfe'/>
            <Favorite fontSize='larger'/>
            <MoreHoriz/>

        </div>
        {discover_weekly?.track.items.map((item) =>(
            <Songrow track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body
