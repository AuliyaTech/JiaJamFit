import React from 'react';
import {Container} from "../Grid";
import "./style.css";

function Contact() {
    return(
        <Container>
        <Row>
            <div className="contact heading">
            <p className="reg-txt colored-txt test-title">We would love to hear from you...</p></Row>
            <Row><form className="contact-form">
                <input type="text" placeholder="Your Name" id="contact-name" className="form-control reg-txt mb-2 ml-sm-2 contact-form"/>
                <input type="text" placeholder="Your Email" id="contact-email" className="form-control reg-txt mb-2 ml-sm-2 contact-form" />
                <input type="text" placeholder="Write your comment here..." id="contact-comment" className="form-control reg-txt mb-2 ml-sm-2 contact-form" />
                <button type="submit" className="btn btn-primary curs-txt mb-1 sign-up-form float-right" id="contact-btn">Send</button>
            </form>
        </div></Row>
        </Container>
        

    )
}

export default Contact;
