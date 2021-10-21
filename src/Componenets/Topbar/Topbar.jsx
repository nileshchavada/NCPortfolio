import React from 'react'
import { Link } from 'react-router-dom'
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
      <a href="/" className="logo">NC</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><Link to="/Aboutme">About Me</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
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
