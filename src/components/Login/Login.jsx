import './style.css'
import { useEffect, useState } from 'react';
import {FormControlLabel, FormGroup, Checkbox} from '@mui/material'
import PassInputMui from '../PassInputMui';
import { useLoginUserMutation } from '../../server/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const [isErrorState, setIsErrorState] = useState(false)

  const [loginUser, {data, isError, error, isLoading}] = useLoginUserMutation();

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin:true,
          token: data.access_token
        })
      )

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: emailValue,
        })
      )
      navigate('/')
      setEmailValue('')
      setPasswordValue('')
      setErrorMsg('')
    }

    if (isError) {
      setErrorMsg(error?.data?.message)
    }

    setIsErrorState(isError)

  }, [data, isError])

  const handleEmail = (e) =>{
    setEmailValue(e.target.value)
    setIsErrorState(false)
  }

  const login = async (e) =>{
    e.preventDefault();
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
            className={isErrorState ? 'form-control error' : 'form-control'}
            onChange={(e) => handleEmail(e)}
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
          <a href="#" className={isLoading ? 'loading' : ''} type={"submit"} role={"button"} onClick={(e) => login(e)}>
            {isLoading ? 'Loading...' : 'Login'}
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login