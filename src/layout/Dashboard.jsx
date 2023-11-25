import React from 'react'
import Navbar from '../component/dashboard/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../component/dashboard/footer/Footer.jsx'

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
