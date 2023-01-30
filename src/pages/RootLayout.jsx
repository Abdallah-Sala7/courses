import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Root Layout</h1>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export default RootLayout