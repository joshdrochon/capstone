import React from 'react';
import yogaForest from './../../assets/images/yoga-forest.png';

const styles = {
  header: {
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${yogaForest})`,
    backgroundSize: 'cover'
  }
}

const Header = () => {
  return(
    <div style={styles.header}></div>
  );
}

export default Header;
