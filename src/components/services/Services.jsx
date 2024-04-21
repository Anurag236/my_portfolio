import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficiency in multiple programming languages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in developing scalable and maintainable code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Understanding of algorithms and data structures.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Familiarity with software testing and debugging techniques.</p>
            </li>
          </ul>
        </article>

        {/* END of UI/Ux */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mastery of HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficiency in front-end frameworks like React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledge of back-end development using Node.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Awareness of web development tools and libraries.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Familiarity with databases such as MongoDB.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in deploying and managing web applications.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficiency in project planning, scheduling, and resource allocation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in defining project scope, objectives, and deliverables.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to create and manage project documentation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capability to lead and motivate cross-functional teams.</p>
            </li>
          </ul>
        </article>

        {/* END of Content Creation */}

      </div>
    </section>
  )
}

export default Services