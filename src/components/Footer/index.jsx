import { Link } from 'react-router-dom'

import { facebookLogo, instagramLogo, logoWhite, twitterLog } from '../../assets/images'

import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to={'/'} className='footer-logo'>
            <img 
              src={logoWhite} 
              alt="logo" 
              loading='lazy'
            />
          </Link>

          <div className="footer-social">
            <a href="https://www.facebook.com/" aria-label="facebook" target={'_blank'} title=''>
              <img 
                src={facebookLogo}
                alt=""
                loading='lazy' 
              />
            </a>
                      
            <a href="https://www.instagram.com/" aria-label='instagram' target={'_blank'} title=''>
              <img
                src={instagramLogo}
                alt=""
                loading='lazy'
              />
            </a>
                      
            <a href="https://www.twitter.com/" aria-label='twitter' target={'_blank'} title=''>
              <img
                src={twitterLog}
                alt=""
                loading='lazy'
              />
            </a>
           </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-box">
            <h1 className='footer-box-title'>
              About
            </h1>

            <ul className='footer-links-list'>
              <li className='footer-link-item'>
                <Link to={'/'}>Home</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>About</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>Contact</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>Terms</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>Privacy</Link>
              </li>
            </ul>            
          </div>

          <div className="footer-links-box">
            <h1 className='footer-box-title'>
              categories
            </h1>

            <ul className='footer-links-list'>
              <li className='footer-link-item'>
                <Link to={'/'}>dessign</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>devlopment</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>marketing</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>it & software</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>sales marketing</Link>
              </li>
            </ul>            
          </div>

          <div className="footer-links-box">
            <h1 className='footer-box-title'>
              support
            </h1>

            <ul className='footer-links-list'>
              <li className='footer-link-item'>
                <Link to={'/'}>profile</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>contact</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>help center</Link>
              </li>
              <li className='footer-link-item'>
                <Link to={'/'}>privacy policy</Link>
              </li>
            </ul>            
          </div>

          <div className="footer-search-box">
            <h1 className='footer-box-title'>
              subscribe
            </h1>

            <p className='footer-search-text'>
              Subscribe to our newsletter and get our latest news and offers.
            </p>

            <form className='footer-search-form'>
              <div className="form-group">
                <input
                  type="email"
                  placeholder='your email....'
                />

                <button type='submit'>
                  Subscribe
                </button>                
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className='footer-bottom-text'>
            © 2023 All rights reserved. Designed by <a href="https://www.facebook.com/" target={'_blank'}>Abdallah Salah</a>
          </p>

          <div className="footer-bottom-links">
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Contact</Link>
            <Link to={'/'}>Terms</Link>
            <Link to={'/'}>Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer