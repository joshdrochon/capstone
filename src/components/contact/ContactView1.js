import React, { Fragment } from 'react';
import { scrollable } from './../../helpers';

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
    overflow: 'hidden'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  },
  topBar: {
    width: '50%',
    height: 'max-content',
    margin: 'auto',
    marginTop: '70px',
    marginBottom: '70px',
    padding: '35px',
    textAlign: 'center',
    borderTop: '1px solid darkgray',
    borderBottom: '1px solid darkgray'
  },
  pointer:{
    width: 'max-content',
    fontSize: 'calc(30px + 2.5vw)',
    color: 'black',
    fontWeight: 'lighter',
    transition: 'text-shadow 0.5s ease-in-out'
  }
}

const ContactView1 = () => {
  return(
    <Fragment>
      <style>{`
        #pointer:hover{
          text-shadow: 0px 0px 25px dodgerblue;
          cursor: pointer;
        }
        #about-me{
          font-weight: lighter;
        }
        #burning-incense{
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
        @media(max-width: 500px){
          #pointer{
            font-size: 36px !important;
          }
        }
      `}
      </style>
      <div style={styles.topBar}>
        <span style={styles.pointer} onClick={scrollable} id='pointer' style={styles.pointer}>CONTACT US</span>
      </div>
      <div style={styles.flexParent}>
        <div style={styles.flexChild}>
          <h1 id='about-me'>Check this out!</h1>
          <h3>Blah. Blah. Blah</h3><br/><hr/><br/>
          <h3><em>“Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.” ― Dalai Lama</em></h3>
        </div>
        <div style={styles.flexChild}>
          <p>placeholder text</p>
        </div>
        <hr style={styles.hr}/>
      </div>
    </Fragment>
  );
}

export default ContactView1;
