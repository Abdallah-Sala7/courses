import './style.js'
import { useState } from 'react';

import {FormControl, OutlinedInput , IconButton, InputAdornment} from '@mui/material'

import {Visibility, VisibilityOff} from '@mui/icons-material';
import { passwoedStyles } from './style.js';

const PassInputMui = ({action="password"}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
    e.preventDefult();
  }
  
  return (<>
    <FormControl sx={passwoedStyles} variant="outlined">
      <OutlinedInput
        sx={{borderRadius:'7px'}}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        placeholder={action}
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
  </>)
}

export default PassInputMui