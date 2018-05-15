import React, { Component, Fragment } from 'react';
import Header from './Header';
import HomeView1 from './home/HomeView1';
import PhotoAlbum from './home/PhotoAlbum';

class LandingPage extends Component {
  render(){
    return(
      <Fragment>
        <Header/>
        <HomeView1/>
        <PhotoAlbum/>
        <h1>Landing page works</h1>
      </Fragment>
    );
  }
}

export default LandingPage;
