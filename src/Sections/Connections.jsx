import React from 'react'
import connection from '../assets/Images/connection.png'
import Education from '../assets/Images/Education.png'
import Experiance from '../assets/Images/Experiance.png'
import './Connections.css'

const Connections = () => {
    return (
        <div>
            <div className='conSec flex flex-wrap w-[90%] justify-center items-center gap-7 m-auto rounded-2xl'>
                <div className='connCard flex flex-col w-[290px]  text-center justify-center items-center p-6 bg-gray-50 rounded-lg'>
                    <h1 className='CardH'>500+ Professional Connections</h1>
                    <img src={connection} className=' rounded-[50%] w-[200px] h-[200px]' />
                    <p className='pt-4 pb-4'>With a strong network of 500+ professional connections, I actively engage with developers, mentors, and tech leaders, expanding my knowledge, sharing ideas, and staying updated with industry trends and opportunities.</p>
                </div>


                <div className='connCard flex flex-col w-[290px]  text-center justify-center items-center p-6 bg-gray-50 rounded-lg'>
                    <h1 className='CardH'>2+ Years of Experiance</h1>
                    <img src={Education} className=' rounded-[50%] w-[200px] h-[200px]' />
                    <p>With hands-on experience in software development, I've built web and mobile applications using modern frameworks. I excel in Java, JavaScript, and React, focusing on clean code, performance, and user-centric design.</p>
                </div>


                <div className='connCard flex flex-col w-[290px]  text-center justify-center items-center p-6 bg-gray-50 rounded-lg'>
                    <h1 className='CardH'>Education</h1>
                    <img src={Experiance} className=' rounded-[50%]  '/>
                    <p className='pt-5 pb-5'>Pursuing a B.Tech in Computer Science Engineering at BBD University, Lucknow, I've gained a strong foundation in programming, data structures, algorithms, and software development through practical projects and academic excellence.</p>
                </div>
            </div>
        </div>
    )
}

export default Connections
