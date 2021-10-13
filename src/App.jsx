import Topbar from "./Componenets/Topbar/Topbar";
import Intro from "./Componenets/Intro/Intro";
import Aboutme from "./Componenets/Aboutme/Aboutme";
import Portfolio from "./Componenets/Portfolio/Portfolio";
import Contact from "./Componenets/Contact/Contact";
import "./App.scss"
//import { useState } from "react";
//import Menu from "./Componenets/Menu/Menu";





function App() {
   
  return (
    <div className="App">
     <Topbar/> 
     
     <div className="section">
       <Intro/>
       <Aboutme/>
       <Portfolio/>
        <Contact/>
     </div>
    </div>
  );
 
}


export default App;
