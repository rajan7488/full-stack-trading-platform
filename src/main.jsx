import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router'
import HomePage from './landingPage/home/HomePage'
import Signup from './landingPage/signup/Signup'
import About from './landingPage/about/About'
import Product from './landingPage/product/Product'
import SupportPage from './landingPage/support/SupportPage'
import PricingPage from './landingPage/pricing/PricingPage'
import App from './App'
import NotFound from './landingPage/NotFound'


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={Router}/>
</StrictMode>
)
