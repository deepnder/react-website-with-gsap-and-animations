import React, { useState } from "react";
import "./styles/style.css";
import Footer from "./components/Footer";
import Insights from "./components/Insights";
import Faq from "./components/Faq";
import AnimatedParallex from "./components/AnimatedParallex";
import CompanyFeatures from "./components/CompanyFeatures";
import Testimonials from "./components/Testimonials";

export default function Homepage() {


const hoverLabels=[
  {
    heading:"STACK",
    image:"imagesInPublic/firstHoverdImage.png"
  },
  
  {
    heading:"STRATEGIC",
    image:"imagesInPublic/secondHoverdImage.png"
  },
  {
    heading:"STYLISH",
    image:"imagesInPublic/thirdHoverdImage.png"
  },
]


const [hoverIndex, setHoverIndex] = useState(null);


  return (
    <>
      <div className="header">
        <div className="page-navbar">
          Minds Geeks
        </div>
        {/* hero section */}
        <div className="section-hover-on-text">
          <div className="section-hover-headings">
            <div className="hover-on-text-headings">
            {hoverLabels.map((item,index)=>
              <p
                className="text-headings-1"
                id="hover-image-1" 
                onClick={()=>setHoverIndex(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={()=>setHoverIndex(null)}
              >
               {item.heading}
              </p>
           )}
           </div>

            <div className="ready-for-magic-heading magic-heading">
              Ready for web3 Magic
              <svg
                className="magic-heading-svg"
                viewBox="0 0 30 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.31651 25.8717C12.185 25.0969 16.1627 21.4875 19.5802 17.3738L20.6169 16.1226L21.5106 16.7303L15.6478 25.6675H29.9473V0H4.78028V11.4753L15.6478 8.72265L16.0053 9.72361C12.9309 11.6898 9.32035 12.8337 5.31651 12.8337C5.31991 12.8337 0.753906 12.8337 0.753906 12.8337L0.753906 25.8717C0.753906 25.8717 5.31507 25.8717 5.31651 25.8717Z" />
              </svg>
            </div>
          </div>
          <div className="hovered-image-container" id="hovered-image-container-desktop">
           
            {hoverLabels.map((item,index)=>
            <>
         
         
         <img src={item.image} key={index} className={`hoveredImage-1 ${hoverIndex === index ? "show-image" : "hide-image" }`} alt="" />
            </>
            )}
        
           
          </div>
          <div className="hovered-image-container" id="hovered-image-container-mobile">
          {hoverLabels.map((item,index)=>
        <img src={item.image} key={index} className={`hoveredImage-1 ${hoverIndex === index ? "show-image" : "hide-image" }`} alt="" />
            )}
           
          </div>
        </div>

        {/* types of developments */}
        <CompanyFeatures />
        {/* section-parallex */}
        <AnimatedParallex />
        {/* insights and thoughts */}
        <Insights />
        {/* testimonials */}
        <Testimonials />
        {/* faq */}
        <Faq />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
