import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner_1 from './Assets/images/banner1.png';
import arrow_right from './Assets/images/arrow-right.png'
import arrow_left from './Assets/images/arrow-left.png'

const CustomNextArrow = (props) => {
    
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1, right: '30px', width: '80px', height: '80px'}}
      onClick={onClick}
    >
        <div className="bg-gray-900 rounded-full w-[80px] h-[80px] flex justify-center items-center">
            <img src={arrow_right} alt="icon" className='h-[18px] w-[26px]'/>
        </div>
    </div>
  );
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1, left: '30px', width: '80px', height: '80px'}}
      onClick={onClick}
    >
        <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center border ">
            <img src={arrow_left} alt="icon" className='h-[18px] w-[26px]'/>
        </div>
    </div>
  );
}

const CustomDots = ({ onClick, active }) => (
    <button
    style={{
      background: 'tranperance',
      width:  '20px',
      height: '20px',
      borderRadius: '20px',
      margin: '0 10px',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {active ? (
      <div className='w-[20px] h-[20px] rounded-full border border-[#291E24] flex flex-row items-center justify-center'>
        <div className='w-[10px] h-[10px] rounded-full bg-[#291E24]'>

        </div>
      </div>
    ) : (
      <div className='w-[14px] h-[14px] rounded-full bg-white mt-2'>
      </div>
    )}
  </button>
  );

export default function HomeSlick() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            nextArrow: false,
            prevArrow: false,
          }
        }
      ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'slick-dots2',
    customPaging: function(i) {
      return (
        <CustomDots 
          key={i}
          onClick={() => {}}
          active={i === currentSlide}
        />
      );
    },
    afterChange: (index) => {
        setCurrentSlide(index);
      },
  
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner_1} alt="banner 1" className='mx-auto w-[408px] h-[550px]'/>
      </div>
      <div>
        <img src={banner_1} alt="banner 2" className='mx-auto w-[408px] h-[550px]'/>
      </div>
      <div>
        <img src={banner_1} alt="banner 3" className='mx-auto w-[408px] h-[550px]'/>
      </div>
      <div>
        <img src={banner_1} alt="banner 3" className='mx-auto w-[408px] h-[550px]'/>
      </div>
    </Slider>
  );
};

