import React, {Component} from "react";
import axios from "axios";
import AddComponent from "./AddComponent";

class AddPatient extends Component {s
  constructor() {
    super();
    this.state = {
      nameUse: "",
      prefix: "",
      familyName: "",
      givenName: "",
      sufix: "",
      fullName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    
    axios.post('http://localhost:3000/api/names', this.state)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return(
      <AddComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    )
  }
}

export default AddPatient;