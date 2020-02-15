import React from 'react';
import {Link} from "react-router-dom";
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
                                <Link to="https://auliyatech.github.io/JiaMailChimp/" class="nav-link reg-txt">REGISTER</Link>
                        </li>
                        <li class="nav-item mx-auto">
                            <Link class="nav-link reg-txt" to="/testimonials">TESTIMONIALS</Link>
                        </li>
                        <li class="nav-item mx-auto logo">
                           <Link to="/"><img className="logo" src={img} /></Link>
                        </li>
                        <li class="nav-item mx-auto">
                            <Link class="nav-link reg-txt" to="/location">LOCATIONS</Link>
                        </li>
                        <li class="nav-item mx-auto">
                            <Link class="nav-link reg-txt" to="/contact">CONTACT</Link>
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
