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
import { v4 } from 'uuid';

import Playground from './playground/Playground';

ReallySmoothScroll.shim();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterBlogPostList: {},
      selectedPost: null
    };
    this.handleAddingNewBlogPost = this.handleAddingNewBlogPost.bind(this);
    this.handleSelectedBlogPost = this.handleSelectedBlogPost.bind(this);
  }

  handleAddingNewBlogPost(newPost){
    let newPostId = v4();
    let newMasterBlogPostList = Object.assign({}, this.state.masterBlogPostList, {
      [newPostId]: newPost
    });
    //same as newMasterBlogPostList.newPost.id, bracket notation or dot notation pulls value
    newMasterBlogPostList[newPostId].updatedPublishDate = newMasterBlogPostList[newPostId].publishDate.fromNow(true);
    this.setState({masterBlogPostList: newMasterBlogPostList});
  }
  handleSelectedBlogPost(postId){
    this.setState({selectedPost: postId});
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
     let newMasterBlogPostList = Object.assign({}, this.state.masterBlogPostList);
     Object.keys(newMasterBlogPostList).forEach(postId => {
       newMasterBlogPostList[postId].updatedPublishDate = (newMasterBlogPostList[postId].publishDate).fromNow(true);
     });
     this.setState({masterBlogPostList: newMasterBlogPostList});
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
          .flex-parent{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            height: max-content;
            padding-top: 70px;
            padding-bottom: 70px;
            overflow: hidden;
            position: relative;
          }
          .flex-child{
            width: 500px;
            height: max-content;
            text-align: center;
            margin: 20px;
            padding: 10px;
            box-sizing: border-box;
            overflow: hidden;
          }
          .bottom-line{
            width: 80%;
            margin: 0px;
            position: absolute;
            bottom: 0;
          }
          button:hover{
            cursor: pointer;
          }
          textarea{
            resize: none;
          }
          textarea:focus, input:focus, button:active{
            outline: none;
          }
          @media(max-width: 700px){
            .flex-parent{
              padding-top: 25px;
              padding-bottom: 25px;
            }
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
            selectedPost={this.state.selectedPost}/>}
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
