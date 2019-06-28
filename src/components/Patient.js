import React, {Component} from "react"
import axios from 'axios'

class Patient extends Component {
    constructor() {
        super()
        this.state = {
            patients: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/patients')
        .then(response => {
            // console.log(response.data)
            this.setState({patients: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    // componentWillMount() {
    //     this.getPatients()
    // }

    // getPatients() {
    //     axios.get('http://localhost:3000/api/patients')
    //         .then(response => {
    //             console.log(response)
    //         })
    // }

    render() {
        const { patients } = this.state
        return(
            <div>
                { patients.name }
            </div>
        )
        // return(
        //     <div>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Gender</th>
        //                     <th>Birth Date</th>
        //                     <th>Address</th>
        //                     <th>Phone</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>Ir. Roberto Firminho Sujadi</td>
        //                     <td>Male</td>
        //                     <td>1990-03-03</td>
        //                     <td>Jl. Kusumanegara No.91, Umbulharjo, Kota Yogyakarta</td>
        //                     <td>087741434432</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // )
    }
}

export default Patient