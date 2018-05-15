import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import compass from './../../assets/images/splash/compass.png';
import menuIcon from './menu-icon.svg';

const fontResize = () => {
  let perc = parseInt($(window).width())/60;
  $('#navbar').css('font-size',perc);
}

$(() => {
    fontResize();
});
$(window).resize(() => {
  fontResize();
});

$(( )=> {
  $('#menu').click(() => {
    $('#options').slideToggle();
  });
  $('#options').click(() => {
    $('#options').hide();
  });
});

const Navbar = () => {
  return(
    <Fragment>
      <style>{`
        #navbar{
          display: grid;
          grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
          width: 100%;
          height: 80px;
          background: white;
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
          line-height: 80px;
          font-size: 150%;
        }
        #logo{
          line-height: 80px;
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

        {/* smaller screen styles */}

        @media (max-width: 700px){
          #navbar{
            display: none;
          }
          #menu{
            display: block;
          }
        }
        @media(min-width: 701px){
          #options{
            display: none !important;
          }
        }

        #options{
          margin-top: 70px;
        }
        .nav{
          display: none;
          padding: 0px;
          margin: 0px;
          width: 100%;
          min-height: 70px;
          height: max-content;
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
        }
        .nav:hover{
          cursor: pointer;
        }
        .nav div{
          width: 100%;
          height: 70px;
          text-align: center;
          line-height: 70px;
          background-color: white;
        }
        .nav a{
          font-size: 220%;
          text-decoration: none;
          color: inherit;
        }
        .nav div:hover:not(#target){
          box-shadow: inset 6px 0 0 0 #6f8a6d;
        }
        #target{
          font-size: 220%;
          border-bottom: none;
        }
        #menu-icon{
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
      `}
      </style>
      <div id='navbar'>
        <div><Link to='/about'>ABOUT</Link></div>
        <div><Link to='/services'>PRACTICE</Link></div>
        <div><Link id='logo' to='/'>NATALI'S <img id='compass' src={compass}/> JOURNEY</Link></div>
        <div><Link to='/blog'>BLOG</Link></div>
        <div><Link to='/contact'>CONTACT</Link></div>
      </div>

      <div className='nav' id='menu'>
        <div id='target'>MENU <img id='menu-icon' src={menuIcon}/></div>
      </div>

      <div className='nav' id='options'>
        <Link to='/'><div id='home'>HOME</div></Link>
        <Link to='/about'><div>ABOUT</div></Link>
        <Link to='/services'><div>PRACTICE</div></Link>
        <Link to='/blog'><div>BLOG</div></Link>
        <Link to='/contact'><div>CONTACT</div></Link>
      </div>
    </Fragment>
  );
}

export default Navbar;
