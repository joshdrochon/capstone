import React from 'react';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    width: '100%',
    height: 'max-content',
    maxHeight: '82vh',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: 'red'
  },
  tagline: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    color: 'white',
    fontWeight: 'lighter',
    fontSize: 'calc(30px + 2.5vw)',
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const Header = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
          #banner-img{
            width: 100%;
            display: block;
          }
      `}
      </style>
      <div style={styles.flxImgC}>
        <img id='banner-img' src={require(`./banner_playground.jpg`)} />
      </div>
      <p style={styles.tagline}>X MARKS THE SPOT</p>
    </div>
  );
}

export default Header;
