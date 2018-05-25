import React from 'react';
import burningIncense from '../../assets/images/about/incense.jpg';

const AboutView1 = () => {
  return(
    <div className='flex-parent'>
      <style>{`
        #about-me{
          font-weight: lighter;
        }
        #burning-incense{
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
      `}
      </style>
      <div className='flex-child'>
        <h1 id='about-me'>GET TO KNOW ME</h1>
        <h3>Explore. Live. Breathe</h3><br/><hr/><br/>
        <h3><em>“Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.” ― Dalai Lama</em></h3>
      </div>
      <div className='flex-child'>
        <img id='burning-incense' src={burningIncense}/>
      </div>
      <hr className='bottom-line'/>
    </div>
  );
}

export default AboutView1;
