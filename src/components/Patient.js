import React, {Component} from "react"

class Patient extends Component {
    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Birth Date</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ir. Roberto Firminho Sujadi</td>
                            <td>Male</td>
                            <td>1990-03-03</td>
                            <td>Jl. Kusumanegara No.91, Umbulharjo, Kota Yogyakarta</td>
                            <td>087741434432</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Patient