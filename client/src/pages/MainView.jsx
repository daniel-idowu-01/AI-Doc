import React from 'react'
import { SideBar } from '../components'
import { Outlet } from 'react-router-dom'

const MainView = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default MainView
