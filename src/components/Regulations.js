import React from 'react'
import axios from 'axios'
//images
import map from "../img/map.png";


const Regulations=(props)=>{
    //console.log(props)
    //props keeps track of our history
    //if we want to redirect the page after 2 secs:
    //setTimeout(() =>{
      //  props.history.push('/about')
    //},2000);
    
    return(
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-9 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h2 className="mb-4">Complete and simple overview of local Corona regulations</h2>
              <p>Press on your federal state to access the applicable local regulations</p>
            
            <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end">
               <img className="one-third js-fullheight align-self-end order-md-last img-fluid" 
               src={map} alt="map" useMap="#germany" />
               <map name="germany">
                <area coords="137,298,140,314,143,331,140,341,129,358,135,370,142,379,148,394,169,403,176,393,195,386,215,366,229,379,247,363,258,346,261,331,283,317,286,295,274,276,277,250,248,253,241,275,225,283,219,259,210,255,182,271,166,281,165,292,148,297"
                shape="poly" alt="map" href="nrw"/>
              </map>
           </div>
        </div>
        </div>
        </div>
      </section>
    )
}

export default Regulations