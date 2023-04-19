import React from 'react'
import './Skill.css'
import designer from '../../img/designer.png'
import developer from '../../img/developer.png'
import programmer from '../../img/programmer.png'

import Typical from "react-typical";
import Resume from './Mayuresh Gawali Resume.pdf';
const Skill = () => {
  return (
    <>
    <div className='skillContainer'>
        <span className='heading'>What I Do!</span>
        <span className="typical">
            {" "}
            <h4 style={{textAlign:"center", color:"#43ddff"}}>
              {" "}
              <Typical 
              loop ={Infinity}
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
          <a style={{textAlign:"center"}} href={Resume} download>
          <button className="buttonResume">Download CV</button>
        </a>
    <div className='skill'>
        <div className='skillCard'>
            <img src={designer} alt=""/>
            <h4 id='skillHeading'>Design</h4>
            <span className='skillList'>Figma, Canva, Adobe Illustrator, VistaCreate</span>
        </div>
        <div className='skillCard'>
            <img src={developer} alt=""/>
            <h4 id='skillHeading'>Developer</h4>
            <span className='skillList'>JavaScript, ReactJs, NodeJs, ExpressJs, ML/AI, Html, CSS3, Bootstrap, PHP, AWS, MongoDb, MySQL </span>
        </div>
        <div className='skillCard'>
            <img src={programmer} alt=""/>
            <h4 id='skillHeading'>Programming</h4>
            <span className='skillList'>C/C++, Java, Python</span>
        </div>
        
    </div> 
    </div>
      
    </>
  )
}

export default Skill
