import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import Introduction from '../components/Home/Introduction'
import { GlobalNavbar } from '../components/Nav/GlobalNavbar'
import Footer from '../components/Footer/Footer'

export const Home = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active} />
      <Introduction />
      <br/> <br/> <br/>
      <HomeNav/>
      <Footer/>
    </>
  )
}
