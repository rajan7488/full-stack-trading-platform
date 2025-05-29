import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Stats() {
  return (
    <div className='container mt-5'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h2 className='mb-5 '>Trust with confidence</h2>
          <h3 className='fs-4 text-muted'>Customer-first always</h3>
          <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h3 className='fs-4 text-muted'>No spam or gimmicks</h3>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
          <h3 className='fs-4 text-muted'>The Zerodha universe</h3>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='fs-4 text-muted'>Do better with money</h3>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6 p-3'>
          <img src="media/ecosystem.png" alt="ecosystem" style={{width:"100%"}}/>
          <div className='text-center'>
            <a href="" className='inline mr-5' style={{textDecoration:"none"}}>Explore our product</a>
            <a href="" className='ml-5' style={{textDecoration:"none"}}>Try Kite demo </a>
          </div>
        </div>
      </div>
          <img src="media/pressLogos.png" alt="Logo" style={{width:"70%", margin:"0 auto"}} className=''/>

    </div>
  )
}
