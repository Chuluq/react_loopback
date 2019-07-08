import React from "react"
import { Switch, Route } from "react-router-dom"
import AddPatient from "./AddPatient"
import Id from "./Id"
import Name from "./Name"
import Gender from "./Gender"
import Contact from "./Contact"
import Address from "./Address"
import Info from "./Info"

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Info} />
            <Route exact path='/addpatient' component={AddPatient} />
            <Route exact path='/id' component={Id} />
            <Route exact path='/name' component={Name} />
            <Route exact path='/gender' component={Gender} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/address' component={Address} />
        </Switch>
    </main>
)

export default Main