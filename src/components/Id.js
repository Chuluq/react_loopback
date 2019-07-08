import React, { Component } from "react";

class Id extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/identifiers")
        .then(response => response.json())
        .then(data => {
            this.setState({ id : data })
            // console.log(data)
        }).catch(error => {
            console.log(error)
        })
}

  render() {
    const { id } = this.state;

    return (
      <div>
        <div>
          <label>Identifier Use</label>
          {id.map((data, id) => (
            <p key={id}>{data.idUse}</p>
          ))}
        </div>
        <div>
          <label>Identifier No.</label>
          {id.map((data, id) => (
            <p key={id}>{data.idNumber}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Id;
