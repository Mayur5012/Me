import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Crypco from "../../img/crypco.png";
import Swasthya from "../../img/swasthya.png";
import Bussy from "../../img/bussy.png";
import Notty from "../../img/notty.png";
import Matka from "../../img/matka.png";
import Ipl from "../../img/ipl.png";
import pred from "../../img/pred.png"
import pd from "../../img/pd.png";
import swasser from "../../img/Swasser.png"
import drip from "../../img/drip.png"
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className="headingPort">Some Personal Projects</span>

      {/* slider */}
      <Swiper
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          0:{
            slidesPerView :1,
            spaceBetween : 5,
          },
          480 : {
            slidesPerView :1,
            spaceBetween : 15,
          },
          768 : {
            slidesPerView :2,
            spaceBetween : 15,
          },
          1024:{
            slidesPerView :3,
            spaceBetween : 30,
          }
        }}
      >
        <SwiperSlide>
         <a href="https://dripinfinite.vercel.app/" rel="noreferrer" target="_blank"><img src={drip} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://swasthya-serivce.onrender.com/" rel="noreferrer" target="_blank"><img src={swasser} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://mayur5012.github.io/crypco/" rel="noreferrer" target="_blank"><img src={Crypco} alt="" /></a> 
        </SwiperSlide>
        
        <SwiperSlide>
         <a href="https://swasthyaprediction.streamlit.app/" rel="noreferrer" target="_blank"><img src={pred} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://iplwinpred.streamlit.app/" rel="noreferrer" target="_blank"><img src={Ipl} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.figma.com/file/bMbrPgNgPKnFrxFp1lNa1S/Bussy?node-id=4%3A413" rel="noreferrer" target="_blank"><img src={Bussy} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://projectdegree.onrender.com/" rel="noreferrer" target="_blank"><img src={pd} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mayur5012.github.io/notty/" rel="noreferrer" target="_blank"><img src={Notty} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Matka} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swasthya} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
