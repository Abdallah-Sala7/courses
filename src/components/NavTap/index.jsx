import {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryValue } from '../../store/reducers/appSlice';

import './style.css'


const NavTap = () => {  
  const navTap = useSelector((state) => state.app.category)

  const dispatch = useDispatch()
  

  const handelNavTap = (e, tap) => {
    dispatch(setCategoryValue(tap))
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

      <a href="#" onClick={(e)=> handelNavTap(e, 'design')} className={`popular-tap ${navTap === 'design' && 'active'}`} >
        design
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'development')} className={`popular-tap ${navTap === 'development' && 'active'}`} >
        development
      </a>

      <a href="#" onClick={(e)=> handelNavTap(e, 'business')} className={`popular-tap ${navTap === 'business' && 'active'}`} >
        business
      </a>
    </div>
  )
}

export default NavTap