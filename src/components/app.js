import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import Footer from './application/Footer';
import Navbar from './application/Navbar';
import Home from './home/Home';
import About from './about/About';
import Practice from './practice/Practice';
import Contact from './contact/Contact';
import Blog from './blog/Blog';
import NewBlogPostControl from './admin/NewBlogPostControl';
import PhotoAlbum from './practice/album/PhotoAlbum';

import { v4 } from 'uuid';
import base from '../base';

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
    this.setState({masterBlogPostList: newMasterBlogPostList});
  }
  handleSelectedBlogPost(postId){
    this.setState({selectedPost: postId});

    console.log(this.state.masterBlogPostList[postId].title)
  }
  componentDidMount(){
    window.scrollTo(0, 0);

    //sync to firebase
    this.ref = base.syncState('/blog', {
      context: this,
      state: 'masterBlogPostList'
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className='wrapper'>
        <style>{`

          {/* glabal styles */}

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
          .clickable:hover{
            cursor: pointer;
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

          {/* Header styles */}

          .banner{
            width: 100%;
            display: block;
            transition: all 1s ease-out;
          }
          .tagline{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: max-content;
            color: white;
            letter-spacing: 5px;
            font-weight: lighter;
            font-family: garamond-premier-pro-light-display;
            font-size: calc(30px + 2.5vw);
            transition: text-shadow 0.5s ease-in-out;
            text-decoration: none;
          }
          .active:hover{
            text-shadow: 0px 0px 10px;
            cursor: pointer;
          }
          @media(max-width: 700px){
            .tagline{
              font-size: 36px;
            }
          }
          @media(max-width: 500px){
            .tagline{
              font-size: 24px;
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
            <Route path='/contact' component={Contact}/>
            <Route
              path='/blog'
              render={()=><Blog
              blogPostList={this.state.masterBlogPostList}
              onBlogPostSelection={this.handleSelectedBlogPost}
              selectedPost={this.state.selectedPost}/>}
            />
            <Route path='/photography' component={PhotoAlbum}/>
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
