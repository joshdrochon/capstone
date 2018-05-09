import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <style>{`
          #navbar{
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            width: 100%;
            height: 70px;
            background: whitesmoke;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
          }
          #navbar div{
            width: 100%;
            height: 70px;
            margin: auto;
          }
          #navbar a{
            color: #101010;
            text-decoration: none;
            font-size: 30px;
            line-height: 70px;
          }
          #navbar a:hover{
            padding:15px;
            text-shadow: 0px 0px 25px dodgerblue;
          }
        `}
      </style>
      <div id='navbar'>
        <p/>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>
        <div><Link to='/services'>Services</Link></div>
        <div><Link to='/blog'>Blog</Link></div>
        <div><Link to='/contact'>Contact</Link></div>
        <p/>
      </div>
    </div>
  );
}

export default Navbar;
