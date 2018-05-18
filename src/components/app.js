import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import LandingPage from './LandingPage';
import About from './about/About';
import Footer from './application/Footer';
import Navbar from './application/Navbar';
import Practice from './practice/Practice';
import ContactPage from './contact/Contact';
import Blog from './blog/Blog';
import NewBlogPostControl from './admin/NewBlogPostControl';
import PhotoAlbum from './practice/album/PhotoAlbum';

import Playground from './playground/Playground';

ReallySmoothScroll.shim();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterBlogPostList: [
        {
          title: 'From India to Nepal',
          body: 'There was a successfully displaying blogpost'
        }
      ]
    };
    this.handleAddingNewBlogPost = this.handleAddingNewBlogPost.bind(this);
  }

  handleAddingNewBlogPost(newPost){
    let newMasterBlogPostList = this.state.masterBlogPostList.slice();
    newMasterBlogPostList.push(newPost);
    this.setState({
      masterBlogPostList: newMasterBlogPostList
    });
  }

  render(){
    return (
      <div className='wrapper'>
        <style>{`
          *{
            margin: 0px;
            padding: 0px;
            font-family: 'indie flower', 'book-antique';
          }
          body{
            background-color: white;
          }
          .wrapper{
            padding-top: 70px;
          }
        `}
        </style>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/about' component={About}/>
          <Route
            path='/admin'
            render={()=><NewBlogPostControl   onNewPostCreation={this.handleAddingNewBlogPost} />}
          />
          <Route path='/practice' component={Practice}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/blog'
            render={()=><Blog
            blogPostList={this.state.masterBlogPostList} />}
          />
          <Route path='/playground' component={Playground}/>
          <Route path='/photography' component={PhotoAlbum}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
