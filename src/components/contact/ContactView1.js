import React from 'react';
import Form from './Form';

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
    overflow: 'hidden',
    border: '1px dotted red'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}

const ContactView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`

      `}
      </style>

      <div style={styles.flexChild}>
        <p>Please feel from to donate. Every bit counts, thank you :)</p>
      </div>

      <div style={styles.flexChild}>
        <Form/>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default ContactView1;
