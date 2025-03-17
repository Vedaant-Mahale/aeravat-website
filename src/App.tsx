import './App.css'
import { useState } from 'react'
import pinktraingle from './assets/pink-triangle.png'
import pinksquare from './assets/pink-square.png'
import pinkcircle from './assets/pink-circle.png'
import aeravat from './assets/aeravat-logo.png'
function App() {
  const [clicked,setClicked] = useState(false)
  return (
    <>
      <div className='relative w-full h-[90vh] bg-black flex justify-center items-center flex-col'>
        <div className='absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[90px] md:translate-y-[180px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out' style={{opacity : clicked? 1:0,
          transform: clicked ?  "translate(0px, 0px)":"translate(0px,-200px)"
        }}>ABOUT</div>
        <div className='absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[-100px] translate-x-[-115px] md:translate-y-[-200px] md:translate-x-[-230px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out' style={{opacity : clicked? 1:0,
          transform: clicked ?  "translate(0px, 0px)":"translate(200px, 80px)"
        }}>TIMELINE</div>
        <div className='absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[-100px] translate-x-[115px] md:translate-y-[-200px] md:translate-x-[230px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out' style={{opacity : clicked? 1:0,
          transform: clicked ?  "translate(0px, 0px)":"translate(-200px,80px)"
        }}>CONTACT</div>
        <div className='relative md:w-80 md:h-80 w-40 h-40 rounded-full md:border-4 border-2 border-fuchsia-400 flex flex-col shadow-[0px_0px_20px_rgb(255,100,200)] rotate cursor-pointer transition-colors duration-300 ease-in-out' style={{backgroundColor : clicked? 'rgb(250,50,250)':'black'}} onClick={() => {
          setClicked(!clicked);
        }}>
            <div className='md:w-20 md:h-20 w-10 h-10 bg-black absolute md:top-15 md:left-6 top-7 left-3 rounded-full border-2 border-fuchsia-400 flex justify-center items-center'>
              <img className = 'md:w-14 md:h-12 mb-2 w-7 h-6'src = {pinktraingle}></img>
            </div>
            <div className='md:w-20 md:h-20 w-10 h-10 bg-black absolute md:top-15 md:right-6 top-7 right-3 rounded-full border-2 border-fuchsia-400 flex justify-center items-center'>
              <img className = 'md:w-14 md:h-14 w-7 h-7'src = {pinksquare}></img>
            </div>
            <div className='md:w-20 md:h-20 w-10 h-10 bg-black absolute md:bottom-2 left-1/2 -translate-x-1/2 bottom-1 rounded-full border-2 border-fuchsia-400 flex justify-center items-center'>
              <img className = 'md:w-14 md:h-14 w-7 h-7'src = {pinkcircle}></img>
            </div>
            <div className='md:w-30 md:h-30 w-15 h-15 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full border-2 border-fuchsia-400 justify-center items-center'>
            </div>
        </div>
      </div>
      <div className='relative w-full h-[90vh] bg-black flex'>
        {/* Soham Bhosale - information */}
      </div>
      <div className='relative w-full h-[90vh] bg-black flex justify-center items-center flex-col'>
         {/* Vedaant Mahale - Timeline */}
      </div>
    </>
  )
}

export default App
