import React, { Component, Fragment } from 'react';
import Header from './Header';
import PracticeWrapper from './PracticeWrapper';

class PracticePage extends Component {
  render(){
    return(
      <Fragment>
        <style>{`
          #pointer-lg:hover{
            text-shadow: 0px 0px 10px;
            cursor: pointer;
          }
          #pointer-sm:hover{
            text-shadow: 0px 0px 25px dodgerblue;
            cursor: pointer;
          }
        `}
        </style>
        <Header/>
        <PracticeWrapper id='practice-wrapper'/>
      </Fragment>
    );
  }
}

export default PracticePage;
