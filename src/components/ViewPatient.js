import React, {Component} from "react"

class ViewPatient extends Component {
    render() {
        return(
            <div>
                <h2>Patient Name Details</h2>
                <div>
                    <label>Identifier Use</label>
                    <p>NIK</p>
                </div>
                <div>
                    <label>Identifier Number</label>
                    <p>3403031732121</p>
                </div>
            </div>
        )
    }
}

export default ViewPatient