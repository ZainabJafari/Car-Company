"use client"
import React from 'react'
import {SearchManuFacturer} from './'
import {useState} from 'react'

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const handleSearch = () => {
    }

  return (
    <form className='serachbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManuFacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
         </form>
  )
}

export default SearchBar
