import React from 'react'
import Contact from './Contact'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'
import { PiTiktokLogoLight } from 'react-icons/pi'
import logo from './Assets/images/logo.png';

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className='relative h-[800px] max-w-[1244px] mx-auto pt-[320px]'>
        <Contact/>
        <div className='flex flex-row justify-between'>
          <div className='w-1/2'>
            <img src={logo} alt="logo" />
            <span className='block max-w-[300px] mt-4 text-[#808E98]'>Sit amet nisl purus in mollis nunc sed id semper. In vitae turpis massa sed. Sed velit dignissim sodales ut e</span>
          </div>
          <div className='w-1/2 flex flex-row'>
            <ul className='w-1/3 flex flex-col gap-6 text-[#B3B8BC]'>
              <span className='text-lg font-semibold uppercase text-white'>Company</span>
              <li>About Us</li>
              <li className='text-white underline'>Features</li>
              <li>Watch Our Video</li>
              <li>Contact Us</li>
            </ul>
            <ul className='w-1/3 flex flex-col gap-6 text-[#B3B8BC]'>
              <span className='text-lg font-semibold uppercase text-white'>Our Policies</span>
              <li>Privacy Policy</li>
              <li>Teams of Use</li>
              <li>Cookies Policy</li>
              <li>GDPR Policy</li>
              <li>Refund Policy</li>
              <li></li>
            </ul>
            <ul className='flex flex-col gap-6 text-[#B3B8BC]'>
              <span className='text-lg font-semibold uppercase text-white'>Social Media</span>
              <li className='flex flex-row items-center gap-2'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#272C30] p-2'>
                  <SlSocialFacebook />
                </div>
                <span>Facebook</span>
              </li>
              <li className='flex flex-row items-center gap-2'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#272C30] p-2'>
                  <SlSocialTwitter />
                </div>
                <span>Twitter</span>
              </li>
              <li className='flex flex-row items-center gap-2'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#272C30] p-2'>
                  <SlSocialInstagram />
                </div>
                <span>Instagram</span>
              </li>
              <li className='flex flex-row items-center gap-2'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#272C30] p-2'>
                  <PiTiktokLogoLight />
                </div>
                <span>Tiktok</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t-[1px] border-[#94999C] text-center text-[#94999C] text-sm pt-12 mt-14'>
          © 2022 VoiCoffee - All rights reserved.
        </div>
      </div>
    </div>
    
  )
}
