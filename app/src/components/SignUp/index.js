import React from "react";
import {Row, Col} from "../Grid";
import img from "../../utils/images/bg_know.png"
import "./style.css";

function SignUp () {
    return(
        <div className="signUp">
            <Row>
                    <Col size="md-4">
                        <img src={img} />
                    </Col>
                    <Col size="md-2">
                        <input type="text" class="form-control reg-txt mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>
                    </Col>
                    <Col size="md-2">
                        <input type="text" class="form-control reg-txt" id="inlineFormInputGroupUsername2" placeholder="Email"/>
                    </Col>
                    <Col size="md-2">
                        <button type="submit" class="btn btn-primary curs-txt mb-2">Sign Up</button>
                    </Col>
                    <Col size="md-2"></Col>
                        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>
                        <div id="mc_embed_signup">
                        <form action="https://jiajamfit.us4.list-manage.com/subscribe/post?u=6a51d0e7d378317c65cda4fcd&amp;id=ba9ebb6631" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            {/* <h2>Subscribe</h2> */}
                        {/* <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> */}
                        <div class="mc-field-group">
                            {/* <label for="mce-FNAME">Name  <span class="asterisk">*</span></label> */}
                            <input type="text" value="" placeholder="Jane Doe" name="FNAME" class="required reg-txt" id="mce-FNAME"/>
                        </div>
                        <div class="mc-field-group">
                            {/* <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label> */}
                            <input type="email" value="" name="EMAIL" placeholder="Email"class="required email reg-txt" id="mce-EMAIL"/>
                        </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" ></div>
                                <div class="response" id="mce-success-response"></div>
                            </div> 
                            {/* <div aria-hidden="true"><input type="text" name="b_6a51d0e7d378317c65cda4fcd_ba9ebb6631" tabindex="-1" value=""/></div> */}
                            <div class="clear"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button signUp-btn curs-txt btn"/></div>
                            </div>
                        </form>
                        </div>
            </Row>
        </div>

    )
}

export default SignUp;