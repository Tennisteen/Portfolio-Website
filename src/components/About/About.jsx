import React from 'react'
import {FiAward} from 'react-icons/fi'
import {MdOutlineSportsTennis} from 'react-icons/md'
import aboutme from '../../asset/aboutme.jpg'

import "./about.css"

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className="about_me">
        <div className="image">
          <img src={aboutme} alt="just me" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <artice className="about_card">
            <FiAward className='about_icon'/>
            <h5>Experience/Project</h5>
            <small>Made 3+ projects in UI</small>
          </artice>
        
          <artice className="about_card">
            <MdOutlineSportsTennis className='about_icon' />
            <h5>Extra Ciricular</h5>
            <small>State level gold medalist in lawn tennis</small>
          </artice>
          
        </div>

        <p>
        Seeking a challenging opportunity where I will be able to utilize my strong organizational and technical skills, 
          educational background, and my ability to work well with people, which will allow me to grow personally and 
            professionally. 
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About