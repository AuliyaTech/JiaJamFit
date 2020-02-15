

// import React, {Component} from "react";
// import {Row, Col} from "../Grid";
// import MailChimp from "../../utils/MailChimpAPI"
// import MailchimpSubscribe from "react-mailchimp-subscribe"
// import MyForm from "./MyForm"
// import "./style.css";

// const url = "https://jiajamfit.us4.list-manage.com/subscribe/post?u=6a51d0e7d378317c65cda4fcd&amp;id=ba9ebb6631";
// const SimpleForm = () => <MailchimpSubscribe url={url} />

// const CustomForm = () => (
//     <MailchimpSubscribe
//       url={url}
//       render={({ subscribe, status, message }) => (
//         <div>
//           <MyForm onSubmitted={formData => subscribe(formData)} />
//           {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//           {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//           {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//         </div>
//       )}
//     />
//   )


// class SignUp extends Component {
//     state = {name: "",
//             email: ""};

    

//     handleChange = event =>{
//         event.persist();
//         if (event.target.name ==="name"){
//             this.setState({name: event.target.value})
//         }
//         else{
//             this.setState({email: event.target.value} )
//         }
        
//     }
    
//     handleMailChimp_SignUp = event =>{
//         console.log(process.env.REACT_APP_MAILCHIMP_API_KEY)
//         const response = fetch(MailChimp.url,{
//             method: "POST",
//             mode: "no-cors",
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 "content-type":"application/json",
//                 "Authorization": process.env.REACT_APP_MAILCHIMP_API_KEY
//             },
//             body: JSON.stringify({
//                 email_address: this.state.email,
//                 status: "subscribed",
//                 merge_fields: {
//                     FNAME: this.state.name
//                 }
//             }),
//             // auth:{
//             //     "user": "anystring",
//             //     "pass": process.env.REACT_APP_MAILCHIMP_API_KEY
//             // }
//             }).then(res => console.log(res))
//             }
        
    

//     render() {
//     return(
//         <div className="signUp">
//             <Row>
//                 <Col size="md-2"></Col>
//                     <Col size="md-4">
//                         <img className="first-to-know" src={img} />
//                     </Col>
//                     <Col size="md-6">
//                         <input type="text" name="name" class="form-control reg-txt mb-2 mr-sm-2 sign-up-form" id="inlineFormInputName2" onChange={this.handleChange} placeholder="First Name"/>
//                         <Row>
//                             <Col size="md-4">
//                                 <input type="text" name="email" class="form-control reg-txt sign-up-form" id="inlineFormInputGroupUsername2" onChange={this.handleChange} placeholder="Email"/>
//                             </Col>
//                             <Col size="md-1">
//                                 <button type="submit" class="btn btn-primary curs-txt sign-up-form" id="sign-up-btn" onClick={this.handleMailChimp_SignUp}>Sign Up</button>
//                             </Col>
//                         </Row>
//                     </Col>
//             </Row>
//         </div>

//     )
//     }
// }

// export default CustomForm;