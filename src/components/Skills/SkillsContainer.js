import React from 'react'
import './SkillsContainer.css';

// Frontend
import react from '../../assets/skills/frontend/react.png';
import next from '../../assets/skills/frontend/next.png';
import tailwind from '../../assets/skills/frontend/tailwind.png';
import javascript from '../../assets/skills/frontend/javascript.png';
import typescript from '../../assets/skills/frontend/typescript.png';
import angular from '../../assets/skills/frontend/angular.png';
import redux from '../../assets/skills/frontend/redux.png';
import bootstrap from '../../assets/skills/frontend/bootstrap.png';
import nodejs from '../../assets/skills/frontend/nodejs.png';
import expressjs from '../../assets/skills/frontend/expressjs.png';
import htmlcss from '../../assets/skills/frontend/htmlcss.png'; 

//backend
import mongodb from '../../assets/skills/backend/mongodb.png';
import dynamodb from '../../assets/skills/backend/dynamodb.png';
import springboot from '../../assets/skills/backend/springboot.png';
import bash from '../../assets/skills/backend/bash.png';
import flask from '../../assets/skills/backend/flask.png';
import mysql from '../../assets/skills/backend/mysql.png';
import postgresql from '../../assets/skills/backend/postgresql.png';
import aws from '../../assets/skills/backend/aws.png';
import supabase from '../../assets/skills/backend/supabase.png';
import firebase from '../../assets/skills/backend/firebase.png';
import apacheflink from '../../assets/skills/backend/apacheflink.png';

// other
import git from '../../assets/skills/other/git.png';
import agile from '../../assets/skills/other/agile.png';
import salesforce from '../../assets/skills/other/salesforce.png';
import dns from '../../assets/skills/other/dns.png';
import jenkins from '../../assets/skills/other/jenkins.png';
import docker from '../../assets/skills/other/docker.png';
import jfrog from '../../assets/skills/other/jfrog.png';
import blazemeter from '../../assets/skills/other/blazemeter.png';
import kubernetes from '../../assets/skills/other/kubernetes.png';
import cypress from '../../assets/skills/other/cypress.png';
import figma from '../../assets/skills/other/figma.png';

// Skills Carousel Object
import { SkillsCarousel } from './SkillsCarousel';

export default function SkillsContainer() {

const frontendSkills = {
      'React.js': [react, 100],
      'JavaScript': [javascript, 100],
      'Next.js': [next, 100],
      'Tailwind': [tailwind, 100],
      'TypeScript': [typescript, 100],
      'Express.js': [expressjs, 100],
      'HTML/CSS': [htmlcss, 100],
      'Node.js': [nodejs, 100],
      'Bootstrap': [bootstrap, 90],
      'Redux': [redux, 90],
      'Angular.js': [angular, 90],
}

    const backendSkills = {
      'Spring Boot' : [springboot, 100],
      'AWS': [aws, 100],
      'PostgreSQL': [postgresql, 100],
      'Supabase': [supabase, 100],
      'MongoDB': [mongodb, 100],
      'Apache Flink' : [apacheflink, 100],
      'DynamoDB': [dynamodb, 90],
      'Bash' : [bash, 90],
      'Flask': [flask, 90],
      'MySQL': [mysql, 90],
      'Firebase': [firebase, 90]
    }

    const otherSkills = {
      'Docker': [docker, 100],
      'Kubernetes': [kubernetes, 100],
      'Git' : [git, 100],
      'Jenkins': [jenkins, 100],
      'Salesforce' : [salesforce, 100],
      'DNS' : [dns, 90],
      'Agile' : [agile, 100],
      'JFrog': [jfrog, 90],
      'BlazeMeter': [blazemeter, 90],
      'Cypress': [cypress, 90],
      'Figma': [figma, 90]
    }

  return (
    <div id="skills-container">
        {/* Frontend Skills */}
        <SkillsCarousel title = 'Frontend' skills = {frontendSkills}/>

        <br/> <br/>
        {/* Backend Skills */}
        <SkillsCarousel title = 'Backend' skills = {backendSkills}/>

        <br/> <br/>
        {/* Other Skills */}
        <SkillsCarousel title = 'Tools, Frameworks & Others' skills = {otherSkills}/>

        <br/> <br/>
    </div>
  )
}
