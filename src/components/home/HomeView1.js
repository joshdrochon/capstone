import React from 'react';

const styles = {
  flexParent: {
    display: 'flex'
  },
  flexChild: {
    display: 'inherit'
  }
}

const HomeView1 = () => {
  return(
    <div style={styles.flexParent}>
      <div style={styles.flexChild}></div>
      <div style={styles.flexChild}></div>
    </div>
  );
}

export default HomeView1;
