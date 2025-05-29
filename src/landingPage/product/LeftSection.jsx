import React from 'react'

export default function LeftSection({ imageURL, productName, productDiscription, tryDemo, learnMore }) {
  return (
    <div className='container  mt-5'>
        <div className='row '>
          <div className='col-6 p-5'>
            <img src={imageURL} alt="" />
          </div>
          <div className='col-1'></div>
          <div className='col-5 p-5'>
            <div style={{ marginTop: "3rem" }}>
              <h2 className='text-muted'>{productName}</h2>
              <p>{productDiscription}</p>
              <div className='mt-3'>
                <a href="">{tryDemo}</a>
                <a href="" style={{ marginLeft: "5.5rem" }}>{learnMore}</a>
              </div>
              <div className='mt-4'>
                <a href=""><img src="media/googlePlayBadge.svg" alt="" /></a>
                <a href="" style={{ marginLeft: "1.5rem" }}><img src="media/appstoreBadge.svg" alt="" /></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
