import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
//images
import state from "./../img/nrw.png";


const nrw  =(props)=>{
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
              <a class="nav-link "> <span>General</span></a>
            </li>
            <li class="nav-item2" class = "bar">
              <a class="nav-link">
                <Link to = "/leisure"> <span>Leisure Time</span>  </Link> </a>
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
            <p>  NRW was one of early hotspots in the COVID - 19 pandemic. In the county of Heinsberg the first massive breakout of COVID - 19 appeared. Since than the virus spread through NRW. Currently XXXX people are infected and XXXX people have died of COVID - 19. There are still several safety measures in place to stop the spreading of the virus, which we summerized in the categories above. 
            </p>
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

export default withRouter(nrw)