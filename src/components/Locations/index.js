import React from "react";
import {Container, Row, Col} from "../Grid";
import API from "../../utils/API"
import "./style.css";

function Locations () {
    const locations = API.getContacts[0].content

    return(
        <div className="locations">
            <p className="curs-txt title-location contact-title">Our Locations...</p>
            <Container>
                <div className="map-dump">
                <Row>
                
            {
                locations.map(l =>{
                    return(
                        <div className="map">
                                <Col size="md-6">
                                    <iframe src={l.map} width="300" height="300" frameborder="0"  allowfullscreen=""></iframe>
                                    <div className="address-info">
                                        <p className="curs-txt colored-txt contact-title">{l.title}</p>
                                        <p className="reg-txt colored-txt address">{l.address}</p>
                                        <p className="reg-txt colored-txt address" key={l._id}>{l.city}</p>
                                    </div>
                                </Col>

                        </div>
                    )
                })
}
            </Row>
            </div>
            </Container>

        </div>
    )
}
// <iframe src={} width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

export default Locations;