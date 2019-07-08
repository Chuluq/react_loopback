import React, { Component } from "react";

class Gender extends Component {
  constructor() {
    super()
    this.state = {
      gender: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/gnbod")
      .then(res => res.json())
      .then(data => {
        this.setState({ gender: data })
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    const { gender } = this.state;

    return(
      <div>
        <div>
          <label>Gender</label>
          {gender.map((data, id) => (
            <p key={id}>{data.gender}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Gender