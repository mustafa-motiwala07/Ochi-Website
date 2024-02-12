import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
        <h1 className='pt-20 text-[30vw] leading-none font-["Founders_grotesk_X"] uppercase font-medium tracking-tight'>
            we are ochi
        </h1>
        <h1 className='pt-20 text-[30vw] leading-none font-["Founders_grotesk_X"] uppercase font-medium tracking-tight'>
            we are ochi
        </h1>
      </div>
    </div>
  )
}

export default Marquee;
