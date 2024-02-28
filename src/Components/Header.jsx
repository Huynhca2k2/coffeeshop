import React from 'react'
import logo_img from './Assets/images/logo.png'
import { PiUser } from "react-icons/pi";
import { PiShoppingCart} from "react-icons/pi";

export default function Header() {
  return (
    <div className='absolute top-0 left-0 right-0 z-10'>
        <div className='flex flex-row justify-between items-center bg-transparent pt-6 pb-4 border-b-2 broder-[#cadad4] max-w-[1244px] mx-auto'>
            <img src={logo_img} alt="logo" className='w-[58px] h-[52px] object-contain'/>
            <div className='flex flex-row gap-16 items-center'>
                <ul className='flex flex-row gap-16 text-sm font-medium text-[#071731]'>
                    <li className='border-b-[1px] border-gray-800'>Home</li>
                    <li>Service</li>
                    <li>Our menu</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='flex flex-row items-center gap-2 text-sm font-medium text-[#071731]'>
                        <PiUser className='text-[21px] font-medium'/>
                        <span>Account</span>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-sm font-medium text-[#071731]'>   
                        <PiShoppingCart className='text-[21px] font-medium'/>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  )
}
