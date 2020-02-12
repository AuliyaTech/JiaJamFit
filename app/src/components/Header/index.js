import React from 'react';
import {Container, Row, Col} from "../Grid";
import img from "../../utils/images/dancegirl.png";
import "./style.css";

function Header() {
    return(
        <div className="header heading">
            <Row>
                <div className="header-img-container">
                    <img class="header-img" src={img}/>
                </div>
            </Row>
            
            

        </div>

    )
}

export default Header;
