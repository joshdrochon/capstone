import React from 'react';
import Form from './Form';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    paddingBottom: '70px',
    position: 'relative'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'hidden'
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
        #contact-view{
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
        <img id='contact-view' src={require('./../../assets/images/contact/contact-view.png')}/>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default ContactView1;
