import React from 'react'
import "./Portfolio.scss"

export default function Portfolio() {
    return (
    <div className="Portfolio" id="Portfolio">

<div className="skilleducation">

<div className="left">
           <div className="wrapper">
               <h1>Technical Skills</h1>
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
              <div className ="skills">
                <div className ="details">
                    <span>React</span>
                    <span>70%</span>
                </div>
                <div className="bar">
                    <div id="react-bar"></div>
                </div>
              </div>  
              <div className ="skills">
                <div className ="details">
                    <span>AWS</span>
                    <span>35%</span>
                </div>
                <div className="bar">
                    <div id="AWS-bar"></div>
                </div>
              </div>  
              <div className ="skills">
                <div className ="details">
                    <span>DevOps</span>
                    <span>35%</span>
                </div>
                <div className="bar">
                    <div id="DevOps-bar"></div>
                </div>
              </div>  
               
               
              </div>  
        </div>     
            <div className="right"> 
         <div class="row">
          <h2>Education</h2>
            <ul class="timeline mt-4 pr-md-5">
              <li>
                <div class="title">April 2020 - Present</div>
                <div class="details">
                  <h5>Master in Applied Computer Science</h5>
                  <small class="fg-theme">SRH Hochschule, Heidelberg, Germany</small>
                  <p>Specialization in Business Computing :   SAP HANA , SAP ABAP. </p>
                    <p>  Software Architecture And Development. </p>
                     <p> Advanced Database.</p>
                </div>
              </li>
              <li>
                <div class="title">April 2015 - July 2018</div>
                <div class="details">
                  <h5>Bachelour of Computer Application</h5>
                  <small class="fg-theme">SDJ International College, Surat, India</small>
                  <p>Advanced Programming Language :  C/C++ , C# , JAVA.</p>
                  <p>Database Management System</p>
                  <p>Data File Structure</p>
                  <p>Project</p>
                </div>
              </li>
              <li>
                <div class="title">2002 - 2014</div>
                <div class="details">
                  <h5>School 1 to 12</h5>
                  <small class="fg-theme">Indian Schoole</small>
                  <p>English , Mathematics , Science and Technology , Social Science , Accounting , Statistics , Computer</p>
                </div>
              </li>
            </ul>
          </div>
 
          </div>
		</div>



	<div className="project" id="project"><h1>Projects</h1></div>
      <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie">
			</div>  
			<div class="cd-timeline-content">
				<h2>Live Storeytellers</h2>
				<p>International Projects Manegment</p>
				<span class="cd-date">April 2020</span>
			</div>  
		</div>  

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div>  

			<div class="cd-timeline-content">
				<h2>Library Management System</h2>
				<p><span>Technologies used:  </span>Java , SQL</p>
				<span class="cd-date">June 2020</span>
			</div>  
		</div>  

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div> 
			<div class="cd-timeline-content">
				<h2>Leave Management System</h2>
				<p><span>Technologies used:  </span>SAP ABAP</p>
				<span class="cd-date">August 2020</span>
			</div> 
		</div>  

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 

			<div class="cd-timeline-content">
				<h2> Antique Itemshop</h2>
				<p><span>Technologies used:  </span>C# , .NET , XAML , XMl</p>
				<span class="cd-date">February  2021</span>
			</div>  
		</div>  

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 

			<div class="cd-timeline-content">
				<h2>Grocery Management System</h2>
				<p><span>Technologies used:  </span>MERN Stack , Docker , Jenkins</p>
				<span class="cd-date">April 2021</span>
			</div>  
		</div>  

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div>  

			<div class="cd-timeline-content">
				<h2>Restaurant Locator </h2>
				<p><span>Technologies used:  </span>JavaScript , MongoDB , Neo4j , Redis</p>
				<span class="cd-date">June 2021</span>
			</div>  
		</div>  
	</section>  

  </div>
  
    )
}
