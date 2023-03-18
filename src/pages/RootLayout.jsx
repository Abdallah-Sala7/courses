import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Aos from 'aos';

import {Footer, Navbar, ScrollToTop} from '../components'

const RootLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout