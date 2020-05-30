import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import HomeGirl from '../img/HeaderGirl.png'
import styles from '../css/style.css';
import  '../css/animate.css';

//images
import girl from "../img/HeaderGirl.png";
import maskGirl from "../img/mask.png";
import handsGirl from "../img/hands.png";
import sneezeGirl from "../img/sneezing.png";
import socialDistancing from "../img/distancing.png";
import homepageMap from "../img/homepageMap.png";
import homepageSymptoms from "../img/homepage-symptoms.png";
import test from "../img/Test.png";



class Home extends Component{

    render(){

        return(
                <section className="hero-wrap js-fullheight">
                  <div className="container-fluid px-0">
                    <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end header-row">
                      <div className="one-forth d-flex align-items-center ftco-animate js-fullheight fadeInUp ftco-animated">
                        <div className="text mt-5">
                          <span className="covidmaster">COVID-MASTER</span>
                          <h1 style={{color: '#035755'}}>Your personal guide in corona times</h1>
                          <p>Find all desired information regarding health and regulations for staying safe in one place.</p>
                          <p>#staysafe #stayhealthy</p>
                          <Link to="/" id="background-button">Background information on Coronavirus</Link>
                        </div>
                      </div>
                      <img className="one-third js-fullheight align-self-end order-md-last img-fluid header-img" src={girl} alt="Girl staying at home" />
                    </div>
                  </div>
                  <div className="container home-content">
                      {/*MEASURES*/}
                      <div className="container text-about heading-section col-md-9 text mt-5" style={{textAlign: 'center'}}>
                        <span className="covidmaster">COVID-MASTER</span>
                        <h1 style={{color: '#035755',fontWeight:"bold"}}>Precautionary measures for everyone</h1>
                        <p className="col-md-12">By following easily applicable behaviours patterns it´s possible to slow down the worldwide spread of Covid-19. The scientific background of the recommended Behaviour Patterns is linked.</p>
                     </div>
                      

                      {/* wear masks */}
                      <div className="row d-flex no-gutters align-items-center justify-content-center safety-measure">
                        {/* text */}
                        <div className="col-md-6 col-lg-6 pl-md-5 d-flex flex-column align-items-center">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                              <div className="d-flex align-items-center">
                                <div>
                                  <h1 className="mr-3 list-number">01</h1>
                                </div>
                                <h2 className="mb-4" style={{color: '#035755'}}>Wear Masks</h2>
                              </div>
                              <div className="text-about">
                                <p>Covering your mouth and nose with a mask prevents the spread of an undiscovered Covid19 infection through aerosol.</p>
                                <p><Link to={{
                                  pathname: '/safetymeasures',
                                  linkProps: {
                                    name: 'masks'
                                  }
                                }}>Learn more</Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* picture */}
                        <div className="col-md-6 col-lg-6 d-flex justify-content-center">
                          <div className="img-about img d-flex align-items-stretch">
                            {/* <div className="overlay" /> */}
                            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${maskGirl})`, minWidth: 350, minHeight: 350}}>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* wash your hands */}
                      <div className="row d-flex no-gutters align-items-center justify-content-center safety-measure">
                        {/* picture */}
                        <div className="col-md-6 col-lg-6 d-flex justify-content-center">
                          <div className="img-about img d-flex align-items-stretch">
                            {/* <div className="overlay" /> */}
                            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${handsGirl})`, minWidth: 350, minHeight: 350}}>
                            </div>
                          </div>
                        </div>
                        {/* text */}
                        <div className="col-md-6 col-lg-6 pl-md-5 d-flex flex-column align-items-center">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                              <div className="d-flex align-items-middle">
                                  <div>
                                    <h1 className="mr-3 list-number">02</h1>
                                  </div>
                                  <h2 className="mb-4" style={{color: '#035755'}}>Wash Your Hands</h2>
                              </div>
                              <div className="text-about">
                                <p>Washing frequently and intensively your hands prevents spreading the virus through smear infection (Touching infected objects).</p>
                                <p><Link to={{
                                  pathname: '/safetymeasures',
                                  linkProps: {
                                    name: 'hands'
                                  }
                                }}>Learn more</Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* sneeze in your elbow */}
                      <div className="row d-flex no-gutters align-items-center justify-content-center safety-measure">
                        {/* text */}
                        <div className="col-md-6 col-lg-6 pl-md-5 d-flex flex-column align-items-center">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                              <div className="d-flex align-items-middle">
                                  <div>
                                    <h1 className="mr-3 list-number">03</h1>
                                  </div>
                                  <h2 className="mb-4" style={{color: '#035755'}}>Sneeze in your elbow</h2>
                              </div>
                              <div className="text-about">
                                <p>Measures to avoid the spread to viruses is an important part of prevention - Therefore don't sneeze into your hands with which you touch other things!</p>
                                <p><Link to={{
                                  pathname: '/safetymeasures',
                                  linkProps: {
                                    name: 'sneeze'
                                  }
                                }}>Learn more</Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* picture */}
                        <div className="col-md-6 col-lg-6 d-flex justify-content-center">
                          <div className="img-about img d-flex align-items-stretch">
                            {/* <div className="overlay" /> */}
                            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${sneezeGirl})`, minWidth: 350, minHeight: 350}}>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* social distancing */}
                      <div className="row d-flex no-gutters align-items-center justify-content-center safety-measure">
                        <div className="col-md-6 col-lg-6 d-flex justify-content-center">
                          <div className="img-about img d-flex align-items-stretch">
                            {/* <div className="overlay" /> */}
                            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${socialDistancing})`, minWidth: 350, minHeight: 350}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 pl-md-5 d-flex flex-column align-items-center">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                              <div className="d-flex align-items-middle">
                                  <div>
                                    <h1 className="mr-3 list-number">04</h1>
                                  </div>
                                <h2 className="mb-4" style={{color: '#035755'}}>Social Distancing</h2>
                              </div>
                              <div className="text-about">
                                <p>Avoiding the contact to other people reduces the chances for the spreading the virus.</p>
                                <p><Link to={{
                                  pathname: '/safetymeasures',
                                  linkProps: {
                                    name: 'distancing'
                                  }
                                }}>Learn more</Link></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* next section */}
                      <div className="container text-about col-md-7 heading-section text mt-5" style={{textAlign: 'center'}}>
                        <span className="covidmaster">COVID-MASTER</span>
                        <h1 style={{color: '#035755',fontWeight:"bold"}}>Complete and simple overview of  Local Corona regulations</h1>
                        <p>Press on your federal state to access the applicable local regulations.</p>
                      </div>
                      {/* map of Germany */}
                      <img src={homepageMap} className="homepage-map"/>

                      {/* symptoms */}
                      <div className="container text-about col-md-7 heading-section text mt-5" style={{textAlign: 'center'}}>
                        <span className="covidmaster">COVID-MASTER</span>
                        <h1 style={{color: '#035755',fontWeight:"bold"}}>Symptoms</h1>
                        <p className="col-md-15">Do you feel sick? Here is an overview of the typical symptoms of the COVID-19. Additionally, we created an easy questionnaire, with which you can self-test your 
                        possibility of being infected.</p>
                      </div>
                      {/* test */}
                      <div id="test">
                        <img src={test}/>
                        <div id="row">
                        <h2 style={{marginLeft: '2rem', fontWeight: '700'}} style={{color: '#035755'}}>Do you need to get tested for COVID-19?</h2>
                        <h2 class="nav-link active" style={{marginLeft: '2rem', fontWeight: '700',color: '#035755'}}><Link to="/symptoms" style={{textDecoration: 'underline'}}>Do the online questionaire!</Link></h2>
                        </div>
                      </div>
                      <img src={homepageSymptoms} id="homepage-symptoms-img" style={{maxWidth:1167.68,maxHeight:871.58}}/>
                    </div>
                  </section>
        )
    }    
}

export default Home