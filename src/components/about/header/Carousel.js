import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../../assets/images/carousel/slide1.jpg';
import slide2 from '../../../assets/images/carousel/slide2.jpg';
import slide3 from '../../../assets/images/carousel/slide3.jpg';
import slide4 from '../../../assets/images/carousel/slide4.jpg';

const Carousel = () => {
  let settings = {
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false
  };

  return(
    <div id='frame'>
      <style>{`
        .slick-track{
          height: max-content;
        }
        #frame{
          width: 100%;
          height: max-content;
          overflow: hidden;
        }
        #frame img{
          width: 100%;
          display: block;
        }
      `}
      </style>
      <Slider {...settings}>
        <div>
          <img src={slide3}/>
        </div>
        <div>
          <img src={slide2}/>
        </div>
        <div>
          <img src={slide1}/>
        </div>
        <div>
          <img src={slide4}/>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
