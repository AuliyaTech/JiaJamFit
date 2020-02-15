import React from 'react';
import {Container, Row, Col} from "../Grid"
import "./style.css";

function Contact() {
    return(<div class="contact">
        <Container>
        <Row><p className="reg-txt colored-txt contact-title">We would love to hear from you...</p></Row>
          <form className="contact-form">
            <Row>
              <Col size="md-12">
              <input type="text" placeholder="Your Name" id="contact-name" className="form-control reg-txt mb-2 ml-sm-2 contact-form"/>
              </Col>
            </Row>
               <Row>
                 <Col size="md-12">
                 <input type="text" placeholder="Your Email" id="contact-email" className="form-control reg-txt mb-2 ml-sm-2 contact-form" />
                 </Col>
              </Row>
               <Row>
                <Col size="md-9"><input type="text" placeholder="Write your comment here..." id="contact-comment" className="form-control reg-txt mb-2 ml-sm-2 contact-form" />
                </Col>
                <Col size="md-3"><button type="submit" className="btn btn-primary curs-txt mb-1 sign-up-form float-left" id="contact-btn">Send</button>
                </Col>
              </Row>
            </form>
        
        </Container>
        

   </div> )
}

export default Contact;
