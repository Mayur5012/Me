import React from "react";
import "./Skill.css";
import designer from "../../img/designer.png";
import developer from "../../img/developer.png";
import programmer from "../../img/programmer.png";

import Typical from "react-typical";
import Resume from "./Mayuresh Gawali Resume.pdf";
import Cocubes from "./cocubes.pdf";
const Skill = () => {
  return (
    <>
      <div className="skillContainer">
        <span className="heading">What I Do!</span>
        <span className="typical">
          {" "}
          <h4 style={{ textAlign: "center", color: "#43ddff" }}>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                " ",
                500,
                "Designing and developing web applications!",
                1000,
                "Solving some real world problems!",
                1000,
                "Practicing data structures and algorithms everyday!",
                1000,
              ]}
            />
          </h4>
        </span>
        <div className="downloadPDF">
          <div style={{marginRight:"20px"}}>
          <a style={{ textAlign: "center" }} href={Resume} download>
            <button className="buttonResume">Download Resume</button>
          </a>
          </div>
          <div>
          </div>
          <a style={{ textAlign: "center" }} href={Cocubes} download>
            <button className="buttonResume">Download Cocubes Report</button>
          </a>
        </div>
        <div className="skill">
          <div className="skillCard">
            <img src={designer} alt="" />
            <h4 id="skillHeading">Design</h4>
            <span className="skillList">
              Figma, Canva, Adobe Illustrator, VistaCreate
            </span>
          </div>
          <div className="skillCard">
            <img src={developer} alt="" />
            <h4 id="skillHeading">Developer</h4>
            <span className="skillList">
              JavaScript, ReactJs, NodeJs, ExpressJs,MongoDb, ML/DL, HTML, CSS3,
              Bootstrap, Tailwind CSS, AJAX, PHP, AWS, SQL, Github, MySQL{" "}
            </span>
          </div>
          <div className="skillCard">
            <img src={programmer} alt="" />
            <h4 id="skillHeading">Programming</h4>
            <span className="skillList">C++, Python</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
