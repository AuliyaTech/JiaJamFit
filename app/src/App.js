import React, {Component} from 'react';
import {ParallaxProvider} from "react-scroll-parallax";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Col, Row} from "./components/Grid";
// import Parallax from "./components/Parallax";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import SocialMedia from "./components/SocialMedia"
import Contacts from "./components/Contact"
import Testimonials from "./components/Testimonials"
import Card from "./components/Card";
import SignUp from "./components/SignUp";
import JoinUs from "./components/JoinUs"
import './Brand.css';

function App() {
    return (

      <div className="background">
        <div className="overlay">
        <NavBar />

        <ParallaxProvider>
            
            <Header />

            <Card>
              <About>
                <JoinUs />
              </About>
            </Card>

            <div className="sign-up-box" >
              <SignUp/>
            </div>

            <Card>
              <SocialMedia />
            </Card>

            <Card>
              <Testimonials />
            </Card>

            <Card>
              <Contacts />
            </Card>

            <Card>
              <Blog />
            </Card>

          </ParallaxProvider>
          </div>
      </div>
  
    );
}

export default App;
