import React, {Component} from "react"

class AddPatient extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <h2>Add New Patient</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Name: 
                        <input 
                            type="text" 
                            name="name"
                            value={this.state.value}
                            onChange={this.handleChange} 
                        />
                        <br /><br />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPatient