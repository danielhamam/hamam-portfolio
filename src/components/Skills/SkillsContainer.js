import React from 'react'
import './SkillsContainer.css';

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

    const frontendSkills = {
      'ReactJS' : [react, 90],
      'HTML / CSS' : [htmlcss, 90],
      'JavaScript' : [javascript, 90],
      'AngularJS' : [angular, 80],
      'Figma' : [figma, 85]
    }
    const backendSkills = {
      'Python' : [python, 90],
      'Java' : [java, 90],
      'SQL' : [sql, 90],
      'Spring Boot' : [springboot, 90],
      'Bash' : [bash, 85]
    }
    const otherSkills = {
      'Git' : [git, 90],
      'Agile' : [agile, 100],
      'Salesforce' : [salesforce, 85],
      'DNS' : [dns, 85],
      'Final Cut Pro' : [fcp, 80]
    }

  return (
    <div id="skills-container">
        {/* Frontend Skills */}
        <SkillsCarousel title = 'Frontend' skills = {frontendSkills}/>

        {/* Backend Skills */}
        <SkillsCarousel title = 'Backend' skills = {backendSkills}/>

        {/* Other Skills */}
        <SkillsCarousel title = 'Tools, Frameworks & Others' skills = {otherSkills}/>
    </div>
  )
}
