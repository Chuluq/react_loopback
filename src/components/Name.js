import React, { Component } from "react";

class Name extends Component {
  constructor() {
    super()
    this.state = {
      name: []
    }
  }

componentDidMount() {
  fetch("http://localhost:3000/api/names")
      .then(response => response.json())
      .then(data => {
          this.setState({ name : data })
          // console.log(data)
      }).catch(error => {
          console.log(error)
      })
}

  render() {
    const { name } = this.state;

    return (
      <div>
        <div>
          <label>Prefix</label>
          {name.map((data, id) => (
            <p key={id}>{data.prefix}</p>
          ))}
        </div>
        <div>
          <label>Full Name</label>
          {name.map((data, id) => (
            <p key={id}>{data.fullName}</p>
          ))}
        </div>
        <div>
          <label>Sufix</label>
          {name.map((data, id) => (
            <p key={id}>{data.sufix}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Name;
