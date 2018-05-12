import React from 'react';
import rocks from './../../assets/images/banners/banner_blog.jpg';

const styles = {
  header: {
    width: '100vw',
    height: '90vh',
    textAlign: 'center',
    backgroundImage: `url(${rocks})`,
    backgroundSize: 'cover'
  }
}

const Header = () => {
  return(
    <div style={styles.header}></div>
  );
}

export default Header ;
