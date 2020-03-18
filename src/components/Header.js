import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'
import {isAuthenticatedUser} from 'services/auth'

export const Header = () => {
  return (
    <header>
      <h1 className="site-title"><Link to="/">HAGGLE</Link></h1>
      <div className="user-container">
        {isAuthenticatedUser ?
          <img src=""></img>
          :
          <div>
          <Link to="/sign-in" className="sign-in-link">Sign in</Link>
          <Link to="/register" className="registration-link">Register</Link>
          </div>
        }
      </div>
    </header>
  )
}
