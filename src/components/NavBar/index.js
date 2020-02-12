import React from 'react';
import {Container, Row, Col} from "../Grid";
import img from "../../utils/images/logo.png";
import "./style.css";

function NavBar() {
    return(
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-light">
            <Container>
                <Row>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">


                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item mx-auto">
                                <Link to="/register">REGISTER</Link>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="/testimonials">TESTIMONIALS</a>
                        </li>
                        <li class="nav-item mx-auto logo">
                           <a href="/"><img className="logo" src={img} /></a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="/location">LOCATIONS</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                </Row>
            </Container>
            </nav>
            
        </div>

    )
}

export default NavBar;
