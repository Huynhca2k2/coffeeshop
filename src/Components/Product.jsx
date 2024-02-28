import React from 'react'
import product_img from './Assets/images/product.png'
import { PiShoppingCart } from 'react-icons/pi'
import { SlHeart } from "react-icons/sl";

export default function Product({ item }) {
  return (
    <div className='h-[480px] flex flex-row items-center justify-center mx-14'>
        <div className='relative h-[310px] w-full pt-[100px] px-6 bg-[#d9d9d9] rounded-tr-[50px] rounded-bl-[50px] flex flex-col gap-2'>
        <div className='absolute top-0 right-0 left-0 transform -translate-y-1/2 '>
            <img src={item?.img} alt={item?.title} className='w-[242px] h-[177px] object-contain mx-auto'/>
        </div>
        <span className='text-2xl font-bold text-[#071731]'>{item?.title}</span>
        <span className='text-[15px] text-[#071731]'>{item?.description}</span>
        <div className='flex flex-col gap-6 items-center absolute bottom-[-20px] left-0 right-0'>
            <div className='flex flex-row items-center gap-6'>
                <div className='w-[38px] h-[38px] bg-[#291e24] rounded-[10px] p-[9px]'>
                    <PiShoppingCart className='text-xl text-white font-medium'/>
                </div>
                <div className='w-[38px] h-[38px] bg-[#291e24] rounded-[10px] p-[9px]'>
                    <SlHeart className='text-xl text-white font-medium'/>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-[#291E24] h-[42px] px-6 rounded-[10px] w-max'>
                <span className='text-white font-bold text-lg uppercase'>{item?.price}</span>
            </div>
        </div>
        </div>
    </div>
  )
}
