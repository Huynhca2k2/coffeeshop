import React from 'react'
import customer_img from './Assets/images/user.png'
import { PiStarBold } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

export default function Customer({ item }) {
  return (
    <div className='flex flex-row gap-20'>
        <div className='max-w-[280px] h-[288px] w-1/4'>
            <img src={item?.img} alt={item?.name} className='h-full w-full object-contain'/>
        </div>
        <div className='w-3/4 flex flex-col justify-between pt-6'>
            <span className='text-[30px] font-medium italic text-primary'>
                {item?.content}
            </span>
            <div className='pb-2 flex flex-row items-center'>
                <div className='w-1/3'>
                    <span className='text-lg font-semibold text-primary uppercase'>{item?.name}</span><br />
                    <span className='text-sm text-[#5f6575]'>{item?.major}</span>
                </div>
                {
                    item?.star === 5 ? (
                        <div className='flex flex-row text-[#ffc529] text-2xl w-2/3 gap-2'>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarFill/>
                        </div>
                    ) : (
                        <div className='flex flex-row text-[#ffc529] text-2xl w-2/3 gap-2'>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarFill/>
                            <PiStarBold/>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
