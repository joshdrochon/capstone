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
      .compress{
        animation: compress 1s ease-in forwards;
        font-style: italic;
        opacity: 0.7;
      }
      @keyframes compress {
        from{
          opacity: 0.3;
          letter-spacing: 100px;
        }
        to{
          letter-spacing: 5px;
        }
      }
    `}
    </style>
    <div id='flex-img-c-home'>
      <img onLoad={props.fadeIn} className='banner' style={{opacity: props.opacity}} src={require('./../../assets/images/banners/banner_home.jpg')}/>
    </div>
    <p><Link className='tagline active compress' to='/practice'>Your Journey Awaits</Link></p>
  </div>
);

export default Header;
