import './style.css'
import PassInputMui from '../PassInputMui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../server/authApi';

const Register = () => { 
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  
  const navigate = useNavigate()
  const [registerUser, {data, isError, error, isLoading}] = useRegisterUserMutation() ; 

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

  const register = async (e) =>{
    e.preventDefault()
    await registerUser({email: emailValue, password: passwordValue})
  }

  const getPass = (pass) => {
    setPasswordValue(pass)
  }

  return (
    <div className="auth-form">
      <h1 className="auth-title">
        register
      </h1>

      <span className="error-msg">
        {errorMsg}
      </span>

      <form action='' onSubmit={register}>
        <div className="form-group">
          <input 
            type="text"  
            placeholder='email'
            className={isError ? 'form-control error' : 'form-control'}
            onChange={(e) => setEmailValue(e.target.value)}
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
          <PassInputMui action={'password'} id={'create-pass'}  passValue={getPass}/>
        </div>

        <div className="form-group">
          <a href="#" className={isLoading ? 'loading' : ''} type={"submit"} role={"button"} onClick={(e) => register(e)}>
            {isLoading ? 'Loading...' : 'Register'}
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register