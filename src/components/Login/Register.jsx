import './style.css'

import PassInputMui from '../PassInputMui';

const Register = () => {  
  return (
    <div className="auth-form">
      <h1 className="auth-title">
        register
      </h1>

      <form action=''>
        <div className="form-group">
          <input 
            type="text"  
            placeholder='email'
            className='form-control'
          />
        </div>

        <div className="form-group">
          <input 
            type="text"  
            placeholder='username'
            className='form-control'
          />
        </div>

        <div className="form-group">
          <PassInputMui action={'password'}/>
        </div>

        <div className="form-group">
          <PassInputMui action={'confirm password'}/>
        </div>

        <div className="form-group">
          <a href="#">
            register
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register