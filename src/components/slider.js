import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// =======Banner-img==========
import BannerIMG1 from "../images/banner-img-1.jpg";
import BannerIMG2 from "../images/banner-img-2.jpg";
import BannerIMG3 from "../images/banner-img-3.jpg";

export default class SimpleSlider extends Component  {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div>
        <img src={BannerIMG1} alt="Logo"/>
        </div>
        <div>
        <img src={BannerIMG2} alt="Logo"/>
        </div>
        <div>
        <img src={BannerIMG3} alt="Logo"/>
        </div>
        <div>
        <img src={BannerIMG1} alt="Logo"/>
        </div>
        <div>
        <img src={BannerIMG2} alt="Logo"/>
        </div>
        <div>
        <img src={BannerIMG3} alt="Logo"/>
        </div>
        </Slider>
      </div>
    );
  }
}

 