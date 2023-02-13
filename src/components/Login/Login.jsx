import './style.css'

import { useState } from 'react';

import { FormControl, OutlinedInput , IconButton, InputAdornment, FormControlLabel, FormGroup, Checkbox} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
    e.preventDefult();
  }

  const passwoedStyles = {
    width: '100%',
    fontSize: '1rem',
    fontWeight: 300,
    height:'55px',
    '& input':{
      padding: '16px 0 16px 14px'
    },
    '& fieldset':{
      border:'1px solid #EDEDED'
    },
    '&:hover fieldset':{
      borderColor:'#EDEDED !important'
    },
    '& .Mui-focused fieldset':{
      border:'1px solid var(--third-color) !important'
    }
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
            placeholder='email or username'
            className='form-control'
          />
        </div>

        <div className="form-group">
          <FormControl sx={passwoedStyles} variant="outlined">
            <OutlinedInput
              sx={{borderRadius:'7px'}}
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
          <FormGroup>
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