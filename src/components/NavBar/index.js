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
                            <a class="nav-link reg-txt" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="#">TESTIMONIALS</a>
                        </li>
                        <li class="nav-item mx-auto logo">
                            <img className="logo" src={img} />
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="#">LOCATIONS</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link reg-txt" href="#">CONTACT</a>
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