import React from "react";
import {Container, Row, Col} from "../Grid";
import API from "../../utils/API"
import "./style.css";

function Locations () {
    const locations = API.getContacts[0].content

    return(
        <div>
            <p className="reg-txt colored-txt contact-title">Our Locations...</p>
            <Container>
            {
                locations.map(l =>{
                    return(
                        <div>
                            <Row>
                                <Col size="md-1"></Col>
                                <Col size="md-6">
                                    <iframe src={l.map} width="400" height="300" frameborder="0"  allowfullscreen=""></iframe>
                                </Col>
                                <Col size="md-4" >
                                    <div className="address-info">
                                        <p className="curs-txt colored-txt contact-title" key={l._id}>{l.city}</p>
                                        <p className="reg-txt colored-txt address">{l.address}</p>
                                    </div>
                                    
                                </Col>
                                <Col size="md-1"></Col>

                            </Row>
                        </div>
                    )
                })
            }
            </Container>

        </div>
    )
}
// <iframe src={} width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

export default Locations;