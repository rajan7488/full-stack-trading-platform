import React from 'react'

export default function Education() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 '>
          <img src="media/education.svg" alt="education" />
        </div>
        <div className='col-6 p-5'>
          <h1 className='fs-2 text-muted mb-4'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{textDecoration:"none"}} className='text-xl'>Varsity </a>
          <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}} className='text-xl'>TradingQ&A </a>
        </div>
      </div>
    </div>
  )
}
