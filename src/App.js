import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Post from './components/SafetyMeasures'

import SafetyMeasures from './components/SafetyMeasures';
import Regulations from './components/Regulations';
import Symptoms from './components/Symptoms';
import nrw from './components/nrw';
import leisure from './components/leisure';
import Team from './components/Team';


class App extends Component{ 
  render(){
      return (
        <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        
         <BrowserRouter>
         <Navbar/>
           <Switch>
               
               <Route exact path='/' component={Home}/>
               <Route path='/home' component={Home}/>
               <Route path='/regulations' component={Regulations}/>
               <Route path='/safetymeasures' component={SafetyMeasures}/>
               <Route path='/symptoms' component={Symptoms}/>
               <Route path='/nrw' component = {nrw}/>
               <Route path= '/leisure' component = {leisure} />
               <Route path='/team' component={Team}/>   
           </Switch>
          </BrowserRouter>

        



      </div>
      );
  }
}

export default App;
