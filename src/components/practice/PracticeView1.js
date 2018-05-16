import React from 'react';
import { Link } from 'react-router-dom';
import classes from './../../assets/images/practice/classes.png';
import photography from './../../assets/images/practice/photography.png';
import retreats from './../../assets/images/practice/retreats.png';
import schedule from './../../assets/images/practice/schedule.png';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    paddingBottom: '70px'
  },
  flexChild: {
    width: '425px',
    height: '210px',
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    boxSizing: 'border-box'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}

const PracticeView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`

      `}
      </style>
      <div style={styles.flexChild}>
        <Link to='#'><img src={classes}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='/photography'><img src={photography}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='#'><img src={retreats}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='#'><img src={schedule}/></Link>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default PracticeView1;
