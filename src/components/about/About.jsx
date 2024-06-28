import React from 'react'
import './about.css'
import ME from '../../assets/about1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}  />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>2 Interships Completed</small>
            </article>

            <article className='about__card'>
               <FiUsers className='about__icon'/>
               <h5>Clients</h5>
               <small>20+ WorldWide</small>
            </article>

            <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
               <h5>Projects</h5>
               <small>5+ Completed</small>
            </article>
          </div>

          <p>Aspiring software and full-stack developer with strong programming skills, actively seeking challenging job opportunities 
            or internships in the programming world to apply my knowledge and contribute to innovative projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Hire Me</a>
        </div>
      </div>
    </section>
    
  )
}

export default About