import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HomePageCarousel from './HomePageCarousel'
import SearchEvent from './SearchEvent'
import DatePickerForSearch from "./DatePickerForSearch"
export default function HomePage() {
  return (
    <>
   <HomePageCarousel/>
   <SearchEvent/>
   <DatePickerForSearch/>
   </>
  )
}
