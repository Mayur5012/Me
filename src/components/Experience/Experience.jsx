import React from 'react'
import Typical from "react-typical"
import './Experience.css'
import basil from '../../img/basil1.png'
import tecnatox from '../../img/tecnatox.png'
import gdsc from '../../img/gdsc.png'
import inters from '../../img/inters.png'
function Experience() {
  return (
    <>
    <div className='mainExperience'>
        <span className='heading'>Worked For All These Brands</span>
        <span className='typical'>
          {" "}
            <h4 style={{textAlign:"center", color:"#43ddff"}}>
              {" "}
              <Typical 
              loop ={Infinity}
              steps={[
                " ",
                500,
                "MERN and ML Intern At Tecnatox",
                2000,
                "Ex Backend Intern At Basil Infotech",
                2000,
                "Designer at GDSC GTBIT",
                2000,
                "Ex ML Intern At Internship Studio",
                2000,
              ]}
              />
            </h4>
          </span>


          {/* cards */}



 <div className="company">
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img id="companyImg" style={{marginTop:"40%", width:"212px"}} src={tecnatox}  alt="Card 1" />
				</div>
				<div className="flip-card-back">
					<div className="card-heading">TecnaTox</div>
					<div className="card-subheading">Role : MERN and FReMP Intern</div>
					<div className="card-subheading">Duration : 6 Months</div>
					<div className="card-description">
						<p>- Created NLP toolkit for evidence gathering of mechanistic
pathway of toxicity</p>
						<p>- Developed a frontend for 3 tools with a smooth UI.</p>
						<p>- Integrated and developed backend for the project.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img id="companyImg" style={{marginTop:"24%", width:"168px"}} src={basil}  alt="Card 2" />
				</div>
				<div className="flip-card-back">
					<div className="card-heading">Basil Infotech</div>
					<div className="card-subheading">Role : Backend Intern</div>
					<div className="card-subheading">Duration : 3 Months</div>
					<div className="card-description">
						<p>- Developed a payment gateway website with the team</p>
						<p>- Created backend for the website</p>
						<p>- Created user friendly interfaces</p>
					</div>
				</div>
			</div>
		</div>
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img id="companyImg" style={{marginTop:"40%", width:"160px"}} src={gdsc} alt="Card 1" />
				</div>
				<div className="flip-card-back">
					<div className="card-heading">GDSC</div>
					<div className="card-subheading">Role : Designer</div>
					<div className="card-subheading">Duration : 9 Months</div>
					<div className="card-description">
						<p>- Creating designs for development team</p>
						<p>- Designing user friendly interfaces</p>
					</div>
				</div>
			</div>
		</div>
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img id="companyImg" style={{marginTop:"36%", width:"206px"}} src={inters} alt="Card 1" />
				</div>
				<div className="flip-card-back">
					<div className="card-heading">Internship Studio</div>
					<div className="card-subheading">Role : ML Training + Internship</div>
					<div className="card-subheading">Duration : 1.5 Months</div>
					<div className="card-description">
						<p>- Youtube
adview Prediction</p>
						<p>- Used Decision Tree Regressor and Random Forest Regressors to predict</p>

					</div>
				</div>
			</div>
		</div>
		</div>
	</div>



</>

  )
}

export default Experience;
