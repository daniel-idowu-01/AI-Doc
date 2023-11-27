import React, { useContext } from 'react'
import { LogoWhite } from '../assets/images'
import NavContext from '../context/NavContext.jsx'

const AIChat = () => {

  const { botResponse, setBotResponse } = useContext(NavContext)

  return (
      <article className='mt-5 md:mt-0 flex items-start gap-2 p-4 md:w-1/2 bg-white rounded-2xl rounded-bl-none'>
        <img src={LogoWhite} alt="" className='hidden md:block bg-[#3978D4] p-2 rounded-[100%]' />
        <div>
          <p className='text-[#E1B023]'>AI Doc</p>
          <p>
            {botResponse}
          </p>
        </div>
      </article>
  )
}

export default AIChat
