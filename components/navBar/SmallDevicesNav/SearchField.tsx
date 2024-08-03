import React from 'react'
// icons
import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
    <div className='relative'>
    <CiSearch className="w-6 h-6 absolute top-1/2 left-4 -translate-y-1/2"/>
    <input className="w-full h-12 py-4 border ps-12 border-sub-text outline-none rounded-md" type="text" placeholder="Search..."/>
    </div>
  )
}

export default SearchField