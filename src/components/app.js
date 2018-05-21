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
      masterBlogPostList: [
        {
          author: 'Into the Forest',
          title: 'Natali Coronel',
          preview: 'This is the story of a girl who traveled into the forest',
          story: 'and lived there for six months, all the while writing the next great American novel. She went through a lot of heartache missing what it meant to live in civilization, however the rewards were great',
          image: './forest.jpg',
          id: '47',
          publishDate: new Moment()
        }
      ],
      selectedBlogPost: null
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
    this.setState({selectedPost: post});
    console.log('You clicked on ' + this.state.selectedBlogPost.title);
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
            onBlogPostSelection={this.state.handleSelectedBlogPost}/>}
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
