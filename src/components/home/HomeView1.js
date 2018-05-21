import React from 'react';
import { content } from './../application/Content.js';

const HomeView1 = () => {
  return(
    <div>
      <style>{`
        #heading{
          margin: auto;
          width: max-content;
          font-size: calc(20px + 2.5vw);
          text-shadow: 0px 0px 25px #718679;
          padding: 30px;
        }
        #cont-cont{
          text-align: center;
          padding: 0px 20px 0px 20px;
        }
        #cont-cont h3{
          line-height: 22px;
          justify-content: both;
        }
        @media(max-width: 700px){
          #heading{
            padding: 8px;
            font-size: 30px;
          }
          #cont-cont{
            padding: 2px;
            text-align: justify;
            text-justify: inter-word;
          }
        }
        @media(max-width: 500px){
          #heading{
            font-size: 25px;
          }
          #cont-cont h3{
            font-size: 17px;
          }
        }
      `}
      </style>
      <h2 id='heading'>MY MISSION</h2>
      <div id='cont-cont'>
        <h3>{content.home.p1}</h3>
      </div>
    </div>
  );
}

export default HomeView1;
