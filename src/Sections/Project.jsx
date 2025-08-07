import React, { useRef } from "react";
import "./Project.css";
import Adhyatma from '../assets/Project_img/Adhyatma.jpg'
import Razor from '../assets/Project_img/Razor.jpg'
import MusicPL from '../assets/Project_img/MusicPL.jpg'

const Project = () => {
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
        <div id="projects" className="relative top-24 flex justify-center items-center mb-24 ">
            <div
                ref={cardRef}
                className="Project ProjectCard  text-black"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <h1 className="topH" >Projects 🚀</h1>
                {/* Adhyatma Jyoti Card */}
                <div className="flex flex-wrap gap-10">

                <div className="proj flex flex-col w-[260px] h-[500px] m-auto justify-center items-center p-5 rounded-2xl">
                    <img src={Adhyatma} className="w-[250px] rounded-2xl" />
                    <h2 className="ProjectH text-2xl">Adhyatma Jyoti 🕉 </h2>
                    <p className="ProjectP">A spiritual website promoting Sanatan Dharma, featuring sacred texts, mantras, meditation content, and a peaceful UI experience.</p>
                    <div className="linkbtn text-white w-[120px] bg-blue-400 rounded-2xl p-2 mt-4"><a href="https://sites.google.com/view/adhyatmajyoti/home">Visit Site</a></div>
                </div>

                {/* Razorpay clone Card */}
                <div className="proj flex flex-col w-[260px] h-[500px] m-auto justify-center items-center p-5 rounded-2xl">
                    <img src={Razor} className="w-[250px] rounded-2xl" />
                    <h2 className="ProjectH text-2xl"> Razorpay Clone 💳</h2>
                    <p className="ProjectP">Implemented secure online payment system using Razorpay API with smooth checkout, transaction handling, and responsive design.</p>
                    <strong className="linkbtn text-white w-[120px] bg-blue-400 rounded-2xl p-2 mt-4"><a href="https://mohitmauryadev.github.io/Razorpay/">Visit Site</a></strong>
                </div>

                {/* Music Player Card */}
                <div className="proj flex flex-col w-[260px] h-[500px] m-auto justify-center items-center p-5 rounded-2xl">
                    <img src={MusicPL} className="w-[250px] rounded-2xl" />
                    <h2 className="ProjectH text-2xl"> Music Player 🎧</h2>
                    <p className="ProjectP">A responsive web-based music player with playlist features, audio controls, and clean UI for seamless listening experience..</p>
                    <strong className="linkbtn text-white w-[120px] bg-blue-400 rounded-2xl p-2 mt-4"><a href="https://mohitmauryadev.github.io/Music-Player/">Visit Site</a></strong>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Project;