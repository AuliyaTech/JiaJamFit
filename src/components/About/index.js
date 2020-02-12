import React, {useEffect, useState} from 'react';
import {Parallax} from "react-scroll-parallax";
// import Prismic from 'prismic-javascript'
// import { Date, Link, RichText } from 'prismic-reactjs'
// import Client from "../../utils/prismic-config";
import diamonds from "../../utils/images/diamonds.png"
import join from "../../utils/images/bg_join.png"
// import JoinUs from "../JoinUs";
import {Container, Row, Col} from "../Grid"
import API from "../../utils/API";
import "./style.css";

function About(props) {
    // console.log(API.getAbout[0].content)
    
    return (
        <Row>
          <Col size="md-4">
          <p className="abt-content reg-txt written-about">{API.getAbout[0].content}</p>
          </Col>
          <Col size="md-4">
          <img className="abt-content image-about" src={diamonds}/>
          </Col>
          <Col size="md-4">
          <img className="abt-content image-join" src={join}/>
          </Col>
        </Row>
      )

}


export default About;