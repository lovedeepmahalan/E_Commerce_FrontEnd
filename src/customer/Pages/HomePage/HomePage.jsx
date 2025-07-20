import React from 'react'
import MainCarousel from '../../Component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Component/HomeSectioncarousel/HomeSectionCarousel'
import Mens_Kurta from "../../Data/Mens_Kurta"

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-10 lg:px-10'>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Kurta"/>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Shoes"/>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Dress"/>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Watch"/>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Shocks"/>
        <HomeSectionCarousel data={Mens_Kurta} Section="Mens_Pent"/>
        
      </div>
    </div>
  )
}

export default HomePage
