import React from "react"
import { Switch, Route } from "react-router-dom"
import Patient from "./Patient"
import AddPatient from "./AddPatient"

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Patient} />
            <Route exact path='/addpatient' component={AddPatient} />
        </Switch>
    </main>
)

export default Main