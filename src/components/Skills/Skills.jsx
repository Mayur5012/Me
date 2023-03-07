import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import Designer from "../../img/designer.png";
import Developer from "../../img/developer.png";
import Programmer from "../../img/programmer.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Typical from "react-typical";
import Resume from './Mayuresh Gawali Resume.pdf';

const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    // duration: 1,
    // type: "spring",

    animateX: 100 ,
    animateY:50,
  type: "spring",
   stiffness: 100 
  };

  return (
    <div className="skills" id="skills">
      {/* left side */}
      <div className="awesome s-left">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>What I Do!</span>
        <span className="typical">
            {" "}
            <h1>
              {" "}
              <Typical 
              loop ={Infinity}
              steps={[
                " ",
                500,
                "Designing and",
                1000,
                "Designing and creating web applications",
                1000,
                "To solve real world problems!",
                1000,
              ]}
              />
            </h1>
          </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards s-right">
        {/* first card */}
        <motion.div
        className="devcard"
          // initial={{ left: "12rem" }}
          // initial={{ left: "20rem" }}
          // whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Developer}
            heading={"Developer"}
            detail={"Html, CSS3, Bootstrap, PHP, AWS, Tailwind CSS, MySQL, JavaScript, ReactJs, Nodejs, ML/AI"}
          />
          
        </motion.div>
        {/* second card */}
        <motion.div
        className="designcard"
          // initial={{ left: "-4rem" }}
          // initial={{ left: "-1rem", top: "12rem" }}
          // whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Designer}
            heading={"Design"}
            detail={"Figma, Canva, Adobe Illustrator, VistaCreate"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
        className="progcard"
          // initial={{ top :"19rem",left: "4rem" }}
          // initial={{ top: "19rem", right: "20rem" }}
          // whileInView={{ top:"19rem", left: "4rem"}}
          transition={transition}
        >
          <Card
            emoji={Programmer}
            heading={"Programming Language"}
            detail={"C/C++, Java, Python"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
