import React from 'react';

const styles={
  tagline:{
    color: 'white',
    fontWeight: 'lighter',
    fontSize: 'calc(30px + 2.5vw)',
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const PlaygroundView1 = () => {
  return(
    <div id='content'>
      <style>{`
        #content{
          width: 100%;
          text-align: center;
          position: relative;
          background-color: lightgray;
          top: 650px;
          height: 1500px;
        }
        #tagline-sm{
          display: none;
        }
        @media(max-width: 700px){
          #content{
            top: 400px !important;
          }
          #tagline-sm{
            display: block;
          }
        }
      `}
      </style>
      <p id='tagline-sm' style={styles.tagline}>X</p>
    </div>
  );
}

export default PlaygroundView1 ;
