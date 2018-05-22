import React from 'react';
import { content } from './../application/Content.js';
import zen from './../../assets/images/about/zen.jpg';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    paddingBottom: '70px',
    overflow: 'hidden',
    position: 'relative'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}
const AboutView2 = () => {
  return(
    <div id='flex-parent' style={styles.flexParent}>
      <style>{`
        #envelope h4{
          font-weight: lighter;
          letter-spacing: 2px;
        }
        @media(max-width: 700px){
          #envelope{
            padding: 2px;
            text-align: justify;
            text-justify: inter-word;
          }
          #flex-parent{
            padding-top: 0px !important;
            padding-bottom: 0px !important;
          }
        }
      `}
      </style>
      <article style={styles.flexChild}>
        <span id='envelope'>
          <h4>{content.about.p1}</h4><br/>
          <h4>{content.about.p2}</h4><br/>
          <h4>{content.about.p3}</h4><br/>
        </span>
      </article>
      <div style={styles.flexChild}>
        <img src={zen}/>
        <h3>"The more you are motivated by love, the more fearless and free your action will be."</h3><br/>
        <h3><em> ― Dalai Lama</em></h3>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default AboutView2;
