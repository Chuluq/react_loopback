import React, {Component} from "react";
import Id from "./Id";
import Name from "./Name";
import Gender from "./Gender";
import Contact from "./Contact";
import Address from "./Address";

class Info extends Component {
  render() {
    return(
        <div>
            <div>
                <label>Identifier</label>
                <Id />
            </div>
            <div>
                <label>Name</label>
                <Name />
            </div>
            <div>
                <label>Gender</label>
                <Gender />
            </div>
            <div>
                <label>Contact</label>
                <Contact />
            </div>
            <div>
                <label>Address</label>
                <Address />
            </div>
        </div>
    )
  }
}

export default Info;