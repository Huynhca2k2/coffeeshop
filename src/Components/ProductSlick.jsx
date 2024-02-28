
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow_right from './Assets/images/arrow-right.png'
import arrow_left from './Assets/images/arrow-left.png'
import Product from './Product';
import { coffees } from '../lib/ContextApi';

const CustomNextArrow = (props) => {
    
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1, top: '-70px', right: '68px', width: '80px', height: '80px'}}
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
      style={{ ...style, zIndex: 1, top: '-70px', left: '80%', width: '80px', height: '80px'}}
      onClick={onClick}
    >
        <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center border">
            <img src={arrow_left} alt="icon" className='h-[18px] w-[26px]'/>
        </div>
    </div>
  );
}

export default function ProductSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
        {
            coffees?.map((item, index) => (
                <div>
                    <Product item={item} key={index}/>
                </div>
            ))
        }
    </Slider>
  );
};

