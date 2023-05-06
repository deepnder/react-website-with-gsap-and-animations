import React ,{useState,useEffect}from 'react';
import quotesImage from "../images/quotesImage.png";
import testimonialsImage from "../images/testimonialsImage.png";
import '../styles/testimonials.css'

export default function Testimonials() {

  const testimonials = [
    {
    
      testimonial: "It's like they injected my website with a dose of adrenaline and now it's running circles around my competition. I'm blown away by their talent and can't recommend them enough."
    },
    {
     
      testimonial: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
     
      testimonial: "It's like they injected my website with a dose of adrenaline and now it's running circles around my competition. I'm blown away by their talent and can't recommend them enough."
    },
  ];

const [activeIndex, setActiveIndex] = useState(0);
// for autoplaying testimonials
useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  },4000);
  return () => clearInterval(timer);
}, [testimonials]);


  return (
  <>
        <div className="testimonials">
          <div className="tesitmonials-tab-mobile-span">
        <img src={quotesImage} className="quotesImage-with-span" alt="quotesImage" />
          <span className="testimonials-span">
            <h2 className="testimonials-span-first-heading">straight outta</h2>
            <h2 className="testimonials-span-second-heading">STREETS</h2>
          </span></div>
          <div className="testimonials-container">
            <img src={quotesImage} className="quotesImage" alt="quotesImage" />
       
            <div className="testimonial-slider">
      <div className="testimonial-slider-content" >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide ${index === activeIndex ? "active" : ""}`}
          >
            <p className="testimonials-container-p">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-slider-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
            <img
              src={testimonialsImage}
              className="testimonialsImage"
              alt="testimonialsImage"
            />
          </div>
        </div>
      
  </>
  )
}
