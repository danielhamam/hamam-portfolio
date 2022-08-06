import React, { useState } from 'react'

// Frontend
import htmlcss from '../../assets/skills/htmlcss.png';
import react from '../../assets/skills/react-icon.png';
import javascript from '../../assets/skills/javascript.png';
import angular from '../../assets/skills/angular.png';
import figma from '../../assets/skills/figma.png'

// Backend
import python from '../../assets/skills/python.png';
import java from '../../assets/skills/java.png';
import sql from '../../assets/skills/sql.png';
import springboot from '../../assets/skills/spring-boot.png';
import bash from '../../assets/skills/bash.png';

// Tools, Frameworks & Others
import git from '../../assets/skills/git2.png';
import agile from '../../assets/skills/agile.png';
import salesforce from '../../assets/skills/salesforce.png';
import dns from '../../assets/skills/DNS.png';
import fcp from '../../assets/skills/fcp.png';

// Skills Carousel Object
import { SkillsCarousel } from './SkillsCarousel';

export default function SkillsContainer() {
    const [frontendSkills, setFrontendSkills] = useState({
      'ReactJS' : [react, 100],
      'HTML / CSS' : [htmlcss, 100],
      'JavaScript' : [javascript, 100],
      'AngularJS' : [angular, 100],
      'Figma' : [figma, 100]
    })
    const [backendSkills, setbackendSkills] = useState({
      'Python' : [python, 100],
      'Java' : [java, 100],
      'SQL' : [sql, 100],
      'Spring Boot' : [springboot, 100],
      'Bash' : [bash, 100]
    })
    const [otherSkills, setOtherSkills] = useState({
      'Git' : [git, 100],
      'Agile' : [agile, 100],
      'Salesforce' : [salesforce, 100],
      'DNS' : [dns, 100],
      'Final Cut Pro' : [fcp, 100]
    })


  return (
    <div>
        {/* Frontend Skills */}
        <SkillsCarousel title = 'Frontend' skills = {frontendSkills}/>

        {/* Backend Skills */}
        <SkillsCarousel title = 'Backend' skills = {backendSkills}/>

        {/* Other Skills */}
        <SkillsCarousel title = 'Tools, Frameworks & Others' skills = {otherSkills}/>
    </div>
  )
}
