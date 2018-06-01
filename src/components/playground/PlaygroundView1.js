import React, { Component, Fragment } from 'react';

class PlaygroundView1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: 0
    }
    this.fadeIn = this.fadeIn.bind(this);
  }

  fadeIn(){
    this.setState({
      opacity: 1
    })
  }


  componentDidMount(){
    this.fadeIn();
  }

  render(){
    return(
      <Fragment>
        <style>
        {`
          #test{
            width: 300px;
            height: 300px;
            background-color: red;
            transition: all 1s ease-out;
          }
        `}
        </style>
        <div id='test' style={{opacity: this.state.opacity}}>Hello I am some text rext</div>

      </Fragment>
    );
  }
}

export default PlaygroundView1 ;
