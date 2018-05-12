import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './about/About';
import Footer from './application/Footer';
import Navbar from './application/Navbar';
import Services from './services/Services';
import ContactPage from './contact/Contact';
import Blog from './blog/Blog';

const App = () => {
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
        <Route path='/services' component={Services}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

//implement Navbar onScroll toggle
//implement <ScrollableLink/>
//beautify <Carousel/>
