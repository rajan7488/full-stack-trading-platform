import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className='container mt-5 p-5 text-center'>
      <div className='row'>
        <h1 className='mb-3 text-muted'>404 the page is not found...</h1>
        <p className='fs-5 mb-4'>We couldn't find the page you were looking for</p>
        <Link to='/'><button className='btn btn-primary p-2 fs-5 mt-3 mb-5' style={{ width: "20%", margin: '0 auto' }}>Visit Home Page</button></Link>
      </div>
    </div>
  )
}
