import React, { Component } from "react";

class Address extends Component {
  constructor() {
    super()
    this.state = {
      address: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/addresses")
      .then(res => res.json())
      .then(data => {
        this.setState({ address: data })
        // console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    const { address } = this.state;

    return(
      <div>
        <div>
          <label>Full Address</label>
          {address.map((data, id) => (
            <p key={id}>{data.fullAddress}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Address