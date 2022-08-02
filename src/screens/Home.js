import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import Introduction from '../components/Home/Introduction'
import GlobalNavbar from '../components/Nav/GlobalNavbar'

export default function Home() {
  return (
    <>
      <GlobalNavbar />
      <Introduction />
      <HomeNav/>
    </>
  )
}
