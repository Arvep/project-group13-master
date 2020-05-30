import React, { Component } from "react"
import axios from 'axios'
import styles from '../css/style.css';
import { Tabs, Tab } from 'react-bootstrap'

//images 

import maskGirl from "../img/mask.png";
import handsGirl from "../img/hands.png";
import sneezeGirl from "../img/sneezing.png";
import socialDistancing from "../img/distancing.png";

class SafetyMeasures extends Component{
    // switch statement logic

    renderSwitch(param) {
      switch(param) {

        // MASKS
        case 'masks':
          return (
            <div className="safety-measures-content">
              <div className="image-title">
                <h1 style={{color: '#035755', fontWeight: 'bolder', textAlign: 'center'}}>Wear Masks!</h1>
                <img src={maskGirl}/>
              </div>
              <div className="safety-tabs">
              <Tabs defaultActiveKey="why" id="uncontrolled-tab-example">
                <Tab eventKey="why" title="Why is it important?">
                  <p>The infection occurs mainly via droplet infection. Up to 3,000 droplets can be produced by a single cough. Some even fear that the virus may be transmitted simply through speaking. A recent study by Afinrud, Bax, Stadnytskyi, and Bax (2020) indicated that thousands of droplets invisible to the naked eye are spread into the air when uttering “stay healthy”. Once spread into the air the virus could survive for at least three hours in aerosol droplets (van Doremalen et al., 2020). Facemasks are essential as they reduce the amount of virus that is released into the air. Especially, as there are asymptomatic carriers who don’t even know they are spreading the virus (Bai et al.). The risk of infection might therefore be reduced by wearing masks. 

                  <p>Sources:</p> 
                  <p>Anfinrud, P., Bax, C.E., Stadnytskyi, V., & Bax, A. (2020). Could SARS-CoV-2 be transmitted via speech droplets?</p>
                  <p>Bai, Y. et al. Presumed Asymptomatic Carrier Transmission of COVID-19. JAMA, 323(14), 1406–1407.</p>
                  <p>van Doremalen, N., Bushmaker, T., Morris, D. H., Holbrook, M. G., Gamble, A., Williamson, B. N., ... & Lloyd-Smith, J. O. (2020). Aerosol and surface stability of SARS-CoV-2 as compared with SARS-CoV-1. New England Journal of Medicine, 382(16), 1564-1567.</p>
                  </p>
                </Tab>
                <Tab eventKey="what" title="What do I have to consider?">
                  <p>You can wear a medical mask or a selfmade mask. No matter the sort of mask you are wearing there are some important aspects to consider. You should only touch the mask from the outside (and of course only with washed hands). Once you took your mask down you should not use it again but use a new mask. You should clean and disinfect your mask by either putting it into the washing machine and washing it at 60 °C. Alternatively, you can bring it to boil in a pot for about 5 minutes. The stove is another option. Though, 90 minutes at 90 °C would be needed to kill the virus. Please don’t put your mask into the microwave. The microwave might catch fire. 
                  Look here for more information: https://www.infektionsschutz.de/fileadmin/infektionsschutz.de/Downloads/Merkblatt-Mund-Nasen-Bedeckung.pdf</p>
                </Tab>
                <Tab eventKey="which" title="Which regulations are there?">
                  <p>Masks have to be worn whenever the minimal distance of 1.5 m cannot be maintained. Hence, masks must be worn in public transportation and in shops. The regulation also applies to bus stops and train stations as well as weekly markets. There are some differences between the federal states concerning fines when not wearing masks. Those differences can be looked at in the Local Regulations Section. </p>
                </Tab>
              </Tabs>
              </div>
            </div>
          );
        
        //HANDS
        case 'hands':
          return (
            <div className="safety-measures-content">
            <div className="image-title">
              <h1 style={{color: '#035755', fontWeight: 'bolder', textAlign: 'center'}}>Wash your hands!</h1>
              <img src={handsGirl}/>
            </div>
            <div className="safety-tabs">
            <Tabs defaultActiveKey="why" id="uncontrolled-tab-example">
              <Tab eventKey="why" title="Why is it important?">
                <p>Respiratory viruses like coronavirus disease (COVID-19) spread when mucus or droplets containing the virus get into your body through your eyes, nose or throat. Most often, this happens through your hands. Hands are also one of the most common ways that the virus spreads from one person to the next.

                <p>During a global pandemic, one of the cheapest, easiest, and most important ways to prevent the spread of a virus is to wash your hands frequently with soap and water.</p> 
                <p>Source:</p>
                <p>https://www.unicef.org/coronavirus/everything-you-need-know-about-washing-your-hands-protect-against-coronavirus-covid-19</p>
                </p>
              </Tab>
              <Tab eventKey="what" title="What do I have to consider?">
                <p>To eliminate all traces of the virus on your hands, a quick scrub and a rinse won’t cut it. Below is a step-by-step process for effective handwashing.
                  Step 1: Wet hands with running water
                  Step 2: Apply enough soap to cover wet hands
                  Step 3: Scrub all surfaces of the hands – including back of hands, between fingers and under nails – for at least 20 seconds.
                  Step 4: Rinse thoroughly with running water
                  Step 5: Dry hands with a clean cloth or single-use towel
                  You should wash your hands for at least 20-30 seconds. An easy way to time it is by singing the full happy birthday song, twice.
                  Source: https://www.unicef.org/coronavirus/everything-you-need-know-about-washing-your-hands-protect-against-coronavirus-covid-19</p>
              </Tab>
              <Tab eventKey="which" title="Which regulations are there?">
                <p>There are no particular regulations for this behaviour, but it´s rather the correct code of conduct in times of a spreading virus.</p>
              </Tab>
            </Tabs>
            </div>
          </div>
          );

        //SNEEZING
        case 'sneeze':
          return (
            <div className="safety-measures-content">
            <div className="image-title">
              <h1 style={{color: '#035755', fontWeight: 'bolder', textAlign: 'center'}}>Sneeze and cough in your elbow!</h1>
              <img src={sneezeGirl}/>
            </div>
            <div className="safety-tabs">
            <Tabs defaultActiveKey="why" id="uncontrolled-tab-example">
              <Tab eventKey="why" title="Why is it important?">
                <p>The corona virus is easily spreading through the physical touch of contaminated materials and body parts. Therefore it is advised to not contaminate the hands, which touch other things. Optimally, you should sneeze into a tissue but as sometimes the sneeze is really sudden, the elbow is the next best thing. Further, the virus can be found in contaminated aerosol. Try not to contaminate your surrounding air - you can never know whether you’re a silent spreader.</p>
              </Tab>
              <Tab eventKey="what" title="What do I have to consider?">
                <p>Coughing or sneezing into your elbow catches the droplets and stops them getting onto your hands.</p>
              </Tab>
              <Tab eventKey="which" title="Which regulations are there?">
                <p>There are no particular regulations for this behaviour, but it´s rather the correct code of conduct in times of a spreading virus.</p>
              </Tab>
            </Tabs>
            </div>
          </div>
          );
        
        //DISTANCING
        case 'distancing':
          return (
            <div className="safety-measures-content">
            <div className="image-title">
              <h1 style={{color: '#035755', fontWeight: 'bolder', textAlign: 'center'}}>Keep some distance!</h1>
              <img src={socialDistancing}/>
            </div>
            <div className="safety-tabs">
            <Tabs defaultActiveKey="why" id="uncontrolled-tab-example">
              <Tab eventKey="why" title="Why is it important?">
                <p>The reproduction number R describes how many people an infected person infects on average. The absolute number of new infections must be small enough to allow effective contact tracing and not to overload the capacities of intensive care beds. In the case of SARS-CoV-2, R0 is between 2.4 and 3.3, which means that each infected person infects on average slightly more than two to slightly more than three people. Without countermeasures, the number of infections would rapidly increase exponentially and only stop when up to 70% of the population have been infected or become ill, i.e. are immune and can no longer spread the virus. R should be lower than 1 so that the number of daily new infections decreases. In order to keep a reproduction number of less than 1 the contact to other people must be restricted. 
                  <p>Source:</p> 
                  <p>https://www.rki.de/SharedDocs/FAQ/NCOV2019/gesamt.html</p>
                </p>
              </Tab>
              <Tab eventKey="what" title="What do I have to consider?">
                <p>YTry to keep a distance of at least 1.5 m to other people, this applies to waiting in the supermarket queue or walking on the street. Avoid meeting too many different people, even if they are your friends. It’s hard - we know. But the stronger you stick to those regulations the larger will be the decrease in the reproduction number R. There are other ways of having social contact. You could use video conference tools to meet your friends. Maybe you have some creative ideas of spending time with friends online?</p>
              </Tab>
              <Tab eventKey="which" title="Which regulations are there?">
                <p>Generally, people in Germany must keep a distance of 1.5 m in public places. There are contact restrictions that vary depending on the federal state you find yourself in. Overall, you are allowed to meet one other person in public. People living in the same household, family or partners are allowed to meet with more than two people. Some states allow members of two households to meet in public. For those state specific regulations you should have a look at the Local Regulations section.</p>
              </Tab>
            </Tabs>
            </div>
          </div>
          );
        default:
          return (
            <h1 style={{color: '#035755', fontWeight: 'bolder', textAlign: 'center'}}>What you can do</h1>
          );
      }
    }

    //render function
    render(){
        const page = this.props.location.linkProps;        
        return(
          <section className="ftco-about img ftco-section" id="about-section">
          <div className="container">
            { page ? (
              this.renderSwitch(page.name)
            ) : (
              this.renderSwitch('nopage')
            )}
          </div>
        </section>
          )
    }
}
export default SafetyMeasures