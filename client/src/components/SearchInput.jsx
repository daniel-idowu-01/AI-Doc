import React from 'react'
import { CurvedArrow } from '../assets/images'

const SearchInput = () => {
  return (
    <article
      className='fixed bottom-10 w-1/2 flex justify-between items-center bg-[#E1F2FF] p-6 rounded-[32px]'
    > 

      <input
        type="text"
        placeholder='Send your message to AI Doc...'
        className='w-[90%] outline-none bg-transparent'
      />

      <div className='absolute bg-[#93ED93] rounded-[100%] w-10 h-10 p-2 right-5'>
        <img src={CurvedArrow} alt="" className='' />
      </div>

    </article>
  )
}

export default SearchInput
