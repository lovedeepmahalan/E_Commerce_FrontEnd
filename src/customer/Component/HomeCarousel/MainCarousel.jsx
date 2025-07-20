import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';
import "../../../../src/index.css"




const MainCarousel = () => {
const items=MainCarouselData.map((item)=><img
    className="cursor-pointer bg-red-500 border"
    style={{
        width:'100vw',
        height:"80vh"
    }}
    role="presentation"
    src={item.image}
    alt=""
  />)

   return <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay   
        autoPlayInterval={1000}
        infinite
    />
};
export default MainCarousel