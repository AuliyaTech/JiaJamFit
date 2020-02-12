import React from "react"
import {Container, Row, Col} from "../Grid"
import API from "../../utils/API"
import "./style.css"
import Contact from "../Contact";

function TestimonialsOnHP () {
    const testimonials = API.getTestimonials[0].content;
    const num_of_test = testimonials.length
    const latest_1 = num_of_test -1;
    const latest_2 = num_of_test-2;
    const latest_3 = num_of_test-3
    return(<div>
        <Container>
            <Row><p className="reg-txt colored-txt test-title">From Our <span className="curs-txt">SQUAD</span></p></Row>
            <Row>
                <Col size="md-4"><iframe width="80%" height="80%" src={testimonials[latest_1].testimonial} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col size="md-4"><iframe width="80%" height="80%" src={testimonials[latest_2].testimonial} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                <Col size="md-4"><iframe width="80%" height="80%" src={testimonials[latest_3].testimonial} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
            </Row>
        </Container>
     
    </div>)
}
export default TestimonialsOnHP;