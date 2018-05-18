import React from 'react';
import Form from './Form';
import reachOut from './../../assets/images/contact/reach-out.jpg';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'reverse-wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    paddingBottom: '70px',
    overflow: 'hidden',
    position: 'relative',
    border: 'border 1px solid black'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    border: '1px solid black'
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
        #reach-out{
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
      `}
      </style>
      <div style={styles.flexChild}>
        <Form/>
      </div>
      <div style={styles.flexChild}>
        <img id='reach-out' src={reachOut}/>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default ContactView1;
