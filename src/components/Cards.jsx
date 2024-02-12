import React from 'react';

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-20 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                <button className='absolute px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68] left-10 bottom-10'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh] '>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                <button className='absolute px-5 py-1 rounded-full border-2 border-[#fff] text-[#fff] left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                <button className='absolute px-5 py-1 rounded-full border-2 border-[#fff] text-[#fff] left-10 bottom-10'>BUSINESS BOOTCAMP ALUMINI</button></div>
        </div>
    </div>
  )
}

export default Cards;