import './style.css'

import {FormControlLabel, FormGroup, Checkbox} from '@mui/material'

import PassInputMui from '../PassInputMui';

const Login = () => {  
  return (
    <div className="auth-form">
      <h1 className="auth-title">
        login
      </h1>

      <form action=''>
        <div className="form-group">
          <input 
            type="text"  
            placeholder='email or username'
            className='form-control'
          />
        </div>

        <div className="form-group">
          <PassInputMui />
        </div>

        <div className="form-group">
          <FormGroup sx={{color:'var(--dark-gray)'}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          </FormGroup>
        </div>

        <div className="form-group">
          <a href="#">
            login
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login