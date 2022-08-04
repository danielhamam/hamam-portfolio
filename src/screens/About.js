import React from 'react'
import AboutMe from '../components/About/AboutMe'
import Footer from '../components/Footer/Footer'
import { GlobalNavbar } from '../components/Nav/GlobalNavbar'

export const About = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active}/>
      <AboutMe/>
      <Footer/>
    </>
  )
}
