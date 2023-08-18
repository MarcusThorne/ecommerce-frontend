import React, { useState } from 'react'
import { getUser } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'


function Register() {
  const navigate = useNavigate();

    // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }

    const userData = await getUser(endpoint, email, password);

    if (userData.detail) {
      setError(userData.detail)
      return
    }

    setCookie('Email', userData.data.email)
    setCookie('AuthToken', userData.token)
    setCookie('ID', userData.data.id)
    navigate(`/users/${userData.data.id}`)
    return
  }

  return (
    <div className='bg-dark d-flex align-items-center' style={{height: '100vh'}}>
      <div className="container-sm bg-light p-5 mt-5 rounded shadow" style={{maxWidth: '30rem', height: '75vh'}}>
        <h1 className='mb-5'>{isLogin ? "Sing In" : "Sign Up"}</h1>
        <form className="px-4 py-3">
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>

          { !isLogin &&
            <div className="mb-3">
              <label className="form-label">Confirm password</label>
              <input type="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
          }

          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e, isLogin ? "login" : "register")}>{ isLogin ? 'Sign in' : 'Sign up'}</button>
        </form>
        <div className="dropdown-divider"></div>
        {isLogin ?
          <button className="dropdown-item" onClick={() => viewLogin(false)}>New around here? Sign up</button>
          :
          <button className="dropdown-item" onClick={() => viewLogin(true)}>Have an account? Sign in</button>
        }
        <Link className="dropdown-item" to="#">Forgot password?</Link>

        <p className='mt-5 fs-3 text-dark-subtle' >{error}</p>
      </div>

    </div>
  )
}

export default Register
