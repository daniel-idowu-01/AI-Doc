import React, { useContext } from 'react'
import { Logo, Dashboard, Chat, Gear, Bookmark, User, Document, Logout } from '../assets/images'
import NavContext from '../context/NavContext.jsx'

const SideBar = () => {

  const { setSideBar, sideBar } = useContext(NavContext)
  const sideBarLinks = 'w-10 h-10 hover:bg-secondary hover:cursor-pointer p-2 rounded-full transition-all'

  // image link from figma
  const image_source_link = "https://s3-alpha-sig.figma.com/img/32d1/6d72/9d54a41981aa5976fb76dc8f25b80ef2?Expires=1701648000&Signature=S3HWY-ixZkteKOx3xoN06ECD~3SCss~LlvGnVYMGp18jy5zkrqeHGJZr4o~n-6fdOJqJ5dQcF9pSICfNu3RMzM0yviHGIKUNt2dK7ErZqNvnPdQYK1e02U4McttKW7SYbaRuFhqG0S6BiK8Fd83bxzSueEO9s97a9to7EmmmtH5ad4sV~qWTZuSZxBcU1NFSEryKhdnfrSe98~pGvKWr74nUsCbOPQ0QRMlB3FBdbad8oIG917Ui68O5MyZRPZ--MSdpLqC4HwYtZ3AqYGHLSKNVUmHMZOpqagIA59m6Fxom7y4KD~VHYfWwOALZ5d66TJ6SO0L7lY1gC3UoFxxs7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"


  return (
    <section className={`${sideBar ? 'left-0' : '-left-1/2'} fixed flex justify-center w-[20%] sm:left-0 sm:w-[5%] h-screen bg-primary pt-3 pb-5 z-10 transition-all`}>
      <article className='flex flex-col justify-between'>
        <span
          onClick={() => setSideBar(!sideBar)}
          className="sm:hidden material-symbols-outlined text-white text-center border rounded-[100%] p-2 hover:cursor-pointer"
        >
          close
        </span>
        
        <div>
          <img src={Logo} alt='' className='w-10 h-10 bg-white p-2 rounded-full' />
        </div>

        <div className='flex flex-col gap-5 mx-auto'>
          <div className='relative'>
            <span
              className='absolute bg-black text-white -top-1/4 right-0 p-1 px-2 rounded-[100%] text-[10px]'>
              16
            </span>
            <img src={Dashboard} alt='' className='w-10 h-10 hover:bg-secondary hover:cursor-pointer p-2 rounded-full transition-all' />
          </div>
          <img src={Chat} alt="" className={sideBarLinks} />
          <img src={Gear} alt="" className={sideBarLinks} />
          <img src={Bookmark} alt="" className={sideBarLinks} />
          <img src={User} alt="" className={sideBarLinks} />
          <img src={Document} alt="" className={sideBarLinks} />
          <img src={Logout} alt="" className={sideBarLinks} />
        </div>

        <div>
          <img
            src={image_source_link}
            alt=""
            className='w-10 rounded-full object-cover'
          />
        </div>  
      </article>
    </section>
  )
}

export default SideBar
