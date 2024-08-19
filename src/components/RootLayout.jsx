import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const RootLayout = () => {
  return (
    <div className='' >
        <div className="circle"></div>
        <Nav/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
