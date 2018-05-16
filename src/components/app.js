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

import Playground from './playground/Playground';

ReallySmoothScroll.shim();

class App extends Component {
  render(){
    return (
      <div className='wrapper'>
        <style>{`
            *{
              margin: 0px;
              padding: 0px;
              font-family: 'indie flower', cursive;
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
          <Route path ='/about' component={About}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/admin' component={NewBlogPostControl} />
          <Route path='/contact' component={ContactPage}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/playground' component={Playground}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;

//beautify <Carousel/>


//do ajax call in component did mount. If the component //hasn't mounted, how can it receive any data?
