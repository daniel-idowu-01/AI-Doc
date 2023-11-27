import React from 'react'
import { TopContent, SearchInput, AIChat, UserChat } from '../components'

const Chat = () => {
  return (
    <section className='relative md:left-[5%] w-full md:w-[95%] bg-background px-5 md:px-10 py-5 pb-40'>
      <TopContent />

      <article className='mt-10'>
        <section>
          <div className='flex justify-between'>
            <div></div>
            <UserChat />
          </div>
          
          <div className='flex justify-between'>
            <AIChat />
            <div></div>
          </div>

        </section>

        <article className='w-1/2 mx-auto'>
          <SearchInput />
        </article>
      </article>
      
    </section>
  )
}

export default Chat
