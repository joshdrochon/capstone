import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './about/About';
import Footer from './application/Footer';

const App = () => {
  return (
    <div>
      <style>{`
          *{
            margin: 0px;
            padding: 0px;
          }
      `}
      </style>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path ='/about' component={About}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
