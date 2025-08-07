import React from 'react'
import { useEffect, useRef } from 'react'
import './Customer.css'
import react from '../assets/Skill_img/react.svg'
import Ame1 from '../assets/Customers/Ame1.webp'
import Ame2 from '../assets/Customers/Ame2.jpg'
import men1 from '../assets/Customers/men1.jpg'
import men2 from '../assets/Customers/men2.jpg'
import chinam1 from '../assets/Customers/chinam1.jpg'
import women1 from '../assets/Customers/women1.jpg'
import chinag2 from '../assets/Customers/chinag2.jpg'
import women4 from '../assets/Customers/women4.jpg'


const Customer = () => {

 const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 3;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start when it reaches the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // smaller = faster

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



    return (
        <div className='w-[100%] mt-36'>


<div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0D1F22] to-transparent z-10 pointer-events-none  scrollbar-hide" />

      {/* Gradient Right Overlay */}
      <div className="absolute right-0 top-10 h-full w-20 bg-gradient-to-l from-[#0D1F22] to-transparent z-10 pointer-events-none"/>


            <div ref={scrollRef} className='cuslist w-[100%] pt-7 m-auto  flex overflow-x-auto justify-center items-center gap-32 hide-scrollbar'>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame1} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Chloe Edwards</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>I am so happy with Nexovate's services.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Neeraj Gupta</h3>
                    <strong>⭐⭐⭐⭐⭐</strong>
                    <p className='cusM'>Thank you ! Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Piyush Kumar</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Thank you ! Best services.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>James Walker</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Amazing experiance with Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Emily Thompson</h3>
                    <strong>⭐⭐⭐⭐⭐</strong>
                    <p className='cusM'>Wow ! Good Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>William Davies</h3>
                    <strong>⭐⭐⭐</strong>
                    <p className='cusM'>Wow ! Great work Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Amelia Brooks</h3>
                    <strong>⭐⭐⭐⭐⭐</strong>
                    <p className='cusM'>Great ! work of Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Jack Turner</h3>
                    <strong>⭐⭐⭐</strong>
                    <p className='cusM'>Happy for Nexovate services.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={Ame1} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Megha Reddy</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Delivered exactly. Thanks!</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={men1} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Karan Patel</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Thank you Nexovate ! </p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={men2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Jia Chen</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>I am so happy with Nexovate's services.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={chinam1} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Bo Wang</h3>
                    <strong>⭐⭐⭐</strong>
                    <p className='cusM'>Amazing experiance with Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={women1} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Mei Lin</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Wow ! Great work Nexovate.</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={chinag2} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Xiao Li</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Thank you Nexovate !</p>
                </div>

                <div className='flex flex-col justify-center text-center w-[120px]'>
                    <img src={women4} className='w-[50px] h-[50px] m-auto rounded-[50%]' />
                    <h3 className='cusH text-white font-bold text-xl'>Priya Desia</h3>
                    <strong>⭐⭐⭐⭐</strong>
                    <p className='cusM'>Amazing experiance with Nexovate.</p>
                </div>
            </div>

        </div>
    )
}

export default Customer
