import React, {Component} from "react"

class Patient extends Component {
    constructor() {
        super()
        this.state = {
            allPatients: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/patients")
            .then(response => response.json())
            .then(data => {
                this.setState({ allPatients : data })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const { allPatients } = this.state; 

        return(
            <div>
                {allPatients.map((patient, id) => (
                    <p key={id}>{patient.name}</p>
                ))}
            </div>
        )
    }
}

export default Patient