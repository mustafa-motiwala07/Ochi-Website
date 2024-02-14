import { motion, useAnimation } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';


function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=> {
    cards[index].start({y: "0"});
  };

  const handleHoverEnd = (index)=> {
    cards[index].start({y: "100%"});
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[65vh]'>
              <h1 className='absolute flex right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter font-["Neue_Montreal"]'>
                {"FYDE".split('').map((item, index) => 
                <motion.span initial={{y:"100%"}} animate={cards[0]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>
                )}
              </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' alt=''></img>
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[65vh]'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter font-["Neue_Montreal"]'>
                {"VISE".split('').map((item, index) => 
                <motion.span initial={{y:"100%"}} animate={cards[1]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>
                )}
              </h1>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt=''></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
