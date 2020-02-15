import React from 'react';
import {Container, Row, Col} from "../Grid";
import API from "../../utils/API"
import "./style.css";

function Testimonials() {
    
    const Testimonials = API.getTestimonials[0].content;
    console.log(Testimonials)




    return(
        <div>
             <p className="curs-txt title-location contact-title">From our Squad...</p>

            <Container>
                <div className="testimonials heading">{
                Testimonials.map( key =>{
                    let displayContent;
                    if(key.testimonial_type ==="text"){
                        displayContent = <p>{key.testimonial}</p>
                    }
                    else {
                        displayContent = <iframe width="560" height="315" src={key.testimonial} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }
                    return (
                        <div>
                            <p className="reg-txt colored-txt squad"> {key.author} says...</p>
                            {displayContent}
                            <br />
                        </div>
                    )
                })
        
            }</div>
            </Container>
        </div>

    )
}

export default Testimonials;
