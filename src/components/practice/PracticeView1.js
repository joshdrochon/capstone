import React from 'react';
import { Link } from 'react-router-dom';
import classes from './../../assets/images/practice/classes.png';
import photography from './../../assets/images/practice/photography.png';
import retreats from './../../assets/images/practice/retreats.png';
import schedule from './../../assets/images/practice/schedule.png';
import arrowUp from './../../assets/images/utility/arrow-up.png';
import { scrollable2 } from './../../helpers';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'auto',
    minHeight: '100%',
    paddingBottom: '40px'
  },
  flexChild: {
    width: '420px',
    height: '210px',
    textAlign: 'center'
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
        #slideup-btn-cont{
          width: 100%;
          padding: 10px 0px 5px 0px;
          height: max-content;
        }
        #slideup-btn{
          width: 50px;
          height: 50px;
        }
        #slideup-btn:hover{
          cursor: pointer;
          transform: translate(0px, -2px);
        }
      `}
      </style>
      <div id='slideup-btn-cont'>
      <img src={arrowUp} id='slideup-btn' onClick={scrollable2}/></div>
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
      <hr id='page-bottom' style={styles.hr}/>
    </div>
  );
}

export default PracticeView1;
