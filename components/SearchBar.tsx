"use client"

import { useState } from "react"
import Searchmanufucturer from "./Searchmanufucturer"



const SearchBar = () => {
const [manufacturer,setManufacturer]=useState("")


    const handleSearch=()=>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
<div className="searchbar__item">
    <Searchmanufucturer manufacturer={manufacturer} setManufacturer={setManufacturer}  />
</div>
    </form>
  )
}

export default SearchBar