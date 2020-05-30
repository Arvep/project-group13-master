import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
//images
import state from '../img/nrw.png';


const leisure  =(props)=>{
    //console.log(props)
    //props keeps track of our history
    //if we want to redirect the page after 2 secs:
    //setTimeout(() =>{
      //  props.history.push('/about')
    //},2000);
    
    return(
        <section className="ftco-section contact-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h4 className="float-left"><strong>Regulations in NRW</strong></h4>
            
            <div className="img d-flex align-self-stretch align-items-flex-end split-left">
               <img className=" float-left img-fluid"
               width="300" height="400"
               src={state} alt="state" /> 


          <div class="container ">      
          <div> 
          <ul class="nav navbar-collapse nav-fill mr-auto">
            <li class="nav-item2" class = "bar2">
              <a class="nav-link "> 
               <Link to = " "></Link><span>General</span></a>
            </li>
            <li class="nav-item2" class = "bar">
              <a class="nav-link">
               <span>Leisure Time</span> </a>
            </li>
            <li class="nav-item2"class = "bar">
              <a class="nav-link">
              <Link to = ""> <span>School & Kindergardens</span> </Link> </a>
            </li>
            <li class="nav-item2"class = "bar3">
              <a class="nav-link">
              <Link to = ""> <span>Events</span> </Link> </a>
            </li>
          </ul>
          <ul>
            <p> </p>
            <p> NRW is currently reducing the restrictions regarding leisurement: 1. Gyms are allowed to reopen under strict conditions, such as the restriction of athletes and the abandonment of high-intensity endurance training 2. Open-air pools are open again - distance rules and compulsory masks in closed rooms apply 3. Restaurants and cafes have re-opened - the tables may only be occupied at a distance of 1.5 m & guests must register by name for their visit 4. Cinemas and theatres remain closed until further notice </p>
          </ul>
          </div>
          </div>
        
        </div>
        </div>
        </div>
        </div>
      </section>
    )
}

export default withRouter(leisure)