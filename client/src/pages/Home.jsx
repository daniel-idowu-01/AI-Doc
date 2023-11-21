import React from 'react'
import { TopContent, SearchInput } from '../components'
import { Arrow } from '../assets/images'

const Home = () => {
  
  // image link from figma
  const conversation_image_link = 'https://s3-alpha-sig.figma.com/img/aa8b/b716/b2890122870cef41bbc8a7f016329125?Expires=1701648000&Signature=FoDjGVUt8EpfLbdnmznN3Sh6w~HzN60UZPy46ElAxQWslWvbXbzy3CIPkBdjkpPCORJPi1z15PbzYMD~XqKxZ~2csIAYWXHVOXLDl3oV4kNBGlmpzINydiAxovb1U4CpAWsayx6pgdOznqSdEfwQniVzns5DKgiIFSxX0GL2U0Ar3XvARe9-~MGbio0~HyiV6pFaDzqviubks8lNWzfawg5JbCPSfuPGVY5d9Pkacem9Z~5GhNMB0R5rKgeRSmoW6Wdl1zLNpO3tXPV4qoBA2LLFv10kmDVCrtcJSCCjYu3ncMPLVOaDiQ9XKpOfIFDMRbqhjsH8YnyNnK1nMJUV4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'


  return (
    <section className='w-[90%] sm:w-[95%] bg-background px-10 py-5'>
      <TopContent />

      {/* body content */}
      <article className='flex justify-center relative top-32'>
        <div className='flex flex-col gap-20'>
          <p className='text-[#4B3425] font-bold text-5xl text-center'>AI Doc</p>

          <aside className='flex justify-center gap-8'>
            {/* content for the describe symptoms box */}
            <article className='bg-[#60B7FF] rounded-3xl p-4'>
              <div className='flex justify-between w-52'>
                <div className='w-10 h-10 bg-white rounded-[100%] p-2'>
                  <img src={conversation_image_link} alt="" />
                </div>
                <img src={Arrow} alt="" className='' />
              </div>

              <p className='text-white mt-2'>Describe Symptoms</p>
            </article>

            {/* content for emergency assistance box */}
            <article className='bg-[#4B3425] rounded-3xl p-4'>
              <div className='flex justify-between w-52'>
                <img src={Arrow} alt="" className='mx-auto rotate-90' />
              </div>

              <p className='text-white mt-2 text-center'>Emergency Assistance</p>
            </article>
            
            <SearchInput />
          </aside>


        </div>
      </article>

    </section>
  )
}

export default Home
