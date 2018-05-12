import React from 'react';
import ReactDOM from "react-dom";
import Slider from 'react-slick';
import slide1 from '../../assets/images/carousel/slide1.jpeg';
import slide2 from '../../assets/images/carousel/slide2.jpeg';
import slide3 from '../../assets/images/carousel/slide3.jpeg';
import slide4 from '../../assets/images/carousel/slide4.jpeg';

const Carousel = () => {
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    fade: true,
    dots: false
  };

  return(
    <div id='frame'>
      <style>{`
        #frame{
          width: 500px;
          height: 500px;
          background-color: white;
          overflow: hidden;
          padding: 20px;
        }
        #frame img{
          width: 500px;
          height: auto;
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
