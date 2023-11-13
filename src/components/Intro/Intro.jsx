import React, { useContext } from "react";
import "./Intro.css";
import Typical from 'react-typical';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-scroll";
import me2 from "../../img/me3.png";
import  { Tilt } from 'react-tilt';


const defOptions={
  reverse: false,
  max:35,
  perspective:1000,
  scale:1.1,
  speed:1000,
  transition:true,
  axis:null,
  reset:true,
  easing: "cubic-bezier(.03,.98,.52,.99)"

}

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
//img size
const size= {
  width: "500px",
  height: "500px",
};


  return (
    
    <div className="Intro" id="Intro">
      
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Hey! I Am</span>
          <span>Mayuresh Gawali</span>
          <span className="typical">
            {" "}
            <h2>
              {" "}
              <Typical 
              loop ={Infinity}
              steps={[
                " ",
                500,
                "Web Developer",
                500,
                "Web Developer | DSA Enthusiasts",
                500,
                "Web Developer | DSA Enthusiasts | Data Science ",
                500,
                "Web Developer | DSA Enthusiasts | Data Science | UI/UX",
                500,
              ]}
              />
            </h2>
          </span>
          <span >
                Ex MERN and ML Intern at Tecnatox | Ex-Project Intern at Basil | Ex Designer at GDSC GTBIT | Green India Hackathon 2023 | Accenture Innovation Challenge 2022
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button id="hire" className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <SocialIcon url="https://www.linkedin.com/in/mayureshgawali/" target={"blank"} bgColor="#43ddfc" style={{ height: 100, width: 100}} />
        <SocialIcon url="https://github.com/Mayur5012" bgColor="#43ddfc" target={"blank"}  style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://www.instagram.com/array_mayur/" bgColor="#43ddfc" target={"blank"}  style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://wa.me/8505890182"  target={"blank"}  bgColor="#43ddfc" style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://mail.google.com/mail/u/0/?fs=1&to=mayureshgawali9@gmail.com&tf=cm"  target={"blank"}  bgColor="#43ddfc" style={{ height: 100, width: 100 }} />
          
        </div>
      </div>


      
      {/* right image side */}
      <div className="i-right">
      <Tilt options={defOptions} >
        <img style={size} src={me2} alt="" />
      </Tilt>
      </div>
    </div>
  );
};

export default Intro;
