import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import Introduction from '../components/Home/Introduction'
import GlobalNavbar from '../components/Nav/GlobalNavbar'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <GlobalNavbar />
      <Introduction />
      <br/> <br/> <br/>
      <HomeNav/>
      <Footer/>
    </>
  )
}
