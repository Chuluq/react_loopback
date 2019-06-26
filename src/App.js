import React from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom"
import Patient from "./components/Patient"
import ViewPatient from "./components/ViewPatient"
import AddPatient from "./components/AddPatient"
import "./style.css"

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Simple Router</h1>
        <ul>
          <li><NavLink exact to="/">Patient</NavLink></li>
          <li><NavLink to="/viewPatient">View Patient</NavLink></li>
          <li><NavLink to="/addPatient">Add Patient</NavLink></li>
        </ul>
        <div>
          <Route path="/" component={Patient} />
          <Route path="/viewPatient" component={ViewPatient} />
          <Route path="/addPatient" component={AddPatient} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
