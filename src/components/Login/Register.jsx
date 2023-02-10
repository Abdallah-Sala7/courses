import './style.css'

import { useState } from 'react';

import { FormControl, OutlinedInput , IconButton, InputAdornment} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
    e.preventDefult();
  }
  
  return (
    <div className="auth-form">
      <h1 className="auth-title">
        login
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
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) => handleClickShowPassword(e)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div className="form-group">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="confirm password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) => handleClickShowPassword(e)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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