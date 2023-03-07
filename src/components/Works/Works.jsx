import React, { useContext } from "react";
import "./Works.css";
// import gdsc from "../../img/gdsc.png";
// import gs from "../../img/gs.png";
// import basil from "../../img/basil.png";
// import Vector3 from "../../img/vector3.png";
// import is from "../../img/inters.png";
import comp from "../../img/comp4.png"
import { themeContext } from "../../Context";
import {Link} from 'react-scroll'
import Typical from 'react-typical'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works" >
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked For All
          </span> <span> These Brands</span>
          <span>
          {" "}
            <h2>
              {" "}
              <Typical 
              loop ={Infinity}
              steps={[
                " ",
                500,
                "Ex Backend Intern At Basil Infotech",
                2000,
                "Ex ML Intern At Internship Studio",
                2000,
                "Designer at GDSC GTBIT",
                2000,
                "Apprenticeship in Goldman Sachs",
                2000,
              ]}
              />
            </h2>
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
      </div>
      <div className="w-right">
      {/* <img src={Vector3} alt=""/> */}
          <div className="companies">
          <div className="img1"><img src={comp} style={{height:"260px", width:"auto"}} alt=""/></div>
          {/* <div className="img2"><img src={gdsc} alt="" style={{height:"100px", width:"150px"}} /></div>
          <div className="img3"><img src={basil} alt=""  style={{height:"200px", width:"200px"}}/></div>
          <div className="img4"><img src={gs} alt="" style={{height:"100px", width:"180px"}} /></div> */}
      </div>
    </div>
    </div>
  );
};

export default Works;
