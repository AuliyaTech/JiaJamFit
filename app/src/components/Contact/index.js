import React from 'react';
import API from "../../utils/API";
import "./style.css";

function Contact() {
    const Contacts = API.getContacts[0].content
    console.log(Contacts)
    return(
        <div className="contact heading">
            <h1>Contact</h1>
            <h5>Address: </h5>
            <p>{Contacts.address}</p>
            <p>{Contacts.location}</p> 
            <br />
            <h5>Phone Number: {Contacts.phone_number} </h5>       
            <h5>Email: {Contacts.email}</h5>
        </div>

    )
}

export default Contact;