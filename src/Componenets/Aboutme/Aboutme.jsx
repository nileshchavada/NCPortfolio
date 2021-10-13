import React from 'react'
import "./Aboutme.scss"
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

export default function Aboutme() {
    return (
        <div className="Aboutme" id="Aboutme">
                
            <div className="left">
              <div className="imagecontainer">
                     <img src="image/God.jpg" alt="" />
                 </div>
            </div>
            <div className="right">
            <h1> Who am I ?</h1>
                <p>I'm Nilesh, I worked on diffrent technology like, Frontend, Backend and Cloud  during my studies. I am enthusiast for computer Science.
                    <br />
                    <br />
                    I am a Master's student at SRH Hochschule Heidelberg studying Applied
                    Computer Science specializing in Bussiness Computing. I have kept my 
                    analytic mind active with technical expertise but at the same time,
                    was always fascinated by the scintillating world of art.
                    </p>
                    <div className="detail">
                    <div className="itemcontainer">
                        <span className="icon">Phone   :</span>
                        <span> +49 17628940775</span>
                    </div>
                    <div className="itemcontainer">
                        <span className="icon">E-mail   :</span>
                        <span> Chavadanilesh@yahoo.com</span>
                    </div>
                    </div>
                    <div className="Download">
                        <a download="" href="assets/Nilesh Chavada CV.pdf" className="CV" >
                            Download CV  <SystemUpdateAltIcon className="icon"/> 
                        </a>

                    </div>
            </div>
        </div>
    )
}
