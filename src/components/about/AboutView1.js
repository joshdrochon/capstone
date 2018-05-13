import React from 'react';
import burningIncense from '../../assets/images/about/incense.jpg';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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

const AboutView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #about-me{
          font-weight: lighter;
        }
        #burning-incense{
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
      `}
      </style>
      <div style={styles.flexChild}>
        <h1 id='about-me'>GET TO KNOW ME</h1>
        <h3>Explore. Live. Breathe</h3><br/><hr/><br/>
        <h3><em>“Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.” ― Dalai Lama</em></h3>
      </div>
      <div style={styles.flexChild}>
        <img id='burning-incense' src={burningIncense}/>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default AboutView1;
