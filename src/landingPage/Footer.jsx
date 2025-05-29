import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <div style={{backgroundColor:'rgb(240,240,240)'}}>
    <div className='container ' >
      <div className='row p-5'>
        <div className='col'>
          <img src="media/logo.svg" alt="" style={{ width: "35%" }} />
          <p>© 2025 - 2025, Trading Broking Ltd.</p>
          <p>All rights reserved.</p>
          <div >
            <a href="https://www.instagram.com/rajansi71/"><FaInstagram  className="icon-hover" size="1.75rem" style={{ marginRight: '10px' }} /></a>
            <a href="https://www.linkedin.com/in/me/"><CiLinkedin className="icon-hover" size="1.75rem" style={{ marginRight: '10px' }} /></a>
            <a href="https://github.com/rajan7488"><FaGithub className="icon-hover" size="1.75rem" style={{ marginRight: '10px' }} /></a>
            <a href="https://www.google.com/"><FaGoogle className="icon-hover" size="1.75rem" style={{ marginRight: '10px' }} /></a>
          </div>
        </div>
        <div className='col'>
          <h2 className='fs-5 mb-4'>Account</h2>
          <p><a href=""  className='foot'>Open demat account</a></p>
          <p><a href="" className='foot'>Minor demat account</a></p>
          <p><a href="" className='foot'>NRI demat account</a></p>
          <p><a href="" className='foot'>Commodity</a></p>
          <p><a href="" className='foot'>Dematerialisation</a></p>
          <p><a href="" className='foot'>Fund transfer</a></p>
          <p><a href="" className='foot'>MTF</a></p>
          <p><a href="" className='foot'>Referral program</a></p>
        </div>
        <div className='col'>
          <h2 className='fs-5 mb-4'>Support</h2>
          <p><a href=""  className='foot'>Contact us</a></p>
          <p><a href="" className='foot'>Support portal</a></p>
          <p><a href="" className='foot'>How to file a complaint?</a></p>
          <p><a href="" className='foot'>Status of your complaints</a></p>
          <p><a href="" className='foot'>Bulletin</a></p>
          <p><a href="" className='foot'>Circular</a></p>
          <p><a href="" className='foot'>Z-Connect blog</a></p>
          <p><a href="" className='foot'>Downloads</a></p>
        </div>
        <div className='col'>
          <h2 className='fs-5 mb-4'>Company</h2>
          <p><a href=""  className='foot'>About</a></p>
          <p><a href="" className='foot'>Philosophy</a></p>
          <p><a href="" className='foot'>Press & media</a></p>
          <p><a href="" className='foot'>Careers</a></p>
          <p><a href="" className='foot'>Zerodha Cares (CSR)</a></p>
          <p><a href="" className='foot'>Zerodha.tech</a></p>
          <p><a href="" className='foot'>Open source</a></p>
        </div>
        <div className='col'>
          <h2 className='fs-5 mb-4'>Quick Link</h2>
          <p><a href=""  className='foot'>Upcoming IPOs</a></p>
          <p><a href="" className='foot'>Brokerage charges</a></p>
          <p><a href="" className='foot'>Market holidays</a></p>
          <p><a href="" className='foot'>Economic calendar</a></p>
          <p><a href="" className='foot'>Calculators</a></p>
          <p><a href="" className='foot'>Markets</a></p>
          <p><a href="" className='foot'>Sectors</a></p>
        </div>
      </div>
    </div>
    <h6 style={{textAlign:"center"}}>@Rajan Singh Bhardwaj</h6>
    </div>
  )
}
