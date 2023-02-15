import './style.js'
import { useState } from 'react';

import {FormControl, OutlinedInput , IconButton, InputAdornment} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';

import { passwoedStyles } from './style.js';

const PassInputMui = ({action="password", passValue, id}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  }
  
  return (
    <FormControl sx={passwoedStyles} variant="outlined">
      <OutlinedInput
        sx={{borderRadius:'7px'}}
        id={id}
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => passValue(e.target.value)}
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
  )
}

export default PassInputMui