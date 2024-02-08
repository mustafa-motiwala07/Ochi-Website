import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20 ">
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                return <div className='masker'>
                    <div className='w-fit flex items-end'>
                        {index === 1 && (<div className='mr-5 w-[8vw] rounded-md h-[7.5vw] top-[2vw] relative bg-green-500'></div>)}
                        <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-["Neue Montreal"] font-medium'>
                        {item}
                        </h1>
                    </div>
            </div>
            })}  
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
             {["For public and private companies", "From the first pitch to IPO"].map((item, index) =><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
             <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-300 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
             </div>
        </div>
    </div>
  )
}

export default LandingPage
