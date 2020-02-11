import React from 'react';
import {Container, Row, Col} from "../Grid";
import img from "../../utils/images/logo.png";
import "./style.css";

function NavBar() {
    return(
        <div className="navbar heading">

            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">

                <div className="container navigation">

                    

                    <Container>
                        <Row className="reg-txt">
                            <Col size="md-3"><a className="nav-link reg-txt" href="#">about</a></Col>
                            <Col size="md-2"><a className="nav-link reg-txt" href="#">testimonials</a></Col>
                            <Col size="md-2"><a className="reg-txt" href="#"><img className="logo" src={img} /></a></Col>
                            <Col size="md-2"><a className="nav-link reg-txt" href="#">contact</a></Col>
                            <Col size="md-3"><a className="nav-link reg-txt" href="#">follow Us</a></Col>
                        </Row>
                    </Container>

                </div>

            </nav>


        </div>

    )
}

export default NavBar;