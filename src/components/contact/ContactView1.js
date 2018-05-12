import React from 'react';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '45vh'
  },
  flexChild: {
    width: '500px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px'
  }
}

const ContactView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #contact-us{
          font-size: 55px;
          font-weight: lighter;
        }
        #image1{
          width: 400px;
          height: 400px;
        }
      `}
      </style>
      <div styles={styles.flexChild}>
        <span id='contact-us'>CONTACT US</span>
      </div>
      <div styles={styles.flexChild}>
        <img id='image1' src={paintStroke}/>
      </div>
    </div>
  );
}

export default ContactView1;
