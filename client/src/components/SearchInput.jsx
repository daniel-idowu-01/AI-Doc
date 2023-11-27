import React, { useState } from 'react'
import { CurvedArrow } from '../assets/images'

const SearchInput = () => {

  const [query, setQuery] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const token = JSON.parse(localStorage.getItem('accessToken'))

  // to update user inputs
  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await fetch('https://ai-doc-7h0i.onrender.com/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(query)
      });

      const data = await response.json();
      console.log(data)
      if(data.success === false ) {
        setIsLoading(false);
        setError(data.message);
      }
        setIsLoading(false);
        /* localStorage.setItem('chat', JSON.stringify(data.accessToken)) */
        /* if (data.accessToken) {
            navigate('/home')
        } */
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error)
    } 
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='fixed bottom-0 sm:bottom-10 left-0 sm:left-auto w-full sm:w-1/2 flex justify-between items-center bg-[#E1F2FF] p-6 sm:rounded-[32px] sm:mx-0'
    > 

      <input
        type="text"
        onChange={handleChange}
        placeholder='Send your message to AI Doc...'
        className='w-[90%] outline-none bg-transparent'
        name='query'
      />

      <button
        className='absolute bg-[#93ED93] rounded-[100%] w-10 h-10 p-2 right-5 opacity-80 hover:opacity-100'
      >
        <img src={CurvedArrow} alt="" className='' type='submit' />
      </button>

    </form>
  )
}

export default SearchInput
