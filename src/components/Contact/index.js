import React from 'react';
import {Container} from "../Grid";
import "./style.css";

function Contact() {
    return(
        <Container>
            <div className="contact heading">
            <p className="reg-txt colored-txt contact-title">We'd love to here from you...</p>
            <form className="contact-form">
                <label className="reg-txt">Your Name</label>
                <input type="text" placeholder="Jane Doe" id="contact-name" className="form-control reg-txt mb-2 mr-sm-2 contact-form"/>
                <label className="reg-txt">Your Email</label>
                <input type="text" placeholder="jane@email.com" id="contact-email" className="form-control reg-txt mb-2 mr-sm-2 contact-form" />
                <label className="reg-txt">Comment</label>
                <input type="text" placeholder="Write your comment here..." id="contact-comment" className="form-control reg-txt mb-2 mr-sm-2 contact-form" />
                <button type="submit" className="btn btn-primary curs-txt mb-2 sign-up-form" id="contact-btn">Send</button>
            </form>
        </div>
        </Container>
        

    )
}

export default Contact;