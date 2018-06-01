import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div id='flex-parent-home'>
    <style>{`
      #flex-parent-home{
        display: flex;
        overflow: hidden;
        position: relative;
      }
      #flex-img-c-home{
        width: 100%;
        height: max-content;
        max-height: 85vh;
        text-align: center;
        overflow: hidden;
      }
      #welcome{
        font-style: italic;
        opacity: 0.7;
      }
    `}
    </style>
    <div id='flex-img-c-home'>
      <img onLoad={props.fadeIn} className='banner' style={{opacity: props.opacity}} src={require('./../../assets/images/banners/banner_home.jpg')}/>
    </div>
    <p><Link id='welcome' className='tagline' to='/practice'>Your Journey Awaits</Link></p>
  </div>
);

export default Header;
