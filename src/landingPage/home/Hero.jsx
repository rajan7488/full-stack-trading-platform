import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5 text-center'>
      <div className='row'>
        <img src="media/homeHero.png" alt="HomeImage" className='mb-5' style={{width:"70%",margin:"0 auto"}}/>
        <h1 className='mt-3 fs-1'>Invest in everything</h1>
        <p className='fs-5 mt-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-2 fs-5 mt-3 mb-5' style={{width:"20%", margin:'0 auto'}}>Sign up for free</button>
      </div>
    </div>
  )
}
