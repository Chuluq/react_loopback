import React, {Component} from "react"
// import axios from 'axios'

class Patient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allPatients: []
        }
    }

    // componentDidMount() {
    //     this.setState({loading: true})
    //     axios.get('http://localhost:3000/api/patients')
    //     .then(response => {
    //         console.log('Worked', response.data)
    //         this.setState({
    //             loading: false,
    //             patients: response.data
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }    

    componentDidMount() {
        fetch("http://localhost:3000/api/patients")
            .then(response => response.json())
            .then(data => {
                this.setState({ allPatients : data })
            }) 
    }

    render() {
        const { allPatients } = this.state; 

        return(
            <div>
                {allPatients.map((patient) => (
                    <p>{patient.name}</p>
                ))}
            </div>
        )
    }
}

export default Patient