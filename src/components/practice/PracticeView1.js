import React from 'react';
import { Link } from 'react-router-dom';
import classes from './../../assets/images/practice/selectors/classes.png';
import photography from './../../assets/images/practice/selectors/photography.png';
import retreats from './../../assets/images/practice/selectors/retreats.png';
import schedule from './../../assets/images/practice/selectors/schedule.png';
import { scrollable2 } from './../../helpers';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '70px',
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

const PracticeView1 = () => (
  <div id='practice-cont' style={styles.flexParent}>
    <style>{`
      @media(min-width: 701px){
        #practice-cont div:hover{
          transform: translateY(-13px);
        }
      }
      @media(max-width: 400px){
        #practice-cont{
          padding-top: 0px !important;
          padding-bottom: 0px !important;
        }
        #practice-cont div{
          margin-bottom: -50px !important;
        }
        #practice-cont img{
          width: 75%;
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

export default PracticeView1;
