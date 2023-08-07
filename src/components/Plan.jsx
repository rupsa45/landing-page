import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 grid lg:grid-cols-2 gap-4 '>
      {/* {left side} */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-4  object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1559590946-44067eca2c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1252&q=80" alt="" srcset="" />
        <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
        <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" srcset="" />
        <img  className='object-cover w-full h-full p-2 row-span-2' src="https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" srcset="" />
      </div>
      {/* {Right Side} */}
      <div className='flex flex-col h-full justify-center'>
        <p className='font-bold text-5xl md:text-6xl'>Plan Your Next Trip </p>
        <p className='py-6 text-2xl font-serif'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ipsum?</p>
        <p className='pb-6 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla ducimus cupiditate hic deleniti, omnis voluptate, mollitia nemo nam ex magnam eum facilis atque beatae. Aut sint temporibus odit exercitationem?</p>
        <div>
          <button className='border-black hover:shadow-xl mr-5 font-sans text-lg '>Learn More</button>
          <button className='bg-violet-500 hover:bg-violet-600 hover:shadow-xl active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 font-semibold'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan;
