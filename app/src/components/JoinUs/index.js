import React from "react";
import {Row, Col} from "../Grid"
import "./style.css";

function JoinUs (){
    console.log("join us works")
    return( 
        <div>
            <div className="greyBox">
                <p className="join reg-txt"><span className="curs-txt">Join</span> the JJF crew</p>
                <div className="pink">
                    <label className="find-class-form">
                        <Row>
                            <Col size="md-6"><input type="text" className="form-control reg-txt mb-2 find-class mr-sm-2" placeholder="find a class" /></Col>
                            <Col size="md-2"><button type="submit" className="btn go">GO</button></Col>
                        </Row>
                    </label>
                    
                </div>
            </div>
        </div>
    )
}
export default JoinUs;