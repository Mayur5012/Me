import React, { useContext } from "react";
import "./Intro.css";
import Typical from 'react-typical';
import { SocialIcon } from 'react-social-icons';
import me2 from "../../img/me3.png";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
//img size
const size= {
  width: "800px",
  height: "800px",
};

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Mayuresh Gawali</span>
          <span className="typical">
            {" "}
            <h1>
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
                "Web Developer | DSA Enthusiasts | ML/AI ",
                500,
                "Web Developer | DSA Enthusiasts | ML/AI | UI/UX",
                500,
              ]}
              />
            </h1>
          </span>
          <span >
MERN and ML Intern at Tecnatox | Ex-Project Intern at Basil | Designer at GDSC GTBIT | Green India Hackathon 2023 | Accenture Innovation Challenge 2022
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <SocialIcon url="https://www.linkedin.com/in/mayureshgawali/" target={"blank"} bgColor="#1f8dfc" style={{ height: 100, width: 100}} />
        <SocialIcon url="https://github.com/Mayur5012" bgColor="#1f8dfc" target={"blank"}  style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://www.instagram.com/array_mayur/" bgColor="#1f8dfc" target={"blank"}  style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://wa.me/8505890182"  target={"blank"}  bgColor="#1f8dfc" style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://mail.google.com/mail/u/0/?fs=1&to=mayureshgawali9@gmail.com&tf=cm"  target={"blank"}  bgColor="#1f8dfc" style={{ height: 100, width: 100 }} />
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img style={size} src={me2} alt="" />
        {/* animation */}
      
{/* 
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Web" text2="Designer" />
        </motion.div> */}

        {/* animation
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
        {/* </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
