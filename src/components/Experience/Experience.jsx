import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="expi">
        <div className="left">
          <div className="achievement">
            <div className="square" style={{ color: darkMode ? "var(--orange)" : "" }}>2+ </div>
            <span style={{ color: darkMode ? "white" : "" }}>years </span>
            <span>Experience</span>
          </div>
        </div>
        <div className="center">
        <div className="achievement">
            <div className="square" style={{ color: darkMode ? "var(--orange)" : "" }}>2+ </div>
            <span style={{ color: darkMode ? "white" : "" }}>Internship </span>
            <span>Done</span>
          </div>
        </div>
        <div className="right">
        <div className="achievement">
            <div className="square" style={{ color: darkMode ? "var(--orange)" : "" }}>3+ </div>
            <span style={{ color: darkMode ? "white" : "" }}>Training </span>
            <span>Done</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
