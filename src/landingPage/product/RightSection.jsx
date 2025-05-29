import React from 'react'

export default function RightSection({imageURL, productName, productDiscription, tryDemo, learnMore}) {
  return (
    <div className='container p-5 mt-5'>
      <div className='row'>
        <div className='col-5'  >
          <div className='' style={{marginTop:"5rem", marginLeft:"5rem"}}>
          <h2 className='text-muted'>{productName}</h2>
          <p>{productDiscription}</p>
          <div className='mt-3'>
            <a href="">{tryDemo}</a>
            <a href="" style={{marginLeft:"5.5rem"}}>{learnMore}</a>
          </div>
          </div>
        </div>
        <div className='col-1'></div>
        <div className='col-6'>
          <div style={{marginRight:"5rem", marginTop:"0"}}>
            <img src={imageURL} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
