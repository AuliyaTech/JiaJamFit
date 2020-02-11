import React from "react";
import {Container} from "../Grid";
import "./style.css"

function Card(props){
    return (
        <div className="card">
            <Container>
            {props.children}
            </Container>
        </div>
    )
}

export default Card;