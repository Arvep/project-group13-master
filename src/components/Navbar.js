import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from "../img/Logo.png";

const Navbar=(props)=>{
    // console.log(props)
    //  setTimeout(() =>{
    //      props.history.push('/about')
    //  },2000)

    return(
             
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/home"><span>COVID MASTER</span><span><image src={logo} /></span></a>
          <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
          
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><NavLink to="/home" className="nav-link"><span>Overview</span></NavLink></li>
              <li className="nav-item"><NavLink to="/safetymeasures" className="nav-link"><span>Safety Measures</span></NavLink></li>
              <li className="nav-item"><NavLink to="/regulations" className="nav-link"><span>Local Regulations</span></NavLink></li>
              <li className="nav-item"><NavLink to="/symptoms" className="nav-link"><span>Symptoms</span></NavLink></li>
              <li className="nav-item"><NavLink to="/team" className="nav-link"><span>Our team</span></NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default withRouter(Navbar)