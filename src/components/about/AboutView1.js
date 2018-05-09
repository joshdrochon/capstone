import React from 'react';
import paintStroke from '../../assets/images/paint-stroke.png';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '45vh'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px'
  }
}

const AboutView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #about-me{
          font-size: 55px;
          font-weight: lighter;
        }
        #paint-stroke{
          width: 300px;
          height: 300px;
        }
      `}
      </style>
      <div styles={styles.flexChild}>
        <span id='about-me'>GET TO KNOW ME</span>
      </div>
      <div styles={styles.flexChild}>
        <img id='paint-stroke' src={paintStroke}/>
      </div>
    </div>
  );
}





















export default AboutView1;
