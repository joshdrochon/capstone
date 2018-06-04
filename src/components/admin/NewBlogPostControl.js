import React, { Component, Fragment} from 'react';
import Login from './Login';
import NewBlogPostForm from './NewBlogPostForm';
import PropTypes from 'prop-types';

class NewBlogPostControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleLoginConfirmation(){
     this.setState({formVisibleOnPage: true});
   }

  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBlogPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      currentlyVisibleContent = <Login onHandleLoginConfirmation={this.handleLoginConfirmation.bind(this)}/>;
    }
    return(
      <Fragment>
        {currentlyVisibleContent}
      </Fragment>
    )
  }
}

NewBlogPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewBlogPostControl;
