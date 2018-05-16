import React, { Component } from 'react';
import PracticeView1 from './PracticeView1';

const styles = {
  practiceWrapper: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'white',
    top: '83vh',
    height: 'max-content'
  }
}

const PracticeWrapper = () => {
  return(
    <div id='practice-wrapper' style={styles.practiceWrapper}>
      <style>{`
        @media(max-width: 700px){
          #practice-wrapper{
            top: 50vh !important;
        }
      `}
      </style>
      <PracticeView1/>
    </div>
  );
}

export default PracticeWrapper;
