import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function Product() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more" />
        <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn more"
        />
        <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore="" />
        <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
        />
        <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore="" />
        <p className='text-center fs-3 mt-4'>Want to know more about our technology stack? Check out the Trading.tech blog.</p>
        <Universe/>
    </div>
  )
}
