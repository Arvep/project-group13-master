import React, { Component, useImperativeHandle }  from 'react'
import ReactDOM from 'react-dom';
import styles from '../css/symptoms.css';
//images
import girlSick from "../img/Girlsick.png";
import * as typeformEmbed from '@typeform/embed'


class Symptoms extends Component{

		
		/////////////////////////
	
		helpnumbers(){
		document.querySelector(".theleft3").style.display="block";
		}
	
	/*state={
		answers:[{question:'',answer:''}]
	  }

	addAnswer=(answer) =>{
		let answers=[...this.state.answers,answer]
		this.setState({
		  answers: answers
		})
	  }*/
	
	myquiz(){ 
		const ref=typeformEmbed.makePopup("https://arantxavpaz.typeform.com/to/eiFAmC", {
		  hideFooter: true,
		  hideHeaders: true,
		  opacity: 0,
		  autoClose:2,
		  onSubmit: function (event) {
			console.log('Typeform successfully submitted')
			//console.log(event.response_id);
			
							
						document.querySelector(".q1").style.display="none";
						document.querySelector(".q2").style.display="block";
						var resp={}
						var answersFinal=[];
						var request = require('request');
						var key, resp_items
						var options = {
						'method': 'GET',
						'url': 'https://cors-anywhere.herokuapp.com/https://api.typeform.com/forms/eiFAmC/responses?page_size=1&completed=true',
						'headers': {
							'Authorization': 'Bearer GwSFW8g9c3NcVsxj2YmtLYJ3ZCuRjnTdyks6fLKqLzyV',
							'Cookie': 'device_view=full'
						}
						};
					
					
						request(options, function (error, response) { 
						if (error) throw new Error(error);
						console.log(response.body);
						resp=JSON.parse(response.body);
							
						var str = JSON.stringify(resp);
					
						document.querySelector(".theleft2").style.display="block";
						document.querySelector(".theleft1").style.display="none";
						document.querySelector(".theleft3").style.display="none";
										//Less than 40?
										var n = str.search("Under 40");
										console.log(n);
										if (n>0){
											document.querySelector(".ans1").style.display="block";
										}
										//risk group
										var n = str.search("None");
										console.log(n);
										if (n<0){
											document.querySelector(".ans2").style.display="block";
										}
										//in contact with infected?
										var n = str.search("true");
										console.log(n);
										if (n>0){
											document.querySelector(".ans4").style.display="block";
										}
									
										//when?
										var n = str.search("This week");
										var m = str.search("Last week");
										console.log(n);
										if((n>0) ||(m>0)){
											document.querySelector(".ans6").style.display="block";
										}
										//emergency_?
										var n = str.search("Difficulty breathing");
										console.log(n);
										if (n>0){
											document.querySelector(".ans3").style.display="block";
										}else{
											//which symptoms_?
											var m = str.search("None");
											console.log(m);
											if (n<0){
												document.querySelector(".ans5").style.display="block";
										}
					
										}
										
						});
		  },
		  onReady: function () {
			console.log('Typeform is ready')
			
			document.querySelector(".ans1").style.display="none";
			document.querySelector(".ans2").style.display="none";
			document.querySelector(".ans3").style.display="none";
			document.querySelector(".ans4").style.display="none";
			document.querySelector(".ans5").style.display="none";
			document.querySelector(".ans6").style.display="none";

		  },
		  onClose: function(){
			console.log('Typeform successfully closed');
			
			//this.getjson()
			
			
		  }
		});
		ref.open();
	  
	}


