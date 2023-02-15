import { useEffect, useState } from 'react';

import './style.css'
import {FormControlLabel, FormGroup, Checkbox} from '@mui/material'
import PassInputMui from '../PassInputMui';
import { useLoginUserMutation } from '../../server/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  
  const navigate = useNavigate()

  const [loginUser, {data, isError, error}] = useLoginUserMutation();

  useEffect(() => {

    if (data?.access_token) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin:true,
          token: data.access_token
        })
      )
      navigate('/')
      setEmailValue('')
      setPasswordValue('')
      setErrorMsg('')
    }

    if (isError) {
      setErrorMsg(error.data.message)
    }

  }, [data, isError])

  const login = async (e) =>{
    e.preventDefault()
    await loginUser({email: emailValue, password: passwordValue})
  }
  
  const getPass = (pass) => {
    setPasswordValue(pass)
  }

  return (
    <div className="auth-form">
      <h1 className="auth-title">
        login
      </h1>

      <span className="error-msg">
        {errorMsg}
      </span>

      <form action=''>
        <div className="form-group">
          <input 
            type="text"  
            placeholder='email or username'
            className='form-control'
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <PassInputMui passValue={getPass} />
        </div>

        <div className="form-group">
          <FormGroup sx={{color:'var(--dark-gray)'}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          </FormGroup>
        </div>

        <div className="form-group">
          <a href="#" onClick={(e) => login(e)}>
            login
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login