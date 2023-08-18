import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import { useCookies } from 'react-cookie'

function Navbar() {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(null)
  // eslint-disable-next-line
  const userID = cookies.ID
  const navigate = useNavigate()

  const signOut = () => {
    removeCookie('Email', null)
    removeCookie('AuthToken', null)
    removeCookie('ID', null)
    removeCookie('Updated', null)
    console.log('this is in sign out method ', cookies.AuthToken)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3 fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to='/products'>Products</Link>
            <Link className="nav-link" to="/basket" >Basket</Link>
            {cookies.AuthToken ? (
              <>
                <Link className="nav-link active" aria-current="page" to={`/users/${userID}`} >Profile</Link>
                <button className="nav-link" onClick={signOut}>Log Out</button>
              </>
            ) : (
              <>
                <Link className="nav-link" to='/register'>Sign In</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
