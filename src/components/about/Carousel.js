import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/images/carousel/slide1.jpg';
import slide2 from '../../assets/images/carousel/slide2.jpg';
import { Panel } from 'react-bootstrap';

class Carousel extends React.Component {
  render(){
    let settings = {
      infinite: true,
      autoplay: true,
      variableWidth: true,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true
    };

  return(
      <div className='frame'>
        <style>{`
            .frame{
               width: 20%;
            }
        `}
        </style>
        <div >
      <Panel style={PanelStyles}>
      <Slider {...settings}>
        <div>
          <img style={ImageStyles} src={slide1}/>
        </div>
        <div>
          <img style={ImageStyles} src={slide2}/>
        </div>

      </Slider>
    </Panel>
    </div>
    </div>
  );

}
}

var ImageStyles = {
  height: '200px',
  width: '200px',
  margin: 'auto'
};

var PanelStyles = {
  padding: '30px',
  backgroundColor: '#272626',
  borderRadius: '8px',

};


export default Carousel;
