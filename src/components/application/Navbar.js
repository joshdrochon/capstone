import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import compass from './../../assets/images/splash/compass.png';

const Navbar = () => {
  return(
    <div id='navbar'>
      <style>{`
          #navbar{
            display: grid;
            grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
            width: 100%;
            height: 10vh;
            background: whitesmoke;
            text-align: center;
            position: fixed;
            z-index: 100;
            transition: top 0.2s ease-in-out;
            top: 0;
            left: 0;
          }
          #navbar a:not(#logo){
            color: #101010;
            text-decoration: none;
            line-height: 10vh;
            font-size: 150%;
          }
          #logo{
            line-height: 10vh;
            font-size: 170%;
            text-decoration: none;
            color: #101010;
          }
          #navbar a:hover:not(#logo){
            text-shadow: 0px 0px 25px dodgerblue;
          }
          #compass{
            margin-top: auto;
            vertical-align: middle;
            width: 60px;
            height: 60px;
          }
        `}
      </style>
      <div><Link to='/about'>About</Link></div>
      <div><Link to='/services'>Services</Link></div>
      <div><Link id='logo' to='/'>NATALI'S <img id='compass' src={compass}/> JOURNEY</Link></div>
      <div><Link to='/blog'>Blog</Link></div>
      <div><Link to='/contact'>Contact</Link></div>
    </div>
  );
}

export default Navbar;
