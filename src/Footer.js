import React from 'react'
import './Footer.css';
import { PlayCircleOutline,
    SkipPrevious,
    SkipNext,
    PlaylistPlay,
    Shuffle,
    Repeat,
    VolumeDown,
 } from '@material-ui/icons';
import { Grid,Slide, Slider } from '@material-ui/core';




function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img src =""alt="" className='footer_albumLogo'/>
        <div className='footer_songInfo'>
            <h4> My Favorite Song</h4>
            <p>Darakhsha rayen</p>

             </div>
      </div>
      <div className='footer_center'>
        <Shuffle  className='footer_green'/>
        <SkipPrevious className='footer_icon'/>
        <PlayCircleOutline  fontSize='larger' className='footer_icon'/>
        <SkipNext className='footer_icon'/>
        <Repeat className='footer_green'/>

      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
            <Grid item >
                <PlaylistPlay/>
            </Grid>
            <Grid item >
                <VolumeDown/>
            </Grid>
            <Grid item >
                <Slider/>
            </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer
