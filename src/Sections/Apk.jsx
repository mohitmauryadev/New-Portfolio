import React, { useRef } from "react";
import "./Apk.css";
import AppDevelopment from '../assets/Images/AppDevelopment.jpg'

const Apk = () => {
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
        <div className="relative top-24 flex justify-center items-center mt-5 mb-24 ">
            <div
                ref={cardRef}
                className="Apkcard AppCard bg-white text-black"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                <div className="w-[470]"><img src={AppDevelopment} className="Appimg rounded-2xl w-[470px]" /></div>

                <div className="w-[30%] containttext">
                    <h1 className="text-2xl font-bold AppH">Android App Development</h1>
                    <p className="Apkp mt-5 opacity-75">App development is the process of creating software applications for mobile devices. It involves UI/UX design, coding, testing, and deployment on platforms like Android and iOS.

                    </p>

                    <p className="Apkp mt-5 opacity-80"><strong> Popular tools include Flutter, React Native, and Kotlin, ensuring smooth performance and user satisfaction. </strong></p>

                    <div className='Appknowbtn  rounded-3xl p-1.5 mt-8'> <button className=' p-1.5 rounded-2xl w-[120px] font-bold text-white'>Know More</button></div>
                </div >


            </div>
        </div>
    );
};

export default Apk;