import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div className='cardcontainer w-1/2 h-[65vh]'>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' alt=''></img>
            </div>
          </div>
          <div className='cardcontainer w-1/2 h-[65vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
