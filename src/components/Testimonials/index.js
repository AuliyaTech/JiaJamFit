import React from 'react';
import API from "../../utils/API"
import "./style.css";

function Testimonials() {
    
    const Testimonials = API.getTestimonials[0].content;
    console.log(Testimonials)




    return(
        <div className="testimonials heading">
            <h1>Testimonials</h1>{
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
                            <h4> {key.author} says...</h4>
                            {displayContent}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Testimonials;