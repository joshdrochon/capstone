import React from 'react';
import { Link } from 'react-router-dom';
import classes from './../../assets/images/practice/classes.png';
import photography from './../../assets/images/practice/photography.png';
import retreats from './../../assets/images/practice/retreats.png';
import schedule from './../../assets/images/practice/schedule.png';
import { scrollable2 } from './../../helpers';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: '18px',
    justifyContent: 'space-evenly'
  },
  flexChild: {
    width: '40%',
    minWidth: '400px',
    height: '210px',
    textAlign: 'center',
    margin: '20px',
    transition: 'transform .5s'
  }
}

const PracticeView1 = () => {
  return(
    <div id='practice-cont' style={styles.flexParent}>
      <style>{`
        @media(min-width: 701px){
          #practice-cont div:hover{
            transform: translate(0px, -13px);
          }
        }
      `}
      </style>
      <div style={styles.flexChild}>
        <Link to='/photography'><img src={photography}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='#'><img src={classes}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='#'><img src={retreats}/></Link>
      </div>
      <div style={styles.flexChild}>
        <Link to='#'><img src={schedule}/></Link>
      </div>
    </div>
  );
}

export default PracticeView1;
