import React from 'react';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '70px',
    paddingBottom: '70px',
    position: 'relative'
  },
  flexChild: {
    width: '700px',
    height: 'max-content',
    textAlign: 'center',
    margin: '10px',
    padding: '200px',
    border: '1px dotted purple'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}

const HomeView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #show-quote{
          font-weight: lighter;
          font-family: cursive;
          font-type: italic;
        }
      `}
      </style>
      <div style={styles.flexChild}>
        <h2>Inspiration of the day...</h2>
        <h3 id='show-quote'></h3>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default HomeView1;
