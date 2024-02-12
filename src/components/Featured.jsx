import { motion } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';


function Featured() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cardcontainer relative w-1/2 h-[65vh]'>
            <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter font-["Neue_Montreal"]'>
              <h1 className='absolute flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter font-["Neue_Montreal"]'>
                {"FYDE".split('').map((item, index) => 
                <motion.span initial={{y: "100%"}} animate={isHovering ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 2, 0.36, 1], delay: index*.06}} className='inline-block'>{item}</motion.span>
                )}
              </h1>
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' alt=''></img>
            </div>
          </div>
          <div className='cardcontainer relative w-1/2 h-[65vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter font-["Neue_Montreal"]'>
                {"VISE".split('').map((item, index) => 
                <motion.span initial={{y: "100%"}} animate={isHovering ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 2, 0.36, 1], delay: index*.06}} className='inline-block'>{item}</motion.span>
                )}
              </h1>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
