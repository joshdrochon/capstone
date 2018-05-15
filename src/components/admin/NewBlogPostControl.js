import React, { Component, Fragment} from 'react';
import Login from './Login';
import NewBlogPostForm from './NewBlogPostForm';

class NewBlogPostControl extends Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  // 
  // handleClick(){
  //   this.setState({
  //     formVisibleOnPage: true
  //   });
  //   console.log('the form is currently set to ' + this.state.formVisibleOnPage);
  // }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBlogPostForm/>;
    } else {
      currentlyVisibleContent = <Login/>;
    }
    return(
      <Fragment>
        {currentlyVisibleContent}
      </Fragment>
    )
  }
}


export default NewBlogPostControl;
