import React, {Component} from 'react';
import {ParallaxProvider} from "react-scroll-parallax";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Card from "../components/Card";
import SignUp from "../components/SignUp";
import JoinUs from "../components/JoinUs"
import Locations from "../components/Locations"
import '../Brand.css';
import Contact from '../components/Contact';

function HomePage() {
    return (

      <div className="background">
        <div className="overlay">

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
            <div className="music_bg">
              <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

            {/* <Card>
              <SocialMedia />
            </Card> */}

            {/* <Card>
              <Testimonials />
            </Card> */}

            {/* <div className="contact-box" >
              <Locations/>
            </div> */}

            <Card>
              <Contact/>
            </Card>

          </ParallaxProvider>
          </div>
      </div>
  
    );
}

export default HomePage;