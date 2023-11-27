import React, {useContext} from 'react'
import { Search } from '../assets/images'
import NavContext from '../context/NavContext.jsx'

const TopContent = () => {

  const {setSideBar, sideBar} = useContext(NavContext)

  const header_link_style = 'bg-secondary rounded-full px-3 py-1 text-[12px] text-white'

  return (
      <article className='flex items-center justify-between'>
        <div>
          <span
            onClick={() => setSideBar(!sideBar)}
            className="sm:hidden material-symbols-outlined hover:cursor-pointer">
              menu
          </span>
        </div>

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
