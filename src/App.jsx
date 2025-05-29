import React from 'react'
import { createBrowserRouter,Route,Router } from 'react-router'
import { Outlet } from 'react-router'
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
export default function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
