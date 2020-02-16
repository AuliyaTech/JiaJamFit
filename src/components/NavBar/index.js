import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "../Grid";
import img from "../../utils/images/logo.png";
import "./style.css";

function NavBar() {
    return(
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-light">
                <Link to="/"><img className="logo" src={img} /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div id="navbarNavDropdown" class="navbar-collapse collapse"></div>
                <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown-item mx-auto">
                                <a href="https://auliyatech.github.io/JiaMailChimp/" class="nav-link reg-txt">REGISTER</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <Link class="nav-link dropdown-item reg-txt" to="/testimonials">TESTIMONIALS</Link>
                        </li>
                        <li class="nav-item dropdown-item mx-auto">
                            <Link class="nav-link reg-txt" to="/location">LOCATIONS</Link>
                        </li>
                        <li class="nav-item dropdown-item mx-auto">
                            <Link class="nav-link reg-txt" to="/contact">CONTACT</Link>
                        </li>
                </ul>

                
            

             {/* <ul class="navbar-nav dropdown-menu mx-auto">
                        <li class="nav-item dropdown-item mx-auto">
                                <a href="https://auliyatech.github.io/JiaMailChimp/" class="nav-link reg-txt">REGISTER</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <Link class="nav-link dropdown-item reg-txt" to="/testimonials">TESTIMONIALS</Link>
                        </li>
                        <li class="nav-item dropdown-item mx-auto">
                            <Link class="nav-link reg-txt" to="/location">LOCATIONS</Link>
                        </li>
                        <li class="nav-item dropdown-item mx-auto">
                            <Link class="nav-link reg-txt" to="/contact">CONTACT</Link>
                        </li>
                </ul> */}
            
          
            </nav>
            
        </div>

    )
}

export default NavBar;

// class Nav extends Component {
//     constructor(props) {
//       super(props);
//       this.toggleNavbar = this.toggleNavbar.bind(this);
//       this.state = {
//         collapsed: true,
//       };
//     }
//     toggleNavbar() {
//       this.setState({
//         collapsed: !this.state.collapsed,
//       });
//     }
//     render() {
//       const collapsed = this.state.collapsed;
//       const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
//       const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
//       return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
//       <div className="container">
//         <a className="navbar-brand" href="#">Rate My Neighborhood</a>
//         <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className={`${classOne}`} id="navbarResponsive">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//             </ul>
//           </div>
//       </div>
//     </nav>
//       );
//     }
//   }
  
//   export default Nav;
  



