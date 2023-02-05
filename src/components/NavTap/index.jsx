import {useState } from 'react';

import './style.css'


const NavTap = () => {  
  const [navTap, setNavTap] = useState('all')

  const handelNavTap = (e, tap) => {
    setNavTap(tap);
    e.preventDefault();
  }

  return (
    <div className="popular-nav" data-aos="fade-up">
      <a href="#" onClick={(e)=> handelNavTap(e, 'all')} className={`popular-tap ${navTap === 'all' && 'active'}`}>
        all
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'software')} className={`popular-tap ${navTap === 'software' && 'active'}`} >
        it & software
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'graphic')} className={`popular-tap ${navTap === 'graphic' && 'active'}`} >
        design
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'marketing')} className={`popular-tap ${navTap === 'marketing' && 'active'}`} >
        development
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'web')} className={`popular-tap ${navTap === 'web' && 'active'}`} >
        marketing
      </a>
    </div>
  )
}

export default NavTap