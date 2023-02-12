import { useState } from 'react'
import Login from '../../components/Login/login';
import Register from '../../components/Login/Register';
import './style.css'

const AuthPage = () => {
  const [authContint, setAuthContint] = useState('login');
  
  const handleAuthContint = (e, val) => {
    setAuthContint(val);
    e.preventDefault();
  }

  return (
    <section className='auth'>
      <div className="container">
        <div className="auth-btns">
          <a href="#" onClick={(e) => handleAuthContint(e, 'login')} className={`login-btn ${authContint == 'login' && 'active'}`}>
            login
          </a>

          <a href="#" onClick={(e) => handleAuthContint(e, 'register')} className={`login-btn ${authContint == 'register' && 'active'}`}>
            register
          </a>
        </div>

        <div className="auth-layout">
          {
            authContint === 'register' ? <Register /> : <Login />
          }
        </div>
      </div>
    </section>
  )
}

export default AuthPage