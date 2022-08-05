import React from 'react'
import { GlobalNavbar } from '../components/Nav/GlobalNavbar'
import SkillsCarousel from '../components/Skills/SkillsCarousel'
import SkillsIntro from '../components/Skills/SkillsIntro'

export const Skills = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active}/>
      <SkillsIntro/>
      <SkillsCarousel/>
    </>
  )
}
