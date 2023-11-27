import React from 'react'
import { TopContent, SearchInput, AIChat, UserChat } from '../components'

const Chat = () => {
  return (
    <section className='relative sm:left-[5%] w-full sm:w-[95%] bg-background px-5 sm:px-10 py-5'>
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
