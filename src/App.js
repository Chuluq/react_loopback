import React from 'react'
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { Link } from "react-router-dom"

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/patient/add" className="btn-floating btn-large waves-effect waves-light red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  </div>
)

export default App
