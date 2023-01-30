import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import logo from '../../assets/images/logo/logo-white.svg'
import serch from '../../assets/images/icons/search.png'
import bag from '../../assets/images/icons/shopping-bag.png'
import menu from '../../assets/images/icons/menu.png'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handelMenu = (e) => {
    setMenuOpen(!menuOpen)
    e.preventDefault();
  }
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className="nav-layout">
          <Link to={"/"} className="brand-name">
            <img 
              src={logo}
              alt="logo"
              loading='lazy'
            /> 
          </Link>

          <ul className={`nav-links ${menuOpen && 'oppenned'}`}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div className='nav-detils'>
            <a href="#">
              <img 
                src={serch}
                alt="serch"
                loading='lazy'
              /> 
            </a>

            <Link to="/" className='bag'>
              <img 
                src={bag}
                alt="serch"
                loading='lazy'
              />
              <span className='count'>1</span>
            </Link>

            <Link to={'/'} className="login">
              log in
            </Link>
          </div>

          <a href="#" onClick={(e)=>handelMenu(e)} className="mobile-menu">
            <img 
              src={menu} 
              alt="" 
              loading='lazy'
            />
          </a>
        </div>
      </div>
      <div onClick={handelMenu} className={`overlay ${menuOpen && 'oppenned'}`}></div>   
    </nav>

  )
}

export default Navbar