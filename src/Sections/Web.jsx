import React, { useRef } from "react";
import "./Web.css";
import WebDevelopment from '../assets/Images/WebDevelopment.jpg'

const Web = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Gradient Position
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // 3D Tilt Calculation
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
    card.style.setProperty("--width", `0px`);
    card.style.setProperty("--height", `0px`);
  };

    return (
    <div id="about" className="relative top-24 flex justify-center items-center mb-24 ">
      <div
        ref={cardRef}
        className="card WebCard  text-black"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[30%] containttext">
        <h1 className="text-2xl font-bold webH">Web Development</h1>
        <p className="Webp mt-5 opacity-75">Web development involves designing, coding, and maintaining websites. It includes front-end and back-end development, ensuring responsive design, functionality, and seamless user experience across various devices and browsers.
</p>

         <p className="Webp mt-5 opacity-80"><strong> Developers use HTML, CSS, JavaScript, and frameworks to build interactive, efficient websites. </strong></p>
         
          <div className='Webknowbtn  rounded-3xl p-1.5 mt-8'> <button className=' p-1.5 rounded-2xl w-[120px] font-bold text-white'>Know More</button></div>
        </div >

        <div className="w-[470]"><img src={WebDevelopment} className="Webimg rounded-2xl w-[470px]"/></div>
      </div>
    </div>
  );
};

export default Web;