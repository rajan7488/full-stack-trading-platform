import React from 'react'

export default function Universe() {
  return (
    <div className='container mt-5 p-5'>
      <div className='row'>
        <h1 className='text-center text-muted mb-4'>The Zerodha Universe</h1>
        <p className='text-center text-muted fs-6 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 p-5 text-center'>
          <img src="media/zerodhaFundhouse.png" alt="" style={{width:"55%"}}/>
          <p className='mt-3'>Our asset management venture that is creating simple and transparentindex funds to help you savefor your goals</p>
        </div>
        <div className='col-4 p-5 text-center'>
          <img src="media/sensibullLogo.svg" alt="" style={{width:"55%"}}/>
          <p className='mt-3'>Options trading platform that lets you create strategies, analyaze positions, and examine data points like open interest, fll/Dll, and more.</p>
        </div>
        <div className='col-4 p-5 text-center'>
          <img src="media/goldenpiLogo.png" alt="" style={{width:"55%"}}/>
          <p className='mt-3'>Systamatic trading platform that allows you to create and backtest strategies without coding</p>
        </div>
        <div className='col-4 p-5 text-center'>
          <img src="media/streakLogo.png" alt="" style={{width:"50%"}}/>
          <p className='mt-3'>Our asset management venture that is creating simple and transparentindex funds to help you savefor your goals</p>
        </div>
        <div className='col-4 p-5 text-center'>
          <img src="media/smallcaseLogo.png" alt="" style={{width:"75%"}}/>
          <p className='mt-3'>Options trading platform that lets you create strategies, analyaze positions, and examine data points like open interest, fll/Dll, and more.</p>
        </div>
        <div className='col-4 p-5 text-center'>
          <img src="media/ditto.png" alt="" style={{width:"50%"}}/>
          <p className='mt-3'>Systamatic trading platform that allows you to create and backtest strategies without coding</p>
        </div>
      </div>
    </div>
  )
}
