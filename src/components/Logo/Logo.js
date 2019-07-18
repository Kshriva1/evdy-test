import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import castle from './castle.png'

const Logo = () => {

   return(

    <div className='ma3 mt4'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
       <div className="Tilt-inner pa3 ml2"> <img style={{padding:'7px'}} alt='' src={castle} /> </div>
    </Tilt>

    </div>

   	)
}

export default Logo;