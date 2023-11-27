import React, { useContext } from 'react'
import { LogoWhite } from '../assets/images'
import NavContext from '../context/NavContext.jsx'

const UserChat = () => {

  const { query, setQuery } = useContext(NavContext)

  return (
    <article
      className='mt-5 sm:mt-0 flex items-start gap-2 p-4 sm:w-1/2 bg-[#60B7FF] text-white rounded-2xl rounded-br-none'
    >
      <div>
        <p className='text-[#93ED93] inline'>You: </p>
        <span>
          {query.query}.
        </span>
      </div>
      <img src={LogoWhite} alt="" className='hidden sm:block bg-[#3978D4] p-2 rounded-[100%]' />
    </article>
  )
}

export default UserChat
