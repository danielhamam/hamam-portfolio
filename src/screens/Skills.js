import React from 'react'
import { GlobalNavbar } from '../components/Nav/GlobalNavbar'
import SkillsContainer from '../components/Skills/SkillsContainer'
import SkillsIntro from '../components/Skills/SkillsIntro'
import Footer from '../components/Footer/Footer'

export const Skills = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active}/>
      <SkillsIntro/>
      <SkillsContainer/>
      <Footer/>
    </>
  )
}
