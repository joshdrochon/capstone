import React, { Component, Fragment} from 'react';
import Login from './Login';
import NewBlogPostForm from './NewBlogPostForm';

class NewBlogPostControl extends Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleLoginConfirmation = this.handleLoginConfirmation.bind(this);
  }

  handleLoginConfirmation(){
     this.setState({formVisibleOnPage: true});
   }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBlogPostForm/>;
    } else {
      currentlyVisibleContent = <Login onHandleLoginConfirmation={this.handleLoginConfirmation}/>;
    }
    return(
      <Fragment>
        {currentlyVisibleContent}
      </Fragment>
    )
  }
}


export default NewBlogPostControl;
