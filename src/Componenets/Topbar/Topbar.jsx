import React from 'react'
import "./Topbar.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
 

export default function Topbar({ menuOpen, setmenuOpen }) {
    return (
        <div className={"Topbar " + (menuOpen && "active")}>
            <div className="Wrapper">
                <div className="left">
                <nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <a href="#Intro" className="logo">NC</a>
      <ul>
        <li><a class="active" href="#Intro">Home</a></li>
        <li><a href="#Aboutme">About Me</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="links">
                            <a href="https://www.linkedin.com/in/chavadanilesh/" target="_blank" rel="noreferrer noopener">
                            <LinkedInIcon  className="linkedin"/>
                            </a>
                            <a href="https://github.com/Nileshchavada" target="_blank" rel="noreferrer noopener">
                            <GitHubIcon  className="Github"/>  
                            </a>
                          </div>
    </nav>
   </div>
           
            </div>
            
        </div>
    )
}