	render(){
		
            return(
				<div>
				<section className="q1 ftco-about img ftco-section" id="q1">
				<div className="container">

							{/* title */}
							<div className="row-md-1 heading-section text-left ftco-animate fadeInUp ftco-animated">
							<div className= "justify-content-center heading-section text-up ftco-animate fadeInUp ftco-animated">
									<span className="subheading-edit">
										You feel sick and fear it's the Corona virus? 
									</span>
								</div>
							</div>
							

					
					<div className="row d-flex no-gutters">

					{/* image */}
					<div className="col-md-6 col-lg-5 d-flex" style={{maxWidth: 408, maxHeight: 438,top:'40px'}}>
							<div className="img-about img d-flex align-items-stretch">
								<div className="overlay"></div>
								<img className="img d-flex align-self-stretch align-items-center" src={girlSick} style={{ Width: 238, Height: 238,left:'65px',top:'100px'}}>
								</img>
							</div>
					</div>
				    {/* survey */}
					<div className="col-md-6 col-lg-7 d-flex align-self-stretch align-items-center" style={{maxWidth: 608, left:'80px',maxHeight: 638,top:'130px'}}>
					<div className="py-md-1 w-100 bg-light px-md-5">
					<div className="py-md-1">
							<div className="align-self-stretch align-items-center row justify-content-start pb-3" style={{width:'600px',height:'450px'}}>
								<div className="align-items-center col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
									
									{/* start */}
									{/*<AddAnswer addAnswer={this.addAnswer}/>
									<script src="https://embed.typeform.com/embed.js" type="text/javascript"></script>
									*/}
										<span className="subheading">Let's do a health check!</span>
										<h2 className="mb-4 align-self-stretch align-items-center">Symptoms survey</h2>
										<p>This survey will give you a hint to see if you need to get a test or to</p>
										<p>contact the health authorities.</p>
										
											<p className="d-flex align-self-stretch align-items-center">
											Note -> This is not a definite evaluation. We should be aware of our </p>
											<p>symptoms and protect ourselves every day.
											</p>
										
									</div>

									<div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated align-items-center" >
									<div className="text align-items-center">
										<button type="button" value="Start the Survey" className="mb-12 btn-custom align-self-stretch align-items-center" onClick={()=>this.myquiz()}>
											Start the Survey!
										</button>
									
									</div>
										{/*<iframe id="typeform-full" onsubmit="myFunction()" 
									style={{width:"100%",height:"100%",border:"0",
									allow:"camera; microphone; autoplay; encrypted-media"}} 
									src="https://arantxavpaz.typeform.com/to/eiFAmC"></iframe>*/}
								
									
								
							
								</div>
							</div>
						</div>
						</div>
						</div>	
					</div>
					{/*end of survey */}
				     
				</div>
				 		  
				</section>
				<section className="q2 ftco-about img ftco-section" id="q2">
					
					<div className="container">
					
					<div className="row d-flex no-gutters">
						<div className="col-md-4 col-lg-6 d-flex">
							<div id="theleft1" className="theleft1 img-about img d-flex align-items-stretch">
								<div className="overlay"></div>
								<img className="theleft1 img d-flex align-self-stretch align-items-center" src={girlSick}/>
							</div>
						</div>

			

			{/*TEXT */}
			
			<div className="col-md-12 col-lg-6 pl-md-5">
				<div className="row justify-content-start pb-3">
			  <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
			  
				<h3 className="mb-4">What does your survey indicate?</h3>
				{/*ANSWERS */}
				<div id="theleft2" className="theleft2 text-about" style={{left:-200}}>
					<div className="ans1" id="ans1">
					<h4>Age factors</h4>
					<p > Even when COVID-19 tends to be mild for your age, you are recommended to take precautions to protect yourself and others.</p>
					</div>
					<div className="ans2" id="ans2">
					<h4 >Risk Group</h4>
					<p >As a person in risk group, we recommend you to keep your treatment going and to have 
					even more precautions when being in contact with other people. </p>
					</div>
					<div className="ans4" id="ans4">
					<h4>In contact with infected</h4>
					<p>We advise you to inform your closest health center by telephone to get the indications in case you need a test.</p>
					</div>
					<div className="ans3" id="ans3">
					<h4>Alert!!!!</h4>
					<p>Please we advise you to contact urgently the health center as you have problem breathing.
					you can contact the emergency medical service. It can be reached nationwide on the telephone number (116-117) . If you have no mobility, you should definitely point this out.</p>
				   </div>
					<div className="ans5" id="ans5">
					<h4 className="ans5">Symptoms</h4>
					<p className="ans5">An infection with the new coronavirus can - as with other respiratory diseases - leads usually to Cough, fever, joint and sore throat. However, the course of the disease can be very different. The spectrum ranges from asymptomatic courses to severe pneumonia with lung failure.
					A doctor's office should only be consulted  after prior appointment  - and of course thatCough and sneeze etiquette as well as a good one Hand hygiene get noticed.
					
					Alternatively, you can contact the emergency medical service. He can be reached nationwide on telephone number 116 117 . If you are not mobile, you should definitely point this out.</p>
					</div>
				   {/* <h4 className="ans6">Period since first symptom</h4>*/}
					<p className="ans6" id="ans6">It is recommended to keep track of the advance of your symptoms.</p>
					
			   
				</div>
				{/*end of answers */}
				<div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated align-items-center" >
					<div className="text align-items-center">
							<button type="button" value="Numbers" className="mb-12 btn-custom align-self-stretch align-items-center" onClick={()=>this.helpnumbers()}>
									<p>Help numbers!</p>
							</button>
							</div>
							</div>
					
			  
			  
			  
			  
			  
			  
			
			  </div>
			</div>
		</div>
	</div>
	</div>


								
				{/*help numbers */}
				<div id ="theleft3" className=" theleft3 container text-about col-md-7 heading-section ftco-animate fadeInUp ftco-animated" >
				<div className="about-info safety-header align-items-center page bg-light mt-4 px-md-0 px-2 u-padding-vertical--normal accordion__content" slot="accordion-panel">
					<div className="py-md-5 w-100 bg-light px-md-5">
						<h3>Baden-Wuerttemberg</h3>
						<strong>Citizens' hotline of the Landesgesundheitsamt BW</strong>
						<p>Mon-Sun from 9 AM to 6 PM</p>
						<p><a href="tel:+497119043955">+497119043955</a></p>
						<p><a href="https://www.gesundheitsamt-bw.de/lga/DE/Startseite/aktuelles/Termine_Hinweise/Seiten/Coronavirus.aspx" target="_blank">Link to website</a></p>
						<h3>Bavaria</h3><strong>Coronavirus hotline – Bavarian Office for Health and Food Safety</strong>
						<p><a href="tel:+49913168085101">+49913168085101</a></p>
						<p><a href="https://www.br.de/radio/bayern1/corona-hotline-100.html" target="_blank">Link to website</a></p>
						<h3>Berlin</h3><strong>Senatskanzlei Berlin (Senate Office)</strong>
						<p>Mo-Sun from 8 AM to 8 PM</p>
						<p><a href="tel:+493090282828">+493090282828</a></p>
						<p><a href="https://www.berlin.de/corona/" target="_blank">Link to website</a></p>
						<h3>Brandenburg</h3><strong>Coronavirus citizens'hotline</strong>
						<p>Mon-Fri from 9 AM to 7 PM</p>
						<p><a href="tel:+493318665050">+493318665050</a></p>
						<p><a href="https://www.brandenburg.de/cms/detail.php/bb1.c.473964.de" target="_blank">Link to website</a></p>
						<h3>Bremen</h3><strong>Coronavirus citizens'hotline</strong>
						<p><a href="tel:+49421115">+49421115</a></p>
						<p><a href="https://www.bremen.de/corona" target="_blank">Link to website</a></p>
						<h3>Hamburg</h3><strong>Coronavirus citizens' hotline</strong>
						<p><a href="tel:+4940428284000">+4940428284000</a></p>
						<p><a href="https://www.hamburg.de/coronavirus/" target="_blank">Link to website</a></p>
						<h3>Hessia</h3><strong>Coronavirus citizens' hotline</strong>
						<p>Mon-Sun from 8 AM to 8 PM</p>
						<p><a href="tel:+498005554666">+498005554666</a></p>
						<p><a href="https://soziales.hessen.de/gesundheit/infektionsschutz/corona-hessen/hinweise-zum-virus" target="_blank">Link to website</a></p>
						<h3>Lower Saxony</h3><strong>Coronavirus hotline of the Lower Saxony federal state government</strong>
						<p>Mon-Fri from 8 AM to 10 PM</p>
						<p><a href="tel:+495111206000">+495111206000</a></p>
						<p><a href="https://www.niedersachsen.de/Coronavirus" target="_blank">Link to website</a></p>
						<h3>Mecklenburg-Western Pomerania</h3><strong>Citizens' hotline for the federal state MV</strong>
						<p>Mon-Thu 9 AM to 12 PM and 1 PM to 3 PM, Fri from 9 AM to 12 PM</p>
						<p><a href="tel:+493855885888">+493855885888</a></p>
						<p><a href="https://www.regierung-mv.de/Landesregierung/wm/Aktuelles--Blickpunkte/Wichtige-Informationen-zum-Corona–Virus" target="_blank">Link to website</a></p>
						<h3>North Rhein-Westphalia</h3><strong>Coronavirus citizens' hotline</strong>
						<p>Mo-Fri from 7 AM to 8 PM and Sat/Sun from 10 AM to 6 PM</p>
						<p><a href="tel:+4921191191001">+4921191191001</a></p>
						<p><a href="https://www.land.nrw/de/pressemitteilung/neue-rufnummer-fuer-das-buergertelefon-zum-corona-virus-0211-9119-1001" target="_blank">Link to website</a></p>
						<h3>Rhineland-Palatinate</h3><strong>Coronavirus citizens' hotline</strong>
						<p>Mo-Fri from 8 AM to 6 PM and Sat/Sun from 10 AM to 3 PM</p>
						<p><a href="tel:+498005758100">+498005758100</a></p>
						<p><a href="https://www.laek-rlp.de/presse/coronarvirus.html" target="_blank">Link to website</a></p>
						<h3>Saarland</h3><strong>Coronavirus citizens' hotline</strong>
						<p>Mo-Fri from 6 AM to 12 AM and Sat/Sun from 8 AM to 6 PM</p>
						<p><a href="tel:+496815014422">+496815014422</a></p>
						<p><a href="https://www.sr.de/sr/home/nachrichten/panorama/corona_virus_saarland_hotline_100.html" target="_blank">Link to website</a></p>
						<h3>Saxony</h3><strong>Citizens' hotline of the Federal Ministry of Social Affairs</strong>
						<p>Mo-Fri from 7 AM to 6 PM</p>
						<p><a href="tel:+4935156455855">+4935156455855</a></p>
						<p><a href="https://www.dnn.de/Region/Mitteldeutschland/Corona-Die-wichtigsten-Telefonnummern-fuer-Sachsen" target="_blank">Link to website</a></p>
						<h3>Saxony-Anhalt</h3><strong>Information hotline from the Landesamt für Verbraucherschutz (federal state office for consumer protection)</strong>
						<p>Mo-Sun from 8 AM to 8 PM</p>
						<p><a href="tel:+493912564222">+493912564222</a></p>
						<p><a href="https://verbraucherschutz.sachsen-anhalt.de/hygiene/infektionsschutz/infektionskrankheiten/coronavirus/" target="_blank">Link to website</a></p>
						<h3>Schleswig-Holstein</h3><strong>Citizens' hotline of Schleswig-Holstein</strong>
						<p><a href="tel:+4943179700001">+4943179700001</a></p>
						<p><a href="https://www.schleswig-holstein.de/DE/Landesregierung/VIII/_startseite/Artikel_2020/I/200227_coronavirus.html" target="_blank">Link to website</a></p>
						<h3>Thuringia</h3><strong>Landesamt für Verbraucherschutz (federal state office for consumer protection)</strong>
						<p>Mo-Fri from 9 AM to 12 PM and from 1:30 PM to 3 PM</p>
						<p><a href="tel:+49361573815099">+49361573815099</a></p>
						<p><a href="https://www.tlz.de/leben/gesundheit-medizin/fragen-und-informationen-alle-coronavirus-hotlines-in-thueringen-im-ueberblick-id228682503.html" target="_blank">Link to website</a></p>
										
						</div>
						</div>
					</div>
				{/*END OF HELP NUMBERS */}



					</section>
			
				</div>)
		

			
		}
    
}

//export default Rainbow(Symptoms)
export default Symptoms