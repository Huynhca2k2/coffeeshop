import React from 'react'
import Header from './Header'
import mouse from './Assets/images/mouse.png'
import { VscStarFull } from "react-icons/vsc";
import HomeSlick from './HomeSlick';
import ProductSlick from './ProductSlick';
import banner_new from './Assets/images/banner-new.png'
import CustomerSlick from './CustomerSlick';

export default function Home() {
  return (
    <div className='relative'>
      <Header/>
      <div className='flex flex-row items-center h-[840px] relative'>
          <div className='w-[45%]'></div>

          <div className='w-[55%] bg-[#aa9585] h-full'>
          </div>
      </div>

      <div className='max-w-[1244px] mx-auto flex flex-row items-center h-[840px] absolute top-0 right-0 left-0'>
        <div className='w-[45%] pr-12 flex flex-col gap-6 pt-[80px]'>
            <span className='text-primary font-semibold text-[80px] uppercase leading-[1]'>enjoy life <br /> sip by sip</span>
            <span className='text-lg text-[#5F6575]'><span className='text-[#aa9585]'>Voi Coffee</span>  is aimed at everyone, especially young, active, busy people. The brand is committed to providing customers with great coffee experiences, even when they are in a hurry.</span>
            <div className='flex flex-row items-center'>
              <div className='pr-6 h-full'>
                <img src={mouse} alt="mouse" className='w-[27px] h-[44px] object-contain'/>
              </div>
                
              <div className='pl-6 border-l-[1px] flex flex-col gap-2'>
                <div className='flex flex-row gap-4 items-center'>
                  <span className='text-[#181b1d] text-lg font-medium'>Trusted Users</span> 
                  <div className='border-b-[3px] w-[64px] h-[3px] border-[#aa9585]'></div>
                </div>
                
                <div className='flex flex-row text-[#ffc529] text-2xl'>
                    <VscStarFull/>
                    <VscStarFull/>
                    <VscStarFull/>
                    <VscStarFull/>
                    <VscStarFull/>
                </div>
                <span className='text-lg text-[#5F6575]'>Over <span className='underline text-[#aa9585]'>13.5K</span> happy users all over the world 🥰</span>
              </div> 
          </div>
          <div className='h-[64px] w-[180px] bg-[#aa9585] rounded-tr-2xl rounded-bl-2xl flex justify-center items-center custom-shadow cursor-pointer'>
            <span className='font-semibold text-white'>Order now</span>
          </div>
        </div>
        <div className='w-[55%] pt-[60px]'>
          <HomeSlick/>
        </div>
      </div>

      <div className='h-[790px] bg-[#F8FAFC] pt-32'>
        <div className='max-w-[1244px]  mx-auto overflow-hidden'>
          <div className='flex flex-col w-[55%]'>
            <span className='text-[56px] font-bold text-primary'>Specical menu for you</span>
            <span className='text-lg text-[#5F6575]'>Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It May Also Reduce The Risk Of Several Health Issues.</span>
          </div>
          <div className='mt-8 flex flex-row justify-center '>
            <div className=' w-[1350px]'>
              <ProductSlick/>
            </div>
            
          </div>
        </div>
      </div>

      <div className='h-[510px] relative'>
        <img src={banner_new} alt="banner new" className='w-full h-full object-cover'/>
        <div className='absolute top-0 left-0 right-0 bottom-0'>
          <div className='max-w-[1244px] mx-auto flex flex-row items-center justify-end h-full'>
            <span className=' text-white font-bold text-[56px] uppercase'>more than just <br /> a coffee shop</span>
          </div>
          
        </div>
        
      </div>

      <div className='max-w-[1244px] mx-auto flex flex-col items-center h-[952px] mt-32'>
        <div className='flex flex-col items-center gap-4 w-1/2 justify-center'>
          <span className='text-primary font-semibold text-[56px]'>Happy Customer</span>
          <span className='text-[#5f6575] text-lg text-center'>So perhaps peopel who are genetically geared to reach to that extra cup of coffee could be boosting their health, as well as their productivity.</span>
        </div>
        <div className='w-full mt-20'>
          <CustomerSlick/>
        </div>
      </div>

  </div>
        
  )
}
