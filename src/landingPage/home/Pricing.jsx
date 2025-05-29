import React from 'react'

export default function Pricing() {
  return (
    <div className='container '>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='text-muted mb-5'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{textDecoration:"none"}}>See pricing </a>
        </div>  
        <div className='col-6 p-5 mb-5'>
          <div className='row '>
            <div className='col-4 '>
              <img src="media/pricing0.svg" alt="pricing"  style={{width:"60%"}}/>
              <p className='text-center text-sm '>Free account opening</p>
            </div>
            <div className='col-4'>
              <img src="media/pricing-eq.svg" alt="pricing"  style={{width:"60%"}} />
              <p className='text-center text-sm '>Free equity delivery
and direct mutual funds</p>
            </div>
            <div className='col-4'>
              <img src="media/other-trades.svg" alt="pricing"  style={{width:"60%"}} />
              <p className='text-center text-sm '>Intraday and
F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
