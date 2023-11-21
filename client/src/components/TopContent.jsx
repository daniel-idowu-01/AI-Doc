import React from 'react'
import { Search } from '../assets/images'

const TopContent = () => {

  const header_link_style = 'bg-secondary rounded-full px-3 py-1 text-[12px] text-white'

  return (
      <article className='flex justify-between'>
        <div></div>

        <div className='flex items-center gap-2'>
          <p className={header_link_style}>GPT-5 MODEL</p>
          <p className={header_link_style}>10K LLM DATA</p>
        </div>

        <div>
          <img src={Search} alt="" className='w-10 h-10 bg-white p-2 rounded-full' />
        </div>
      </article>
  )
}

export default TopContent
