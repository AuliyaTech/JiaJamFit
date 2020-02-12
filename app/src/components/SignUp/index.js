import React from "react";
import {Row, Col} from "../Grid";
import img from "../../utils/images/bg_know.png"
import "./style.css";

function SignUp () {
    return(
        <div className="signUp">
            <Row>
                <Col size="md-2"></Col>
                    <Col size="md-4">
                        <img className="first-to-know" src={img} />
                    </Col>
                    <Col size="md-4">
                        <input type="text" class="form-control reg-txt mb-2 mr-sm-2 sign-up-form" id="inlineFormInputName2" placeholder="Jane Doe"/>
                        <input type="text" class="form-control reg-txt sign-up-form" id="inlineFormInputGroupUsername2" placeholder="Email"/>
                        <button type="submit" class="btn btn-primary curs-txt mb-2 sign-up-form">Sign Up</button>
                    </Col>
                    <Col size="md-2"></Col>
            </Row>
        </div>

    )
}

export default SignUp;