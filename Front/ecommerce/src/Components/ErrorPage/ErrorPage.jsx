import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='error-page'>
        <div className="content">
            <h1>404</h1>
            <h4>Opps! Page not found</h4>
            <p>Sorry, the page you're looking for doesn't exist. If you think something is broke, report a problem.</p>
            <Link href="#">Return Home</Link>
        </div>

    </div>
  )
}

export default ErrorPage