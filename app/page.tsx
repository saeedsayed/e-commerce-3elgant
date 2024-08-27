import React from 'react'
import HeroSection from '@/components/homePageComponents/heroSection/HeroSection'
import NewArrivals from '@/components/homePageComponents/newArrivals/NewArrivals'
import OurFeatures from '@/components/homePageComponents/ourFeatures/OurFeatures'
import Banner from '@/components/homePageComponents/banner/Banner'
import Articles from '@/components/homePageComponents/articles/Articles'
import Categories from '@/components/homePageComponents/categories/Categories'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Categories/>
      <NewArrivals/>
      <OurFeatures/>
      <Banner/>
      <Articles/>
    </div>
  )
}

export default Home