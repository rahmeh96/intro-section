import React from 'react'
import hero from './images/image-hero-desktop.png';
import biz from './images/client-databiz.svg';
import audio from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';
//import { Outlet } from 'react-router-dom';
function Main() {
  return (
    <main>
        <div className='text'>
            <h1> Make <br/>  Remote Work </h1><br/>
<p> get your team in sync, no matter your location, streamline proccess, create team team rituals, and watch productivity soar</p>
        <br/>
        <button>
             Learn more
        </button>
        <div className='icons'>
<img src={biz} alt=''/>
<img src={audio} alt=''/>
<img src={meet} alt=''/>
<img src={maker} alt=''/>

        </div>
        </div>
        <div>
            <img src={hero} alt='' className='hero--img'/>
        </div>
      
    </main>
  )
}

export default Main;
