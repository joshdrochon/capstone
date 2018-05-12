import React from 'react';
import { allText } from './../../text-blocks';
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
    <div style={styles.flexParent}>
      <style>{`
          #envelope h3{
            font-weight: lighter;
            font-family: 'Book Antiqua';
            letter-spacing: 2px;
          }
      `}
      </style>
      <article style={styles.flexChild}>
        <span id='envelope'>
          <h3>{allText.about.p1}</h3><br/>
          <h3>{allText.about.p2}</h3><br/>
          <h3>{allText.about.p3}</h3><br/>
        </span>
      </article>
      <div style={styles.flexChild}>
        <img src={zen}/>
        <h2>"The more you are motivated by love, the more fearless and free your action will be."</h2><br/>
        <h1><em> ― Dalai Lama</em></h1>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default AboutView2;
