import React from 'react';
import { scrollable } from './../../helpers';
import arrowUp from './../../assets/images/utility/arrow-up.png';

const ContactView1 = () => {
  return(
    <div id='top-container'>
      <style>{`
        #pointer-sm{
          display: none;
          color: black;
          font-size: calc(30px + 2.5vw);
          font-weight: lighter;
        }
        @media(max-width: 700px){
          #pointer-sm{
            display: block;
          }
          #slideup-btn-cont{
            display: none;
          }
        }
        #top-container{
          width: 100%;
          overflow-y: hidden;
          background-color: inherit;
        }
        #slideup-btn-cont{
          width: 100%;
          padding-top: 10px;
        }
        #pointer-sm{
          margin: 35px 35px;
        }
        #slideup-btn{
          width: 50px;
          height: 50px;
        }
        #slideup-btn:hover{
          cursor: pointer;
          transform: translate(0px, -2px);
        }
      `}
      </style>
      <div id='slideup-btn-cont'>
      <img src={arrowUp} id='slideup-btn' onClick={scrollable}/></div>
      <p id='pointer-sm'> ~ Contact Us ~ </p>
    </div>
  );
}

export default ContactView1;
