import React, { useState, useRef, useEffect } from "react";

import "../styles/animatedParallex.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function AnimatedParallex() {

const parallexImages=[
  {
    image:"imagesInPublic/parallexImage1.png",
    imagesLabel:"Discovery"
  },
  {
    image:"imagesInPublic/parallexImage2.png",
    imagesLabel:"Planning"
  },
  {
    image:"imagesInPublic/parallexImage3.png",
    imagesLabel:"Discovery"
  },
  {
    image:"imagesInPublic/parallexImage4.png",
    imagesLabel:"Planning"
  },
]

  const [currentIndex, setCurrentIndex] = useState(1);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
//   const userAgent =
//   typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
// const isMobile =
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     userAgent,
//   );
  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    
    const pin = gsap.to(sectionRef.current, {

      x: () => {
        // for scrolling horizontally for mobile devices upto 420px
        if (window.innerWidth < 420) {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.3;
        }
          // for scrolling horizontally for mobile devices from  420px to 576px
         else if (window.innerWidth < 576) {    
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.5;
        }
// for tablet and small laptops
        else if (window.innerWidth > 900) {    
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 2.5;
        }
         else {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.8;
        }
      },
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 center",
          scrub: 0.5,
          pin: true,
          // onUpdate prop used for getting current index of the element
          onUpdate:(self)=>{
            const progress = self.progress;
            const index = Math.ceil(progress * 4)
            setCurrentIndex(index)
          }
        },
      }
    );
// for scrolling heading
    const headingPin = gsap.fromTo(
      headingRef.current,
      {
        translateX: 0,
      },
      
      {
        translateX: "-150px",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 center",
          scrub: 0,
        },
      }
    );
    return () => {
      pin.kill();
      headingPin.kill();
    };
  }, []);

  return (
    <>
      <div className="section-parallex"  ref={triggerRef} >
        <div className="section-parallex-headings">
          <span className="section-parallex-counting" >{currentIndex}/4</span>
          <p className="section-parallex-p">Step-by-Step magic</p>
        </div>
        <div className="animated-parallex-container">
          <section className="scroll-section-outer" >
            <h2 className="parallex-animated-heading" ref={headingRef} >THE PROCESS</h2>
        <span ref={sectionRef} className="scroll-section-inner"  id=""  >
          {parallexImages.map((item,index)=>
          <span className="scroll-section" key={index}>
                <img src={item.image} className="parallex-images" alt="" />
                <p className="parallex-image-label">{item.imagesLabel}</p>
          </span>
          
          )}
        </span>
    </section>
        </div>
      </div>
    </>
  );
}
