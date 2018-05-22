import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import Home from './home/Home';
import About from './about/About';
import Footer from './application/Footer';
import Navbar from './application/Navbar';
import Practice from './practice/Practice';
import ContactPage from './contact/Contact';
import Blog from './blog/Blog';
import NewBlogPostControl from './admin/NewBlogPostControl';
import PhotoAlbum from './practice/album/PhotoAlbum';
import Moment from 'moment';

import Playground from './playground/Playground';

ReallySmoothScroll.shim();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterBlogPostList: [],
      selectedStory: null
    };
    this.handleAddingNewBlogPost = this.handleAddingNewBlogPost.bind(this);
    this.handleSelectedBlogPost = this.handleSelectedBlogPost.bind(this);
  }

  handleAddingNewBlogPost(newPost){
    let newMasterBlogPostList = this.state.masterBlogPostList.slice();
    newPost.updatedPublishDate = (newPost.publishDate).fromNow(true)
    newMasterBlogPostList.push(newPost);
    this.setState({
      masterBlogPostList: newMasterBlogPostList
    });
  }

  handleSelectedBlogPost(post){
    this.setState({selectedStory: post.story});
    console.log('The selected story is now ' + this.state.selectedStory);
  }

  componentDidMount(){
    this.updateTimer()
  }

  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }

  updateTimer(){
    setInterval(()=>
      this.updateElapsedTime(),
    60000);
  }

  updateElapsedTime(){
     console.log('Checking for blog post updates every minute');
     let newMasterBlogPostList = this.state.masterBlogPostList.slice();
     newMasterBlogPostList.forEach((post) =>
       post.updatedPublishDate = (post.publishDate).fromNow(true)
     );
     this.setState({masterBlogPostList: newMasterBlogPostList})
  }
  render(){
    console.log(this.state);
    return (
      <div className='wrapper'>
        <style>{`
          *{
            margin: 0px;
            padding: 0px;
            font-weight: lighter;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          }
          body{
            background-color: white;
          }
          .wrapper{
            padding-top: 70px;
          }
          button:hover{
            cursor: pointer;
          }
        `}
        </style>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route
            path='/admin'
            render={()=><NewBlogPostControl onNewPostCreation={this.handleAddingNewBlogPost} />}
          />
          <Route path='/practice' component={Practice}/>
          <Route path='/contact' component={ContactPage}/>
          <Route
            path='/blog'
            render={()=><Blog
            blogPostList={this.state.masterBlogPostList}
            onBlogPostSelection={this.handleSelectedBlogPost}
            selectedStory={this.state.selectedStory}/>}
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
