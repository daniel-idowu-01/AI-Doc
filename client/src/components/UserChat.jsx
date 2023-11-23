import React from 'react'
import { LogoWhite } from '../assets/images'

const UserChat = () => {
  return (
    <article
      className='mt-5 sm:mt-0 flex items-start gap-2 p-4 sm:w-1/2 bg-[#60B7FF] text-white rounded-2xl rounded-br-none'
    >
      <div>
        <p className='text-[#93ED93] inline'>You: </p>
        <span>
          I started feeling feverish yesterday evening, and my temperature is around 101°F (38.3°C).
        </span>
      </div>
      <img src={LogoWhite} alt="" className='hidden sm:block bg-[#3978D4] p-2 rounded-[100%]' />
    </article>
  )
}

export default UserChat
