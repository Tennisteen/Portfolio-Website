import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import React, {useRef} from 'react'

import "./contact.css"

const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container cont_container">
        <div className="cont_options">
        <article className="cont_option">
             <AiOutlineMail className='icon'/>
             <h4>Email</h4>
             <h5>prakharchouhan125@gmail.com</h5>
             <a href='mailto:prakharchouha125@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className="cont_option">
             <AiOutlineLinkedin className='icon'/>
             <h4>LinkedIn</h4>
             <h5>Prakhar Chouhan</h5>
             <a href='https://www.linkedin.com/in/prakhar-chouhan/' target='_blank'>Send a message</a>
        </article>
      
       </div>
      </div>
    </section>
  )
}

export default Contact