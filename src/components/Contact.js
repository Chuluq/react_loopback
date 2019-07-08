import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      contact: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/contacts")
      .then(res => res.json())
      .then(data => {
        this.setState({ contact: data })
        // console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    const { contact } = this.state;

    return(
      <div>
        <div>
          <label>Phone No.</label>
          {contact.map((data, id) => (
            <p key={id}>{data.phoneNo}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Contact