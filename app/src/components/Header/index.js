import React from 'react';
import {Container, Row, Col} from "../Grid";
import img from "../../utils/images/dancegirl.png";
import "./style.css";

function Header() {
    return(
        <div className="header heading">
            <Row>
                <img class="header-img" src={img}/>
            </Row>
            
            

        </div>

    )
}

export default Header;
