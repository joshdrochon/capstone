import React from 'react';

const styles = {
  flexParent: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '85vh',
    overflow: 'hidden'
  }
}

const PracticeView2 = () => (
  <div style={styles.flexParent}>
    <div style={styles.flxImgC}>
      <img className='banner' src={require('./../../assets/images/practice/practiceview2_fullspan.jpg')}/>
    </div>
  </div>
);

export default PracticeView2;
