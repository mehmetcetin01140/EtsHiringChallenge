import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HomePageCarousel from '../components/HomePageCarousel'
import SearchWidget from '../components/SearchWidget'
import DatePicker from "../components/DatePicker"

export default function HomePage() {

    const [searchInput, setSearchInput] = useState("");

  return (
    <>
    <HomePageCarousel/>
    <SearchWidget searchInput={searchInput} setSearchInput={setSearchInput}/>
    <DatePicker searchInput={searchInput}/>
   </>
  )
}
