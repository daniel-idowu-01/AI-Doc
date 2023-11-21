import React from 'react'
import { TopContent, SearchInput, AIChat, UserChat } from '../components'

const Chat = () => {
  return (
    <section className='w-[90%] sm:w-[95%] bg-background px-10 py-5'>
      <TopContent />

      <article className='mt-10'>
        <section>
          <div className='flex justify-between'>
            <AIChat />
            <div></div>
          </div>

          <div className='flex justify-between'>
            <div></div>
            <UserChat />
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
