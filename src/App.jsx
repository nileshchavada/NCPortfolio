 
import Topbar from "./Componenets/Topbar/Topbar";
import Intro from "./Componenets/Intro/Intro";
import Aboutme from "./Componenets/Aboutme/Aboutme";
import Portfolio from "./Componenets/Portfolio/Portfolio";
import Contact from "./Componenets/Contact/Contact";
import "./App.scss"
import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { useState } from "react";
//import Menu from "./Componenets/Menu/Menu";





function App() {
   
  return (
    <Router>
      <div className="App">
      <Topbar/> 
      <div className="section">
        <Switch>
          <Route exact path="/Intro"> <Intro/></Route>
          <Route path="/Aboutme"><Aboutme/></Route>
          <Route path="/Portfolio"><Portfolio/></Route>
          <Route path="/Contact"><Contact/></Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
 
}


export default App;
