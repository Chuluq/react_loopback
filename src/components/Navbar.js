import React, {Component} from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="blue dark">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Patient</a>
                    <a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
                    <ul id="nav-mobile" className="right hide-on-small-only">
                        <li><Link to="/"><i className="fa fa-users"></i>Patient</Link></li>
                    </ul>
                    </div>
                    <ul className="side-nav" id="main-menu">
                        <li><Link to="/"><i className="fa fa-users"></i>Patient</Link></li>
                        <li><Link to="/patient/add"><i className="fa fa-plus"></i>Add Patient</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar