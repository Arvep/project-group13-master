import React from 'react'
import { Link } from 'react-router-dom'


const sneeze =(props)=>{

    
    return(
        <section>
        {/* sneeze in your elbow */}
        <div className="row d-flex no-gutters align-items-center">
                        {/* text */}
                        <div className="col-md-6 col-lg-6 pl-md-5 d-flex flex-column align-items-center">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                              <div className="d-flex align-items-middle">
                                  <div>
                                    <h1 className="mr-3">03</h1>
                                  </div>
                                  <h2 className="mb-4">Sneeze in your elbow</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* picture */}
                        <div className="col-md-6 col-lg-6 d-flex">
                          <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay" />
                            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${sneezeGirl})`, minWidth: 350, minHeight: 350}}>
                            </div>
                          </div>
                        </div>
                      </div>
      </section>
    )
}





export default withRouter(sneeze)