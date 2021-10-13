import React from 'react'
import "./Portfolio.scss"

export default function Portfolio() {
    return (
    <div className="Portfolio" id="Portfolio">
        <div className="left">
             <div className ="skills">
                <div className ="details">
                    <span>HTML/CSS</span>
                    <span>65%</span>
                </div>
                <div className="bar">
                    <div id="html-bar"></div>
                </div>
              </div>  
              <div className ="skills">
                <div className ="details">
                    <span>JavaScript</span>
                    <span>75%</span>
                </div>
                <div className="bar">
                    <div id="js-bar"></div>
                </div>
              </div>
              <div className ="skills">
                <div className ="details">
                    <span>Python</span>
                    <span>70%</span>
                </div>
                <div className="bar">
                    <div id="python-bar"></div>
                </div>
              </div>
              <div className ="skills">
                <div className ="details">
                    <span>SQL</span>
                    <span>60%</span>
                </div>
                <div className="bar">
                    <div id="sql-bar"></div>
                </div>
              </div>
            
        </div>     
            <div className="right"></div>
            
     </div>

    )
}
