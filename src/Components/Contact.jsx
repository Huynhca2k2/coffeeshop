import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-[#f8fafc] w-[1280px] h-[442px] rounded-tr-[60px] rounded-bl-[60px] absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-contact'>
        <div className='flex flex-col gap-4 items-center w-[60%]'>
            <span className='text-primary font-semibold text-[48px]'>Deliciousness to your inbox</span>
            <span className='text-[#5f6575] text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </span>
        </div>
      
      <div className='w-[480px] h-[80px] bg-white flex flex-row items-center justify-center rounded-tr-[24px] rounded-bl-[24px] cursor-pointer pr-2'>
        <input type="text" placeholder='Your email address...' className='px-6 py-2 w-full outline-none'/>
        <div className='px-[44px] h-[60px] flex flex-row justify-center items-center bg-black rounded-tr-[16px] rounded-bl-[16px]'>
            <span className='font-semibold text-sm text-white'>Subscribe</span>
        </div>
      </div>
    </div>
  )
}
