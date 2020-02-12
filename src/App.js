import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Locations from "./components/Locations"
import HomePage from "./pages/homepage";
import Footer from "./components/Footer"
import Waiver from "./components/Waiver"
import testimonials from "./components/Testimonials"
// import Register from "./register.html";

import './Brand.css';


function App() {
    return (

      <div className="background">
        <div className="overlay">
        <NavBar />
        <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/location' component={Locations} />
          <Route exact path='/waiver' component={Waiver} />

          <Route exact path='/testimonials' component={testimonials} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
      <Footer/>
          </div>
      </div>
  
    );
}

export default App;
