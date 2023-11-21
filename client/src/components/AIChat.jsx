import React from 'react'
import { LogoWhite } from '../assets/images'

const AIChat = () => {
  return (
      <article className='flex items-start gap-2 p-4 w-1/2 bg-white rounded-2xl rounded-bl-none'>
        <img src={LogoWhite} alt="" className='bg-[#3978D4] p-2 rounded-[100%]' />
        <div>
          <p className='text-[#E1B023]'>AI Doc</p>
          <p>
            Hello there! I'm here to help. I noticed you selected "Fever." I'm sorry to hear you're not feeling well. To provide you with the most accurate guidance, could you please provide more details about your symptoms? For example, have you measured your temperature recently? Do you experience any other accompanying symptoms such as chills, body aches, or headaches? Your input will help me better understand your situation.
          </p>
        </div>
      </article>
  )
}

export default AIChat
